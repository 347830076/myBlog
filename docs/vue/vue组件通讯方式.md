# 超详细vue组件间通信的12种方式

## 前言

vue是数据驱动视图更新的框架, 我们平时开发，都会把页面不同模块拆分成一个一个vue组件， 所以对于vue来说组件间的数据通信非常重要，那么组件之间如何进行数据通信的呢？

首先我们需要知道在vue中组件之间存在什么样的关系, 才更容易理解他们的通信方式。

一般我们分为如下关系：

- 父子组件之间通信
- 非父子组件之间通信(兄弟组件、隔代关系组件等)

## props / $emit

父组件通过`props`的方式向子组件传递数据，而通过`$emit` 子组件可以向父组件通信。

1. 父组件向子组件传值

```vue
<!-- 父组件 -->
<template>
  <div class="section">
    <child :msg="articleList"></child>
  </div>
</template>

<script>
import child from './child.vue'
export default {
  name: 'HelloWorld',
  components: { comArticle },
  data() {
    return {
      msg: '阿离王'
    }
  }
}
</script>
```

```vue
<!-- 子组件 child.vue -->
<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  props: {
      msg: String
  }
}
</script>
```

注意：

**prop 只可以从上一级组件传递到下一级组件（父子组件），即所谓的单向数据流。而且 prop 只读，不可被修改，所有修改都会失效并警告。**

- 第一，不应该在一个子组件内部改变 prop，这样会破坏单向的数据绑定，导致数据流难以理解。如果有这样的需要，可以通过 data 属性接收或使用 `computed` 属性进行转换。
- 第二，如果 `props` 传递的是`引用类型(对象或者数组)`，在子组件中改变这个对象或数组，父组件的状态会也会做相应的更新，利用这一点就能够实现父子组件数据的`“双向绑定”`，虽然这样实现能够节省代码，但会`牺牲数据流向的简洁性`，令人难以理解，最好不要这样去做。
- 想要实现父子组件的数据“双向绑定”，可以使用 `v-model` 或 `.sync`。

2. 子组件向父组件传值

使用 `$emit` 向父组件传数据，原理这样的: 父组件在子组件通过`v-on`监听函数并接收参数，vue框架就在子组件监听了你`v-on="fn"`的fn事件函数，在子组件使用`$emit`就能触发了，下面写个例子。

```vue
<!-- 父组件 -->
<template>
  <div class="section">
    <child :msg="articleList" @changMsg="changMsg"></child>
  </div>
</template>

<script>
import child from './child.vue'
export default {
  name: 'HelloWorld',
  components: { comArticle },
  data() {
    return {
      msg: '阿离王'
    }
  },
  methods:{
      changMsg(msg) {
          this.msg = msg
      }
  }
}
</script>
```

```vue
<!-- 子组件 child.vue -->
<template>
  <div>
    {{ msg }}
    <button @click="change">改变字符串</button>
  </div>
</template>

<script>
export default {
  props: {
      msg: String
  },
  methods: {
      change(){
          this.$emit('changMsg', '阿离王带你学习前端')
      }
  }
}
</script>
```

## v-model 指令

`v-model` 是用来在`表单控件`或者`组件`上创建`双向绑定`的，他的本质是 `v-bind` 和 `v-on` 的`语法糖`，在一个组件上使用 `v-model`，默认会为组件绑定名为 `value 的 prop` 和名为 `input` 的事件。

当我们组件中的某一个 `prop` 需要实现上面所说的”双向绑定“时，`v-model` 就能大显身手了。有了它，就不需要自己手动在组件上绑定监听当前实例上的自定义事件，会使`代码更简洁`。

下面以一个 input 组件实现的核心代码，介绍下 `v-model` 的应用。

```vue
<!--父组件-->
<template>
    <base-input v-model="inputValue"></base-input>
</template>
<script>
    export default {
        data() {
            return {
                input: ''
            }
        },
    }
</script>
```

```vue
<!--子组件-->
<template>
    <input type="text" :value="currentValue"  @input="handleInput">
</template>
<script>
    export default {
        data() {
            return {
                currentValue: this.value === undefined || this.value === null ? ''
            }
        },
        props: {
            value: [String, Number], // 关键1
        },
        methods: {
            handleInput(event) {
                const value = event.target.value;
                this.$emit('input', value); // 关键2
            },
        },
}
</script>
```

