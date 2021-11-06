# sass 用法

## 前言

学过`CSS`的人都知道，它不是一种编程语言。不能写逻辑编程，只能一行一行css属性编写样式。项目大了写重复性的样式就多了，而且维护起来也麻烦。

很自然地，有人就开始为CSS加入编程元素，这被叫做`"CSS预处理器"`（css preprocessor）。它的基本思想是，用一种专门的编程语言开发，然后再编译成正常的CSS文件。

在众多CSS预处理器中，比较符合写css开发习惯的，是[SASS](https://sass-lang.com/)。

写这篇文章的目的是，整理日常开发使用到的`SASS`用法。使得开发`SASS`通俗易懂，方便查找，也不需要去[官方网站](https://sass-lang.com/)看英文版的了。

## 安装

`SASS`是`Ruby`语言写的，但是两者的语法没有关系。不懂`Ruby`，照样使用。只是必须先安装`Ruby`，然后再安装`SASS`。

[下载Ruby](https://www.ruby-lang.org/zh_cn/downloads/) [Ruby 安装](https://www.runoob.com/ruby/ruby-installation-unix.html)

假定你已经安装好了Ruby

### NPM 安装

```
npm install -g sass
```

更多安装方法可以查看官网：[https://sass-lang.com/install](https://sass-lang.com/install)

安装完后检查 sass 版本

```
sass --version
```

## 使用

SASS文件就是普通的文本文件，里面可以直接使用CSS语法。文件后缀名是.scss

我们新建个`test.scss`文件，在当前文件路径下开启终端，运行以下命令，就可以把`test.scss`文件编译生成一个`test.css`文件出来

```
sass test.scss test.css
```

SASS提供四个[编译风格](https://sass-lang.com/documentation/cli/dart-sass#style)的选项：

- `nested`：嵌套缩进的css代码，它是默认值。
- `expanded`：没有缩进的、扩展的css代码。
- `compact`：简洁格式的css代码。
- `compressed`：压缩后的css代码。

### 你也可以让SASS监听某个文件或目录，一旦源文件有变动，就自动生成编译后的版本。

```
// watch a file
sass --watch input.scss:output.css

// watch a directory
sass --watch app/sass:public/stylesheets
```

SASS的官方网站，提供了一个[在线转换器](https://www.sassmeister.com/)。你可以在那里，试运行下面的各种例子。

## 变量

变量以$开头

```css
$blue : #1875e7;　

div {
　color : $blue;
}
```

如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。

```css
$side : left;

.box-#{$side} {
    color: #000;
}
.rounded {
　border-#{$side}-radius: 5px;
}
```

## 计算功能
SASS允许在代码中使用算式：

```css
body {
　　margin: (14px/2);
　　top: 50px + 100px;
　　right: $var * 10%;
}
```

## 嵌套

SASS允许选择器嵌套。比如，下面的CSS代码：

```css
div h1 {
　　color : red;
}
```
可以写成：
```css
div {
　  hi {
　　　　color:red;
　　}
}
```

`属性也可以嵌套`，比如border-color属性，可以写成：

```css
p {
　　border: {
　　　　color: red;
　　}
}
```

<b class="red">注意，border后面必须加上冒号。</b>

在嵌套的代码块内，可以使用`&引用父元素`。比如a:hover伪类，可以写成：

```css
a {
　　&:hover { color: #ffb3ff; }
}
```

或者`&引用父元素名称`做选择器名称也可以

```css
.box{
    color: #ccc;
    &-left{
        color: red;
    }
}
#app{
    font-size: 14px;
    &-big{
        font-size: 16px;
    }
}
```

## 注释
SASS共有两种注释风格。

标准的CSS注释 `/* comment */` ，会保留到编译后的文件。

单行注释 `// comment`，只保留在SASS源文件中，编译后被省略。

在/*后面加一个感叹号，表示这是"重要注释"。即使是压缩模式编译，也会保留这行注释，通常可以用于声明版权信息。

```css
.box{
    font-size: 14px; /* 字体大小 */
    color: #333; // 字体颜色
}
/*!
　　重要注释！
*/
```

## 继承

SASS允许一个选择器，继承另一个选择器

```css
.class1 {
　　border: 1px solid #ddd;
}
.class2{
    @extend .class1;
    font-size: 14px;
}
```

## Mixin

可以重用的代码块。

使用`@mixin`命令，定义一个代码块。

使用`@include`命令，调用这个mixin。

```css
@mixin left {
　　float: left;
　　margin-left: 10px;
}
div {
    @include left;
}
```

mixin的强大之处，在于可以指定参数和缺省值。

```scss
@mixin left($value: 10px) {
　　float: left;
　　margin-right: $value;
}

div {
　　@include left(20px);
}
```

下面是一个mixin的实例，用来生成浏览器前缀。

```scss
@mixin rounded($vert, $horz, $radius: 10px) {
　　border-#{$vert}-#{$horz}-radius: $radius;
　　-moz-border-radius-#{$vert}#{$horz}: $radius;
　　-webkit-border-#{$vert}-#{$horz}-radius: $radius;
}

#navbar li { @include rounded(top, left); }

#footer { @include rounded(top, left, 5px); }
```

调用mixin时可以传入缺省值

```scss
@mixin box($type){
    .box-#{$type}{
        @content;
    }
}
@include box(left){
    left: 0;
};
@include box(right){
    right: 0;
};
```

## 导入文件

@import命令，用来插入外部文件。

```scss
@import "path/filename.scss";
```

如果需要导入 SCSS 或者 Sass 文件，但又不希望将其编译为 CSS，只需要在文件名前添加下划线，这样会告诉 Sass 不要编译这些文件，但导入语句中却不需要添加下划线。

例如，将文件命名为 _colors.scss，便不会编译 _colours.css 文件。

```scss
@import "colors";
```
上面的例子，导入的其实是 _colors.scss 文件

注意，不可以同时存在添加下划线与未添加下划线的同名文件，添加下划线的文件将会被忽略。

### 嵌套 @import

大多数情况下，一般在文件的最外层（不在嵌套规则内）使用 `@import`，其实，也可以将 `@import` 嵌套进 CSS 样式中，与平时的用法效果相同，只是这样导入的样式只能出现在嵌套的层中。

假设 `example.scss` 文件包含以下样式：

```scss
.example {
  color: red;
}
```

然后导入到 `#main` 样式内

将会被编译为

```css
#main .example {
  color: red;
}
```

## 条件语句

### @if可以用来判断：

```scss
p {
　　@if 1 + 1 == 2 { border: 1px solid; }
　　@if 5 < 3 { border: 2px dotted; }
}
```

### 配套的还有@else命令：

```scss
@if lightness($color) > 30% {
　　background-color: #000;
} @else {
　　background-color: #fff;
}
```

## 循环语句

### for循环

`@for` 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动。

这个指令包含两种格式：

- `@for $var from <start> through <end>`，
- 或者 `@for $var from <start> to <end>`，
- 区别在于 `through` 与 `to` 的含义：
    - 当使用 `through` 时，条件范围包含` <start> 与 <end>`的值，
    - 而使用 `to` 时条件范围只包含 `<start>` 的值不包含 `<end>` 的值。
- 另外，`$var` 可以是任何变量，比如 `$i`；`<start>` 和` <end>` 必须是整数值。

```scss
@for $i from 1 to 10 {
　　.border-#{$i} {
　　　　border: #{$i}px solid blue;
　　}
}
```

### while循环

```scss
$i: 6;

@while $i > 0 {
　　.item-#{$i} { width: 2em * $i; }
　　$i: $i - 2;
}
```

## each命令，作用与for类似：

```scss
@each $member in a, b, c, d {
　　.#{$member} {
　　　　background-image: url("/image/#{$member}.jpg");
　　}
}
```

## 自定义函数

```scss
@function double($n) {
　　@return $n * 2;
}

#sidebar {
　　width: double(5px);
}
```

参考文章 [SASS用法指南 阮一峰](https://www.ruanyifeng.com/blog/2012/06/sass.html)