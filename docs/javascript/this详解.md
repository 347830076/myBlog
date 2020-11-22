## this的学习

- 解析器在调用函数时，每次都会向函数内部传递一个隐含的参数**this**，
- 这个隐含参数就是**this**, this指向的是一个**对象**，
- 这个对象我们称为**函数执行的上下文对象**
- 根据函数的调用方式的不同，this会指向不同的对象
 - 1.以函数的形式调用时，**this**指向的是**window**
 - 2.以方法的形式调用时，this就是调用方法的那个对象
 - 3.当以构造函数的形式调用时，this就是新创建的那个对象
 - 4.使用call()和apply()调用时，this就是call()和apply()第一个参数的对象
 - 5.使用bind()()调用时，this就是bind()第一个参数的对象
 - 6.箭头函数的 this 始终指向函数定义时的 this，而非执行时。
**this 永远指向最后调用它的那个对象**

```js
function fn(){
    console.log(this); //window
}
fn();
```
上面例子直接执行函数，这时的this指向window

下面再来个例子：
```js
function fn(){
    console.log(this);
}
let obj = {
    name: '阿离王',
    fn: fn,
};
obj.fn();
```
这时上面的例子打印的this 指向 obj对象了

```js
let name = '全局name';

function fn(){
    console.log(this.name);
}

let obj = {
    name: '阿离王',
    fn:fn
};

let obj2 = {
    name: '张三',
    fn
}

fn(); // 全局name
obj.fn(); // 阿离王
obj2.fn(); // 张三
```

## 构造函数

- 使用new关键词调用的函数，是构造函数(constructor)
- 构造函数是专门用来创建对象的函数
- 构造函数就是一个普通的函数，
- 不同的是，构造函数习惯上函数名首字母大写(不成文规范)
- 构造函数和普通函数的区别就是调用方式的不同
- 普通函数是直接调用，而构造函数需要使用**new关键字**来调用

**构造函数的执行流程：**
 - 1.立刻创建一个新的对象（在内存开辟一个新空间）
 - 2.将新建的对象设置为函数中的this的指向新建的对象，在构造函数中可以使用this来引用新建的对象
 - 3.逐行执行函数中的代码
 - 4.将新建的对象作为返回值返回

使用同一个构造函数创建的对象，我们称为`一类对象`，也将一个构造函数称为一个**类**

我们将通过一个构造函数创建的对象，称为是该类的实例，   new 一个构造函数，我们称为实例化一个对象出来

```js
function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
}

let per = new Person('阿离王', 28);
let per1 = new Person('张三', 20);
let per2 = new Person('李四', 19);
console.log(per);
console.log(per1);
console.log(per2.sayName());

function Dog(){
}
let dog = new Dog();
console.log(dog);
```

## call() 和 apply()
- 这两个方法都是函数对象的方法，需要通过函数来调用
- 当对函数调用call()和apply()都也会调用原函数
- 在调用call()和apply()时，第一个参数为一个对象
   此时这个对象将会成为函数执行时的this

```js
function fn(a, b){
    console.log(a, b);
    console.log(this);
}
let obj = {name: 'yu'};
fn.call(obj, 1, 2);
fn.apply(obj, [3, 4]);

let obj2 = {
    name: '阿离王',
    sayName: function(){
        console.log(this.name);
    }
}
let obj3 = {name: 'obj3'}
obj2.sayName.call(obj3);
```

## bind()

bind() 是创建一个新的函数，我们必须要手动去调用：

所以得写成bind()()

```js
function fn(a, b){
    console.log(a, b);
    console.log(this);
}
let obj = {name: 'yu'};
fn.call(obj, 1, 2);
fn.apply(obj, [3, 4]);
fn.bind(obj, 5, 6)();
```

## 箭头函数

众所周知，ES6 的箭头函数是可以避免 ES5 中使用 `this` 的坑的。**箭头函数的 this 始终指向函数定义时的 this，而非执行时**。，箭头函数需要记着这句话：“箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined”。

```js
let name = "windowsName";

let a = {
    name : "yu",

    func1: function () {
        console.log(this.name)     
    },

    func2: function () {
        setTimeout( () => {
            this.func1()
        },100);
    }

};

a.func2()     // yu
```

如果不使用 ES6，那么这种方式应该是最简单的不会出错的方式了，我们是先将调用这个函数的对象保存在变量 that 中，然后在函数中都使用这个 that，这样 that 就不会改变了。

```js
let name = "windowsName";

let a = {

    name : "yu",

    func1: function () {
        console.log(this.name); 
    },

    func2: function () {
        let that = this;
        setTimeout( function() {
            that.func1();
        },100);
    }

};

a.func2();       //yu
```

<a href="https://juejin.im/post/6844903496253177863" target="_blank" style="color: red"> 点击参考 this call() apply() bind()的详细介绍 </a>