上面例子看到，`v-model="inputValue"` 他的本质就是 `v-bind 和 v-on 的语法糖`，默认为父组件绑定名为 `:value="inputValue"`的属性，和`@input="(v) => { this.inputValue = v }"`事件，子组件通过 `this.$emit('input', value)` 通知父组件

所以他原理也是利用了我们上面讲的父子组件传参 `props / $emit` 方式来实现双向绑定

有时，在某些特定的控件中名为 value 的属性会有特殊的含义，这时可以通过 `v-model` 选项来回避这种冲突。

## .sync 修饰符

- `.sync` 修饰符在 vue 1.x 的版本中就已经提供，1.x 版本中，当子组件改变了一个带有 `.sync` 的 `prop` 的值时，会将这个值同步到父组件中的值。这样使用起来十分方便，但问题也十分明显，这样破坏了单向数据流，当应用复杂时，debug 的成本会非常高。
- 于是乎，在vue 2.0中移除了 `.sync`。但是在实际的应用中，`.sync` 是有它的应用场景的，所以在 `vue 2.3` 版本中，又迎来了`全新的 .sync`。
- 新的 `.sync` 修饰符所实现的已经不再是真正的双向绑定，它的本质和 `v-model` 类似，只是一种缩写。

正常封装组件例子：

```js
<text-document v-bind:title="doc.title" v-on:update:title="doc.title = $event" />
```
上面的代码，使用 `.sync` 就可以写成

```js
<text-document v-bind:title.sync="doc.title" />
```

这样，在子组件中，就可以通过下面代码来实现对这个 prop 重新赋值了。

```js
this.$emit('update:title', newTitle)
```
看到这里，是不是发现 `.sync` 修饰符 和 `v-model` 很相似，也是语法糖， `v-bind:title.sync` 也就是 等效于 `v-bind:title="doc.title" v-on:update:title="doc.title = $event"`

### v-model 和 .sync 对比

`.sync` 从功能上看和 `v-model` 十分相似，都是为了实现数据的`“双向绑定”`，本质上，也都不是真正的双向绑定，而是`语法糖`。

相比较之下，`.sync` 更加灵活，它可以给多个 `prop` 使用，而 `v-model` 在一个组件中只能有一个。

从语义上来看，`v-model` 绑定的值是指这个组件的绑定值，比如 `input 组件`，`select 组件`，`日期时间选择组件`，`颜色选择器组件`，这些组件所绑定的值使用 `v-model` 比较合适。其他情况，没有这种语义，个人认为使用 `.sync` 更好。
## $parent / $children

通过`$parent`和`$children`就可以访问组件的实例，拿到实例代表什么？代表可以访问此组件的`所有方法`和`data`。列子如下：

```vue
<!-- 父组件 -->
<template>
  <div class="hello_world">
    <div>{{msg}}</div>
    <com-a></com-a>
    <button @click="changeA">点击改变子组件值</button>
  </div>
</template>

<script>
import ComA from './test/comA.vue'
export default {
  name: 'HelloWorld',
  components: { ComA },
  data() {
    return {
      msg: 'Welcome'
    }
  },

  methods: {
    changeA() {
      // 获取到子组件A
      this.$children[0].messageA = 'this is new value'
    }
  }
}
</script>

```

```vue
<!-- 子组件 -->
<template>
  <div class="com_a">
    <span>{{messageA}}</span>
    <p>获取父组件的值为:  {{parentVal}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageA: 'this is old'
    }
  },
  computed:{
    parentVal(){
      return this.$parent.msg;
    }
  }
}
</script>

```

要注意边界情况，如在`#app`上拿`$parent`得到的是`new Vue()`的实例，在这实例上再拿`$parent`得到的是`undefined`，而在最底层的子组件拿`$children`是个`空数组`。也要注意得到$parent和$children的值不一样，`$children 的值是数组`，而`$parent是个对象`

`props $emit` 、 `$parent $children`两种方式用于父子组件之间的通信， 而使用**props进行父子组件通信更加普遍**，二者皆不能用于非父子组件之间的通信。

## provide / inject

`provide / inject` 是vue2.2.0新增的api, 简单来说就是父组件中通过`provide来提供变量`, 然后再子组件中通过`inject来注入变量`。

