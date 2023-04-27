# JS 规范

### 分号

不使用分号

### 字符串

- 使用单引号
- 拼接用反单引号

```js
let str = '字符串'
let strJoin = `${str}拼接`
```

### 缩进: 两个空格

### 变量、常量

- 使用有意义的变量名，变量尽量不用缩写，增加可读性，命名遵循驼峰命名法
- 变量定义和命名 `let` 小驼峰命名，语义化

```js
let userName = '壁虎科技' // 公司名称
```

- 常量定义和命名 `const`，大写，下划线分隔，语义化，下横向分隔

```js
const ORDER_STATUS = 'create' // 订单状态
```

### 函数

- 函数与函数之间空一行，注释函数功能
- 函数名首字母不用大写，小驼峰命名

### 注释

- 每个变量和每个函数，均写注释
- `//` 前后加空格，组件库，常用类库，需要按 [jsDoc](https://jsdoc.app/) 格式注释
- 遇到数字与字符，前后添加空格

```js
let name = '壁虎科技' // 公司名称

/**
 * 格式化时间
 * @param {string|number|object} date 时间内容，可传入时间对象，或时间戳
 * @param {string} formatStr 格式模板
 * @returns {string} 处理后的字符串
*/
function formatTime(date, formatStr = 'YYYY-MM-DD') {
  let str = ''
  // ...
  return str
}
```

### 类

- 类名大写

### 使用兼容性好的新语法(ES6)与api(例如fetch，URL)

### console

- 开发环境，测试完成，不需要的打印，就去除或注释
- 生产环境，去除 `console` (webpack 统一配置)

### 空格

##### 以下几种情况不需要空格：

- 对象的属性名后
- 前缀一元运算符后
- 后缀一元运算符前
- 函数调用括号前
- 无论是函数声明还是函数表达式，'('前不要空格
- 数组的'['后和']'前
- 对象的'{'后和'}'前
- 运算符'('后和')'前

##### 以下几种情况需要空格：

- 二元运算符前后
- 三元运算符 `?:` 前后
- 代码块'{'前
- 下列关键字前：`else`, `while`, `catch`, `finally`
- 下列关键字后：`if`, `else`, `for`, `while`, `do`, `switch`, `case`, `try`, `catch`, `finally`, `with`, `return`, `typeof`
- 单行注释'//'后（若单行注释和代码同行，则'//'前也需要），多行注释'*'后
- 对象的属性值前
- `for` 循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格
- 无论是函数声明还是函数表达式，'{'前一定要有空格
- 函数的参数之间

```js
let a = {
  b: 1
}
++x
y++
z = x ? 1 : 2
let c = [1, 2]
let d = (1 + 2) * 3

let doSomething = function(a, b, c) {
  // do something
}

doSomething(item)

for (let i = 0; i < 6; i++) {
  x++
}
```

### 其他

- `if` 条件要加大括号
- 空对象用 `null` 返回，不使用 `{}`
- script 标签引入的文件一般不放在头部，放在 body 下面
