# vue3的JSX写法
## 函数式组件

```js
const App = () => <div></div>;
```
## 赋值

```js
const msg = '阿离王'
const App = () => <div> { msg } </div>
```
## 定义事件

```js
const showText = (msg) => { console.log(msg) }

const App = (msg) => <div>
    <div onClick={ showText }></div>
    <div onClick={ () => { showText(msg) } }></div>
</div>;
```

## 在 render 中使用

```js
const App = {
  render() {
    return <div>Vue 3.0</div>;
  },
};
```

```js
import { withModifiers, defineComponent } from "vue";

const App = defineComponent({
  setup() {
    const count = ref(0);

    const inc = () => {
      count.value++;
    };

    return () => (
      <div onClick={withModifiers(inc, ["self"])}>{count.value}</div>
    );
  },
});
```

## Fragment(片段)

```js
const App = () => (
  <>
    <span>I'm</span>
    <span>Fragment</span>
  </>
);
```

## Attributes / Props

```js
const App = () => <input type="email" />;
```

动态绑定:

```js
const placeholderText = "email";
const App = () => <input type="email" placeholder={placeholderText} />;
```

## 指令

### v-show

```js
const App = {
  data() {
    return { visible: true };
  },
  render() {
    return <input v-show={this.visible} />;
  },
};
```

### v-model

```js
<input v-model={val} />

<input v-model={[val, ["modifier"]]} />

<input v-model:argument={val} />

<A v-model={[val, "argument", ["modifier"]]} />
```

以上四种写法都可以，下面两种 `argument` 意思是别名

`v-model:argument={val}`语法糖=>  **:argument={ argument }  @update:argument={ val => argument = val }      $emit('update:argument', 123)**


`<A v-model={[val, "argument", ["modifier"]]} />` 会编译成

```js
h(A, {
  argument: val,
  argumentModifiers: {
    modifier: true,
  },
  "onUpdate:argument": ($event) => (val = $event),
});
```

## 自定义指令

只有 argument 的时候推荐使用

```js
const App = {
  directives: { custom: customDirective },
  setup() {
    return () => <a v-custom:arg={val} />;
  },
};
```

```js
const App = {
  directives: { custom: customDirective },
  setup() {
    return () => <a v-custom={[val, "arg", ["a", "b"]]} />;
  },
};
```

## 插槽

>注意: 在 jsx 中，应该使用 v-slots 代替 v-slot

```js
const A = (props, { slots }) => (
  <>
    <h1>{ slots.default ? slots.default() : 'foo' }</h1>
    <h2>{ slots.bar?.() }</h2>
  </>
);

const App = {
  setup() {
    const slots = {
      bar: () => <span>B</span>,
    };
    return () => (
      <A v-slots={slots}>
        <div>A</div>
      </A>
    );
  },
};

// or

const App = {
  setup() {
    const slots = {
      default: () => <div>A</div>,
      bar: () => <span>B</span>,
    };
    return () => <A v-slots={slots} />;
  },
};

// 或者，当 `enableObjectSlots` 不是 `false` 时，您可以使用对象插槽
const App = {
  setup() {
    return () => (
      <>
        <A>
          {{
            default: () => <div>A</div>,
            bar: () => <span>B</span>,
          }}
        </A>
        <B>{() => "foo"}</B>
      </>
    );
  },
};
```

## 在 TypeScript 中使用

tsconfig.json:

```json
{
  "compilerOptions": {
    "jsx": "preserve"
  }
}
```

## 兼容性

要求：

- Babel 7+
- Vue 3+

[官方文档 Vue 3 Babel JSX 插件](https://github.com/vuejs/babel-plugin-jsx/blob/dev/packages/babel-plugin-jsx/README-zh_CN.md)