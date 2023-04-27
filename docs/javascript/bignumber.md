---
sidebarDepth: 4
---

# bignumberjs

一个用于任意精度算术的JavaScript库。

可以在[官网](https://mikemcl.github.io/bignumber.js/)的控制台console中测试它的API

## CONSTRUCTOR

```js
/*
* @params n {number|string|BigNumber}
* @params b 数字:整数，取值范围2 ~ 36。 (参见字母表来扩展这个范围 0123456789abcdefghijklmnopqrstuvwxyz).
* 返回值为n的BigNumber对象的新实例，其中n是指定基数的数值，如果base被省略或为null或未定义，则以10为基数。
*/
function BigNumber(n, b) {
    // ...
}
```

## 静态方法

### clone()

返回一个新的独立的BigNumber构造函数，其配置由object描述(参见config)，如果object为null或未定义则使用默认配置。

```js
const BN = BigNumber.clone()
BN(1).div(3).toNumber() // 0.3333333333333333
```

### config()

为这个特定的BigNumber构造函数配置设置。

主要包括以下几个参数：

1. DECIMAL_PLACES(默认值：20) 用于设置小数位数。在除法、开方、指数计算时会用到。

```js
const BN = BigNumber.clone()
BN.config({ DECIMAL_PLACES: 4 })
BN(1).div(3).toNumber() // 0.3333，注意跟上面计算结果的区别
```

2. ROUNDING_MODE(默认值4) 舍入模式

    取值范围：

    - BigNumber.ROUND_UP = 0;         //远离0方向舍入
    - BigNumber.ROUND_DOWN = 1;       //向0方向舍入
    - BigNumber.ROUND_CEIL = 2;       //向正无限大舍入
    - BigNumber.ROUND_FLOOR = 3;      //向负无限大舍入
    - BigNumber.ROUND_HALF_UP = 4;    //四舍五入：向最接近的数字方向舍入，如果与两个相邻数字的距离相等，则向上舍入。
    - BigNumber.ROUND_HALF_DOWN = 5;  //向最接近的数字方向舍入，如果与两个相邻数字的距离相等，则向下舍入。
    - BigNumber.ROUND_HALF_EVEN = 6;  //向最接近数字方向舍入，如果与两个相邻数字的距离相等，则向相邻的偶数舍入
    - BigNumber.ROUND_HALF_CEIL = 7;
    - BigNumber.ROUND_HALF_FLOOR = 8;

3. EXPONENTIAL_AT(默认值[-7,20]) 指数计数法
4. RANGE(默认值[-1e+9,1e+9])
5. CRYPTO(默认值 false) 用于设置BigNumber.random()的随机生成算法。如果无法设置为true，则使用Math.random()生成随机值。
6. MODULO_MODE(默认值：ROUND_DOWN) 取模运算的模式
7. POW_PRECISION(默认值：0) pow运算结果的精度
8. FORMATE(格式化对应的设置)

```js
BigNumber.config({
  FORMAT: {
    // string to prepend
    prefix: '',
    // decimal separator
    decimalSeparator: '.',
    // grouping separator of the integer part
    groupSeparator: ',',
    // primary grouping size of the integer part
    groupSize: 3,
    // secondary grouping size of the integer part
    secondaryGroupSize: 0,
    // grouping separator of the fraction part
    fractionGroupSeparator: ' ',
    // grouping size of the fraction part
    fractionGroupSize: 0,
    // string to append
    suffix: ''
  }
});
```

### isBigNumber

如果value是一个BigNumber实例则返回true，否则返回false。

```js
x = 42
y = new BigNumber(x)

BigNumber.isBigNumber(x)             // false
y instanceof BigNumber               // true
BigNumber.isBigNumber(y)             // true

BN = BigNumber.clone();
z = new BN(x)
z instanceof BigNumber               // false
BigNumber.isBigNumber(z)             // true
```

### maximum(n...) ,minimum(n...)

获取数组中的最大值/最小值

```js
x = new BigNumber('3257869345.0378653')
BigNumber.maximum(4e9, x, '123456789.9')      // '4000000000'

arr = [12, '13', new BigNumber(14)]
BigNumber.max.apply(null, arr)                // '14'
```

```js
x = new BigNumber('3257869345.0378653')
BigNumber.minimum(4e9, x, '123456789.9')      // '123456789.9'

arr = [2, new BigNumber(-14), '-15.9999', -12]
BigNumber.min.apply(null, arr)                // '-15.9999'
```

### random([dp])

返回一个伪随机值，参数可以指定小数点位数

```js
BigNumber.config({ DECIMAL_PLACES: 10 })
BigNumber.random()              // '0.4117936847'
BigNumber.random(20)            // '0.78193327636914089009'
```

### sum

返回一个BigNumber，其值为参数的和。

返回值总是精确且不四舍五入的。

```js
x = new BigNumber('3257869345.0378653')
BigNumber.sum(4e9, x, '123456789.9')      // '7381326134.9378653'

arr = [2, new BigNumber(14), '15.9999', 12]
BigNumber.sum.apply(null, arr)            // '43.9999'
```

## 实例方法

### 加法：.plus(n [, base]) ⇒ BigNumber

```js
0.1 + 0.2                       // 0.30000000000000004
x = new BigNumber(0.1)
y = x.plus(0.2)                 // '0.3'
BigNumber(0.7).plus(x).plus(y)  // '1.1'
x.plus('0.1', 8)                // '0.225',  先把0.1转成八进制等于0.125 再加上0.1 就是 0.225了
```

### 减法：.minus(n [, base]) ⇒ BigNumber

```js
0.3 - 0.1                       // 0.19999999999999998
x = new BigNumber(0.3)
x.minus(0.1)                    // '0.2'
x.minus(0.6, 20)                // '0'
```

### 乘法：.times(n [, base]) ⇒ BigNumber; m.ultipliedBy(n [, base]) ⇒ BigNumber;

```js
0.6 * 3                         // 1.7999999999999998
x = new BigNumber(0.6)
y = x.multipliedBy(3)           // '1.8'
BigNumber('7e+500').times(y)    // '1.26e+501'
x.multipliedBy('-a', 16)        // '-6
```

### 除法

#### 普通除法运算： .div(n [, base]) ⇒ BigNumber； .dividedBy(n [, base]) ⇒ BigNumber

```js
x = new BigNumber(355)
y = new BigNumber(113)
x.dividedBy(y)                  // '3.14159292035398230088'
x.div(5)                        // '71'
x.div(47, 16)                   // '5'
```

> 注意： 除法计算结果会根据`DECIMAL_PLACES`和`ROUNDING_MODE`两个属性设置进行舍入。

#### 除法，返回整数： .idiv(n [, base]) ⇒ BigNumber；.dividedToIntegerByv(n [, base]) ⇒ BigNumber

```js
x = new BigNumber(355)
y = new BigNumber(113)
x.dividedBy(y)                  // '3.14159292035398230088'
x.div(5)                        // '71'
x.div(47, 16)                   // '5'
```

### 取模/取余： .mod(n [, base]) ⇒ BigNumber；modulo.(n [, base]) ⇒ BigNumber

```js
1 % 0.9                         // 0.09999999999999998
x = new BigNumber(1)
x.modulo(0.9)                   // '0.1'
y = new BigNumber(33)
y.mod('a', 33)                  // '3'
```

>注意： 取模/取余运算受`MODULO_MODE`设置影响

### 指数运算： .pow(n [, m]) ⇒ BigNumber;.exponentiatedBy(n [, m]) ⇒ BigNumber

```js
Math.pow(0.7, 2)                // 0.48999999999999994
x = new BigNumber(0.7)
x.exponentiatedBy(2)            // '0.49'
BigNumber(3).pow(-2)            // '0.11111111111111111111'
```

> 注意： n代表的是指数。如果n<0,计算结果肯定是小数，所以计算结果会受 DECIMAL_PLACES 和 ROUNDING_MODE影响。

### 开平方：.sqrt() ⇒ BigNumber；.squareRoot.() ⇒ BigNumber

```js
x = new BigNumber(16)
x.squareRoot()                  // '4'
y = new BigNumber(3)
y.sqrt()                        // '1.73205080756887729353'
```

### 比较大小： .comparedTo(n [, base]) ⇒ number

比较结果，参考如下表：

- 1	操作数>n
- -1	操作数<n
- 0	操作数==n
- null	操作数或者n不是数字

```js
x = new BigNumber(Infinity)
y = new BigNumber(5)
x.comparedTo(y)                 // 1
x.comparedTo(x.minus(1))        // 0
y.comparedTo(NaN)               // null
y.comparedTo('110', 2)          // -1
```

### 精度调整

#### .dp([dp [, rm]]) ⇒ BigNumber|number；decimalPlaces.[dp [, rm]]) ⇒ BigNumber|number 根据dp(decimals places)和rm(round mode)对操作数进行舍入

```js
x = new BigNumber(1234.56)
x.decimalPlaces(1)                     // '1234.6'
x.dp()                                 // 2  如果不传dp，则函数返回的是操作数的小数点的位数
x.decimalPlaces(2)                     // '1234.56'
x.dp(10)                               // '1234.56'
x.decimalPlaces(0, 1)                  // '1234'
x.dp(0, 6)                             // '1235'
x.decimalPlaces(1, 1)                  // '1234.5'
x.dp(1, BigNumber.ROUND_HALF_EVEN)     // '1234.6'
x                                      // '1234.56'
```

#### 取整：.integerValue([rm]) ⇒ BigNumber

根据rm(round mode)返回操作数的整数部分

```js
x = new BigNumber(123.456)
x.integerValue()                        // '123'
x.integerValue(BigNumber.ROUND_CEIL)    // '124'
y = new BigNumber(-12.7)
y.integerValue()                        // '-13'
y.integerValue(BigNumber.ROUND_DOWN)    // '-12',向0舍入
```

#### 有效数字 .sd([d [, rm]]) ⇒ BigNumber|number；precision.([d [, rm]]) ⇒ BigNumber|number

什么是有效数字？--->从该数的第一个非零数字起，直到末尾数字止的数字称为有效数字，如0.618的有效数字有三个，分别是6,1,8。

```js
x = new BigNumber(9876.54321)
x.precision(6)                         // '9876.54'
x.sd()                                 // 9 如果省略参数d，则返回有效数字个数
x.precision(6, BigNumber.ROUND_UP)     // '9876.55'
x.sd(2)                                // '9900' //todo
x.precision(2, 1)                      // '9800'    //todo
y = new BigNumber(987000)
y.precision()                          // 3
y.sd(true)                             // 6,如多参数sd为true，则整数部分后边的0也会被认为是有效数字
```

#### .toFixed([dp [, rm]]) ⇒ string

返回一个字符串，小数位根据dp截取或者填充。

```js
x = 3.456
y = new BigNumber(x)
x.toFixed()                     // '3'
y.toFixed()                     // '3.456'
y.toFixed(0)                    // '3'
x.toFixed(2)                    // '3.46'
y.toFixed(2)                    // '3.46'
y.toFixed(2, 1)                 // '3.45'  (ROUND_DOWN)
x.toFixed(5)                    // '3.45600'
y.toFixed(5)                    // '3.45600'
```

跟Number.prototype.toFixed(dp)的异同

如果省略参数dp，BigNumber(1.123).toFixed() 原样返回'1.123';而1.123.toFixed()会去掉所有小数位，只返回整数位'1'

如果操作数大于10^21，BigNumber(10^21).toFixed()会跟普通数字一样返回；10^21.toFixed() 会通过指数形式返回

```js
Math.pow(10,20).toFixed()   //"100000000000000000000"
Math.pow(10,21).toFixed()   //"1e+21"

BigNumber(10).pow(20).toFixed() //"100000000000000000000"
BigNumber(10).pow(21).toFixed() //"1000000000000000000000"
```

注意： toFixed()方法与dp()方法的主要区别是，toFixed返回的是字符串，如果小数位不够的话会用0补齐；dp()方法返回的是BigNumber|number，小数位不够的话会忽略

#### 数字格式化 .toFormat([dp [, rm]]) ⇒ string

返回字符串，会根据dp和rm进行舍入,并根据FORMAT属性进行格式化。

```js
fmt = {
  prefix: '',
  decimalSeparator: '.',
  groupSeparator: ',',
  groupSize: 3,
  secondaryGroupSize: 0,
  fractionGroupSeparator: ' ',
  fractionGroupSize: 0,
  suffix: ''
}

x = new BigNumber('123456789.123456789')

// Set the global formatting options
BigNumber.config({ FORMAT: fmt })

x.toFormat()                              // '123,456,789.123456789'
x.toFormat(3)                             // '123,456,789.123'

// If a reference to the object assigned to FORMAT has been retained,
// the format properties can be changed directly
fmt.groupSeparator = ' '
fmt.fractionGroupSize = 5
x.toFormat()                              // '123 456 789.12345 6789'

// Alternatively, pass the formatting options as an argument
fmt = {
  prefix: '=> ',
  decimalSeparator: ',',
  groupSeparator: '.',
  groupSize: 3,
  secondaryGroupSize: 2
}

x.toFormat()                              // '123 456 789.12345 6789'
x.toFormat(fmt)                           // '=> 12.34.56.789,123456789'
x.toFormat(2, fmt)                        // '=> 12.34.56.789,12'
x.toFormat(3, BigNumber.ROUND_UP, fmt)    // '=> 12.34.56.789,124'
```

#### 转换为js 基础数值类型 .toNumber() ⇒ number

效果与使用+运算符一致

```js
x = new BigNumber(456.789)
x.toNumber()                    // 456.789
+x                              // 456.789
```

参考文章：

[bignumber.js使用记录](https://juejin.cn/post/6844903704714280968)