[官方描述](https://cn.vuejs.org/v2/api/?#provide-inject)： 这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终生效

`provide` 选项应该是

- 一个对象或返回一个对象的函数。该对象包含可注入其子孙的属性。在该对象中你可以使用 ES2015 Symbols 作为 key，但是只在原生支持 Symbol 和 Reflect.ownKeys 的环境下可工作。

`inject` 选项应该是：

- 一个字符串数组
- 一个对象(详情点击[这里](https://cn.vuejs.org/v2/api/?#provide-inject))

### 基本用法

```js
// 祖先组件 提供foo
//第一种
export default {
  name: "father",
  provide() {
    return {
      foo: 'hello'
    }
  },
}
//第二种
export default {
  name: "father",
  provide: {
    foo:'hello~~~~'
  },
}
```
``` js
//后代组件 注入foo, 直接当做this.foo来用
export default {
  inject:['foo'],
}
```

上面的两种用法有什么区别吗？

- 如果你只是传一个字符串，像上面的`hello`，那么是没有区别的，后代都能读到。
- 如果你需要`this`对象属性的值（如下所示代码），那么第二种是传不了的，后代组件拿不到数据。所以建议只写第一种

```js
//当你传递对象给后代时
provide() {
    return {
        test: this.msg
    }
},
```

注意：一旦注入了某个数据，比如上面示例中的 foo，那这个组件中就不能再声明 foo 这个数据了，因为它已经被父级占有。

### provide 和 inject 绑定并不是可响应的。

这是刻意为之的。然而，如果你传入了一个可监听的`对象`，那么其对象的属性还是可响应的。因为对象是引用类型。

先来个值类型的数据（也就是字符串）例子，不会响应

```js
provide(){
  return{
    test:this.msg
  }
},
data() {
  return {
    msg: "Welcome to Your Vue.js App",
  }
}
mounted(){
  setTimeout(()=>{
    this.msg = "halo world";
    console.log(this._provided.msg)
    //log：Welcome to Your Vue.js App
  },3000)
},
```
如上所示，这样做是不行的，打印出来的 `_provided` 中的数据并没有改，子组件取得值也没变。

你甚至可以直接给 `this._provided.msg` 赋值，但是即使是_provided.msg 里面的值改变了，子组件的取值，依然没有变。

当你的参数是对象的时候，就可以响应了，如下：

```js
provide(){
  return{
    test:this.activeData
  }
},
data() {
  return {
    activeData:{name:'halo'},
  }
}
mounted(){
  setTimeout(()=>{
    this.activeData.name = 'world';
  },3000)
}
```

这就是vue官方中写道的对象的属性是可以响应的

### provide/inject 实现全局变量

provide/inject不是只能从祖先传递给后代吗？是的，但是，如果我们绑定到最顶层的组件app.vue，是不是所有后代都接收到了，就是当做全局变量来用了。

```js
//app.vue
export default {
  name: 'App',
  provide(){
    return{
      app:this
    }
  },
  data(){
    return{
      text:"it's hard to tell the night time from the day"
    }
  },
  methods:{
    say(){
      console.log("Desperado, why don't you come to your senses?")
    }
  }
}
```

```js
//其他所有子组件，需要全局变量的，只需要按需注入app即可
export default {
  inject:['foo','app'],
  mounted(){
    console.log(this.app.text); // 获取app中的变量
    this.app.say(); // 可以执行app中的方法，变身为全局方法！
  }
}
```

### provide/inject 实现页面刷新，不闪烁

1. 用`vue-router`重新路由到当前页面，页面是不进行刷新的
2. 采用`window.reload()`，或者`router.go(0)`刷新时，整个浏览器进行了重新加载，闪烁，体验不好

**那我们怎么做呢？**

跟上面的原理差不多，我们只在控制路由的组件中写一个函数（使用v-if控制router-view的显示隐藏,这里的原理不作赘述），然后把这个函数传递给后代，然后在后代组件中调用这个方法即可刷新路由啦。

```js
//app.vue
<router-view v-if="isShowRouter"/>

export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isShowRouter: true,
    }
  },
  methods:{
    reload() {
      this.isShowRouter = false;
      this.$nextTick(() => { 
        this.isShowRouter = true;
      })
    }
  }
}
```

```js
//后代组件
export default {
  inject: ['reload'],  
}
```

这里 provide 使用了函数传递给后代，然后后代调用这个函数，这种思路，也是可以做子后代向父组件传参通讯的思路了。这里的原理，和 event 事件订阅发布就很像了

## ref / $refs

`ref`：如果在普通的 DOM 元素上使用，引用指向的就是 `DOM 元素`；如果用在`子组件`上，引用就指向`组件实例`，可以通过实例直接调用组件的方法或访问数据， 我们看一个ref 来访问组件的例子:

```js
// 子组件 A.vue

export default {
  data () {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    sayHello () {
      console.log('hello')
    }
  }
}

```

```js
// 父组件 app.vue

<template>
  <component-a ref="comA"></component-a>
</template>
<script>
  export default {
    mounted () {
      const comA = this.$refs.comA;
      console.log(comA.name);  // Vue.js
      comA.sayHello();  // hello
    }
  }
</script>

```

ref 这种方式，就是获取子组件的实例，然后可以直接子组件的方法和访问操作data的数据，就是父组件控制子组件的一种方式，子组件想向父组件传参或操作，只能通过其他的方式了

## eventBus

`eventBus`呢，其实原理就是 事件订阅发布，`eventBus` 又称为事件总线，在vue中可以使用它来作为沟通桥梁的概念, 就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件。

这里我们可以直接使用 vue 自带的事件监听，也就是 $emit $on，我们来简单封装下：

1. 首先需要创建一个事件总线并将其导出, 以便其他模块可以使用或者监听它.

新建一个 `event-bus.js` 文件
```js
// event-bus.js

import Vue from 'vue'
export const EventBus = new Vue()

```

2. 发生事件

假设你有两个组件: additionNum 和 showNum, 这两个组件可以是兄弟组件也可以是父子组件；这里我们以兄弟组件为例:

```vue
<template>
  <div>
    <show-num-com></show-num-com>
    <addition-num-com></addition-num-com>
  </div>
</template>

<script>
import showNumCom from './showNum.vue'
import additionNumCom from './additionNum.vue'
export default {
  components: { showNumCom, additionNumCom }
}
</script>
```

```vue
// addtionNum.vue 中发送事件

<template>
  <div>
    <button @click="additionHandle">+加法器</button>    
  </div>
</template>

<script>
import { EventBus } from './event-bus.js'
console.log(EventBus)
export default {
  data() {
    return {
      num: 1
    }
  },

  methods: {
    additionHandle() {
      EventBus.$emit('addition', {
        num: this.num++
      })
    }
  }
}
</script>
```

3. 接收事件

```vue
// showNum.vue 中接收事件

<template>
  <div>计算和: {{count}}</div>
</template>

<script>
import { EventBus } from './event-bus.js'
export default {
  data() {
    return {
      count: 0
    }
  },

  mounted() {
    EventBus.$on('addition', param => {
      this.count = this.count + param.num;
    })
  }
}
</script>
```

这样就实现了在组件`addtionNum.vue`中点击相加按钮, 在showNum.vue中利用传递来的 num 展示求和的结果.

4. 移除事件监听者

如果想移除事件的监听, 可以像下面这样操作:

```js
import { eventBus } from 'event-bus.js'
EventBus.$off('addition')
```

### 自己封装一套 eventBus

这里使用自己封装一套eventBus也行，方便自己想干啥就干啥， 下面贴封装好的一套给大家

```js
/* eslint-disable no-console */
// 事件映射表
let eventMap = {}

/**
 * 监听事件
 * @param {string}    eventName 事件名
 * @param {function}  listener 回调函数
 * @param {object}    instance 注册事件的实例
 */
function on(eventName, listener, instance) {
  eventMap[eventName] = eventMap[eventName] || []
  eventMap[eventName].push({
    listener,
    instance,
  })
}

// 监听事件，只执行一次
function once(eventName, listener, instance) {
  eventMap[eventName] = eventMap[eventName] || []
  eventMap[eventName].push({
    listener,
    instance,
    once: true,
  })
}

// 解除事件监听
function off(eventName, listener) {
  // 解除所有事件监听
  if (!eventName) {
    eventMap = {}
    return
  }

  // 没有对应事件
  if (!eventMap[eventName]) {
    return
  }

  // 解除某事件监听
  eventMap[eventName].forEach((currentEvent, index) => {
    if (currentEvent.listener === listener) {
      eventMap[eventName].splice(index, 1)
    }
  })
}

// 发送事件，执行对应响应函数
function emit(eventName, ...args) {
  if (!eventMap[eventName]) {
    return
  }

  eventMap[eventName].forEach((currentEvent, index) => {
    currentEvent.listener(...args)
    if (currentEvent.once) {
      eventMap[eventName].splice(index, 1)
    }
  })
}

// 显示当前注册的事件，代码优化时使用
function showEventMap(targetEventName) {
  if (targetEventName) { // 查看具体某个事件的监听情况
    eventMap[targetEventName].forEach(eventItem => {
      console.log(targetEventName, eventItem.instance, eventItem.listener)
    })
  } else { // 查看所以事件的监听情况
    Object.keys(eventMap).forEach(eventName => {
      eventMap[eventName].forEach(eventItem => {
        console.log(eventName, eventItem.instance, eventItem.listener)
      })
    })
  }
}

// 提供 vue mixin 方法，在 beforeDestroy 自动注销事件监听
export const mixin = {
  created() {
    // 重载 on 函数，收集本组件监听的事件，待消除时，销毁事件监听
    this.$eventListenerList = []
    this.$event = { off, once, emit, showEventMap }
    this.$event.on = (eventName, listener) => {
      this.$eventListenerList.push({ eventName, listener })
      on(eventName, listener)
    }
  },

  // 消除组件时，自动销毁事件监听
  beforeDestroy() {
    this.$eventListenerList.forEach(currentEvent => {
      off(currentEvent.eventName, currentEvent.listener)
    })
  },
}

export default { on, off, once, emit, showEventMap }
```

如何使用呢，只需在 项目的 `main.js`, 引入 ，然后 Vue.mixin 即可，如下:

```js
// main.js
import Vue from 'vue'
import { mixin as eventMixin } from '@/event/index'

Vue.mixin(eventMixin)
```

在vue项目其他文件，就可以直接 `this.$event.on` `this.$event.$emit`  如下：

```
this.$event.on('test', (v) => { console.log(v) })   this.$event.$emit('test', 1)
```

还顺便封装了个mixin, 好处呢，就是在vue页面监听事件后，页面销毁后，也自动销毁了事件监听

## Vuex

### Vuex介绍

- `Vuex` 是一个专为 Vue.js 应用程序开发的`状态管理模式`。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化.

- `Vuex` 解决了多个视图依赖于同一状态和来自不同视图的行为需要变更同一状态的问题，将开发者的精力聚焦于数据的更新而不是数据在组件之间的传递上

### Vuex各个模块

- `state`：用于数据的存储，是store中的`唯一数据源`
- `getters`：如vue中的计算属性一样，基于state数据的二次包装，常用于数据的筛选和多个数据的相关性计算
- `mutations`：类似函数，改变state数据的唯一途径，且不能用于处理异步事件
- `actions`：类似于mutation，用于提交mutation来改变状态，而不直接变更状态，可以包含任意异步操作
- `modules`：类似于命名空间，用于项目中将各个模块的状态分开定义和操作，便于维护

###  Vuex实例应用

这里我们先新建 `store文件夹`， 对Vuex进行一些封装处理

在 store 文件夹下添加 `index.js` 文件

```js
// index.js

// 自动挂载指定目录下的store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let modules = {}

// @/store/module 目录下的文件自动挂载为 store 模块
const subModuleList = require.context('@/store/modules', false, /.js$/)
subModuleList.keys().forEach(subRouter => {
  const moduleName = subRouter.substring(2, subRouter.length - 3)
  modules[moduleName] = subModuleList(subRouter).default
})

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules
})

```

在 store 文件夹下添加 `module` 文件夹，在module文件夹再新建 `user.js` 文件

```js
// user.js

import user from '@/utils/user.js'
import userApi from '@/apis/user'
import { OPEN_ACCOUNT_STAGE, STAGE_STATUS } from '@/constant'

let getUserPromise = null

export default {
  namespaced: true,
  state() {
    return {
      userInfo: null, // 用户信息
      isLogined: !!user.getToken(), // 是否已经登录
    }
  },
  mutations: {
    // 更新用户信息
    updateUser(state, payload) {
      state.isLogined = !!payload
      state.userInfo = payload
    },
  },
  actions: {
    // 获取当前用户信息
    async getUserInfo(context, payload) {
      // forceUpdate 表示是否强制更新
      if (context.state.userInfo && !payload?.forceUpdate) {
        return context.state.userInfo
      }
      if (!getUserPromise || payload?.forceUpdate) {
        getUserPromise = userApi.getUserInfo()
      }
      // 获取用户信息
      try {
        const userInfo = await getUserPromise
        context.commit('updateUser', userInfo)
      } finally {
        getUserPromise = null
      }
      return context.state.userInfo
    },

    // 登出
    async logout(context, payload = {}) {
      // 是否手动退出
      const { manual } = payload
      if (manual) {
        await userApi.postLogout()
      }
      user.clearToken()
      context.commit('updateUser', null)
    },
  }
}

```

然后在项目的 `main.js` 文件中引入

```js
import Vue from 'vue'
import App from '@/app.vue'
import { router } from '@/router'
import store from '@/store/index'

const vue = new Vue({
  el: '#app',
  name: 'root',
  router,
  store,
  render: h => h(App),
})
```
封装的很愉快了，然后就正常操作即可。

```js
this.$store.state.user.isLogined
this.$store.state.user.userInfo
this.$store.commit('user/updateUser', {})
 await this.$store.dispatch('user/logout', { manual: true })
```

## localStorage / sessionStorage

这种通信比较简单,缺点是数据和状态比较混乱,不太容易维护。 

- 通过`window.localStorage.getItem(key)`获取数据 
- 通过`window.localStorage.setItem(key,value)`存储数据

**注意用`JSON.parse()` / `JSON.stringify()` 做数据格式转换， localStorage / sessionStorage可以结合vuex, 实现`数据的持久保存`,同时使用vuex解决数据和状态混乱问题.**

## 自己实现简单的 Store 模式

对于小型的项目，通信十分简单，这时使用 Vuex 反而会显得冗余和繁琐，这种情况最好不要使用 Vuex，可以自己在项目中实现简单的 Store。

```js
// store.js
const store = {
  debug: true,
  state: {
    author: 'yushihu!'
  },
  setAuthorAction (newValue) {
    if (this.debug) console.log('setAuthorAction triggered with', newValue)
    this.state.author = newValue
  },
  deleteAuthorAction () {
    if (this.debug) console.log('deleteAuthorAction triggered')
    this.state.author = ''
  }
}
export default store
```

上面代码原理就是，`store.js文件`暴露出一个`对象 store`，通过引入 `store.js 文件` 各个页面来共同维护这个`store对象`

和 Vuex 一样，store 中 state 的改变都由 store 内部的 action 来触发，并且能够通过 `console.log()` 打印触发的痕迹。这种方式十分适合在不需要使用 Vuex 的小项目中应用。

与 `$root` 访问根实例的方法相比，这种`集中式状态管理的方式`能够在调试过程中，通过 `console.log()` 记录来确定当前变化是如何触发的，更容易定位问题。

## 通过 $root 访问根实例

通过 `$root`，任何组件都可以获取当前`组件树的根 Vue 实例`，通过维护根实例上的 data，就可以实现组件间的`数据共享`。

```js
//main.js 根实例
new Vue({
    el: '#app',
    store,
    router,
    // 根实例的 data 属性，维护通用的数据
    data: function () {
        return {
            author: ''
        }
    },
    components: { App },
    template: '<App/>',
});


<!--组件A-->
<script>
export default {
    created() {
        this.$root.author = '于是乎'
    }
}
</script>


<!--组件B-->
<template>
    <div><span>本文作者</span>{{ $root.author }}</div>
</template>
```

<b class="red">注意：通过这种方式，虽然可以实现通信，但在应用的任何部分，任何时间发生的任何数据变化，都不会留下变更的记录，这对于稍复杂的应用来说，调试是致命的，不建议在实际应用中使用。</b>

## $attrs与 $listeners

现在我们来讨论一种情况， 我们一开始给出的组件关系图中A组件与D组件是隔代关系， 那它们之前进行通信有哪些方式呢？

1. 使用`props`绑定来进行一级一级的信息传递, 如果D组件中状态改变需要传递数据给A, 使用事件系统一级级往上传递
2. 使用`eventBus`,这种情况下还是比较适合使用, 但是碰到多人合作开发时, `代码维护性较低, 可读性也低`
3. 使用`Vuex`来进行数据管理, 但是如果`仅仅是传递数据`, 而不做中间处理,使用Vuex处理感觉有点`大材小用`了.

所以就有了 `$attrs` / `$listeners` ，通常配合 `inheritAttrs` 一起使用。

[inheritAttrs](https://cn.vuejs.org/v2/api/#inheritAttrs)

默认情况下父作用域的不被认作 `props` 的 `attribute` 绑定 (attribute bindings) 将会“回退”且作为普通的 HTML attribute 应用在子组件的根元素上。当撰写包裹一个目标元素或另一个组件的组件时，这可能不会总是符合预期行为。

通过设置 `inheritAttrs` 到 `false`，这些默认行为将会被去掉。而通过 (同样是 2.4 新增的) 实例 property $attrs 可以让这些 attribute 生效，且可以通过 v-bind 显性的绑定到非根元素上。

注意：这个选项不影响 `class` 和 `style` 绑定。

上面是官方描述：还是很难懂。

简单的说就是 

- `inheritAttrs：true` 时继承除props之外的所有属性
- `inheritAttrs：false` 只继承class 和 style属性

`$attrs`：包含了父作用域中不被认为 (且不预期为) props 的特性绑定 (`class 和 style 除外`)，并且可以通过 `v-bind="$attrs"` 传入内部组件。当一个组件没有声明任何 `props` 时，它包含所有父作用域的绑定 (class 和 style 除外)。

`$listeners`：包含了父作用域中的 (`不含 .native 修饰符`) v-on 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件。它是一个对象，里面包含了作用在这个组件上的所有事件监听器，相当于`子组件继承了父组件的事件`。

讲了这么多文字概念，我们还是来看代码例子吧：

新建一个 father.vue 组件

```vue
<template>
　　 <child :name="name" :age="age" :infoObj="infoObj" @updateInfo="updateInfo" @delInfo="delInfo" />
</template>
<script>
    import Child from '../components/child.vue'

    export default {
        name: 'father',
        components: { Child },
        data () {
            return {
                name: '阿离王',
                age: 22,
                infoObj: {
                    from: '广东',
                    job: 'policeman',
                    hobby: ['reading', 'writing', 'skating']
                }
            }
        },
        methods: {
            updateInfo() {
                console.log('update info');
            },
            delInfo() {
                console.log('delete info');
            }
        }
    }
</script>
```

child.vue 组件：

```vue
<template>
    <!-- 通过 $listeners 将父作用域中的事件，传入 grandSon 组件，使其可以获取到 father 中的事件 -->
    <grand-son :height="height" :weight="weight" @addInfo="addInfo" v-bind="$attrs" v-on="$listeners"  />
</template>
<script>
    import GrandSon from '../components/grandSon.vue'
    export default {
        name: 'child',
        components: { GrandSon },
        props: ['name'],
        data() {
          return {
              height: '180cm',
              weight: '70kg'
          };
        },
        created() {
            console.log(this.$attrs); 
　　　　　　　// 结果：age, infoObj, 因为父组件共传来name, age, infoObj三个值，由于name被 props接收了，所以只有age, infoObj属性
            console.log(this.$listeners); // updateInfo: f, delInfo: f
        },
        methods: {
            addInfo () {
                console.log('add info')
            }
        }
    }
</script>
```

grandSon.vue 组件

```vue
<template>
    <div>
        {{ $attrs }} --- {{ $listeners }}
    <div>
</template>
<script>
    export default {
        props: ['weight'],
        created() {
            console.log(this.$attrs); // age, infoObj, height 
            console.log(this.$listeners) // updateInfo: f, delInfo: f, addInfo: f
            this.$emit('updateInfo') // 可以触发 father 组件中的updateInfo函数
        }
    }
</script>
```

这种方式的传值虽然说不常用，感觉可读性不是很好。但其对于组件层级嵌套比较深，使用props会很繁琐，或者项目比较小，不太适合使用 Vuex 的时候，可以考虑用它

## 总结

常见使用场景可以分为三类:

- 父子组件通信: `props`、`$parent / $children`、` provide / inject` 、 `ref \ $refs` 、` $attrs / $listeners`
- 兄弟组件通信: `eventBus` 、 `vuex`、 `自己实现简单的 Store 模式`
- 跨级通信: `eventBus`、 `Vuex`、 `自己实现简单的 Store 模式`、 `provide / inject` 、 `$attrs / $listeners`

参考文章 

[vue中8种组件通信方式, 值得收藏!](https://juejin.cn/post/6844903887162310669)

[你可能不知道的provide / inject 用法](https://segmentfault.com/a/1190000020954324)

[vue中的$attrs和$listeners](https://segmentfault.com/a/1190000022708579)

[vue 组件通信看这篇就够了(12种通信方式)](https://zhuanlan.zhihu.com/p/109700915)