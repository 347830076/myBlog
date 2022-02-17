# JS的 6 种打断点调试方式

我们开发中遇到bug，经常需要调试代码，寻找问题所在。 通过`console.log()` 打印是我们最常用的方法。

但是有些逻辑比较复杂的代码，单单通过打印log，就得打印很多log，效率也变得慢了起来。

要是能在合适的地方打断点，一步一步运行代码，能帮助我们理清代码逻辑的执行顺序，也能有效的帮忙我们找到bug问题所在。

掌握以下六种断点方式，能大大提高我们寻找bug问题所在的效率。

- 代码方式
    - debugger
- 谷歌浏览器设置
    - 点击断点
    - 条件断点
    - DOM 发生中断的条件
        - 子树修改
        - 属性修改
        - 移除节点
    - XHR/提取断点
    - 事件监听器断点

## debugger

js代码中写入  `debugger;`

```js
<script>
    let a = 1;
    let b = 2;
    debugger;
    const result = a + b;
</script>
```
在浏览器运行，浏览器就会在debugger处中断了

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/js/debugger/1.png')">

## 点击断点

在浏览器中打开需要调试的代码后，F12 → sources（源代码） → 双击需要调试的文件 → 点击行号打断点，重新刷新页面，页面就会在你点击的行号断点了

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/js/debugger/2.png')">

## 条件断点

右键单击代码所在的行左侧，会出现一个下拉框，可以添加一个条件断点。

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/js/debugger/3.png')">

输入条件表达式，当运行到这一行代码并且表达式的值为真时就会断住，这比普通断点灵活些。

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/js/debugger/4.png')">

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/js/debugger/5.png')">

注意看，我这里是在 **19行** 输入的条件断点表达式是 **b === 2**，因为在当前行设置断点，代码执行结果只有之前的结果，如果你在 **18行** 设置 **b === 2**，那时的 b 还是等于 undefined，断点就不会生效

## DOM 发生中断的条件

在 Chrome Devtools 的 Elements(元素) 面板的对应元素上右键，选择 break on（发生中断的条件），可以添加一个 dom 断点，也就是当子树有变动、属性有变动、节点移除这三种情况的时候会断住。可以用来调试导致 dom 变化的代码。

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/js/debugger/6.png')">

## XHR/提取断点

在 Chrome Devtools 的 Sources（源代码） 面板可以添加 XHR 的 url 断点，当 ajax 请求对应 url 时就会断住，可以用来调试请求相关的代码。

## 事件监听器断点

在 Chrome Devtools 的 Sources(源代码) 面板还可以添加 Event Listener 的断点，指定当发生什么事件时断住，可以用来调试事件相关代码。

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/js/debugger/7.png')">

## 总结

设置断点可以有几种方式，大家可以灵活根据实际场景了断点定位。

经验分享：断点了后，在 Chrome Devtools 的 Sources(源代码) 面板看 脚本的作用域，看每个变量的赋值情况，还可以看调用堆栈，看到达断点位置之前执行了哪些函数。

