# Jest测试框架的使用

## 安装

```sh
npm install jest -D
```

## jest初始化配置

```sh
npx jest --init
```

之后会有一些选项，你根据自己的需要进行选择就可以了：

- Choose the test environment that will be used for testing ? 代码是运行在Node环境还是Web环境下？
- Do you want Jest to add coverage reports ? 是否生成测试覆盖率文件？
- Automatically clear mock calls and instrances between every test? 是否需要在测试之后清楚模拟调用的一些东西？

在这三个选项选择之后，你会发现你的工程根目录下多了一个`jest.config.js`的文件。打开文件你可以看到里边有很多Jest的配置项。

`jest.config.js`的文件中
```
coverageDirectory : "coverage"   //打开测试覆盖率选项
```

当这个选项被打开后，我们就可以使用下面的命令,jest就会自动给我们生成一个代码测试覆盖率的说明。

```sh
npx jest --coverage
```

## jest执行命令

在package.json文件的scripts设置

```sh
{
  "scripts": {
    "test": "jest --watchAll",
    "test:coverage": "jest --coverage"
  }
}
```

## 让Jest支持import和ES6语法

目前我们的Jest是不支持`import...from....`这种形式，如果使用就会报错，因为`Jest`默认支持的是`CommonJS规范`，也就是`Node.js`中的语法，他只支持`require`这种引用

1. Babel转换器的安装

```
npm install @babel/core @babel/preset-env -D
```

2. Babel的基本配置

我们在项目根目录下新建一个`.babelrc`的文件，作为一个前端，你对这个文件应该是非常熟悉的，babel的转换配置就写在这个文件里。

```js
{
    "presets":[
        [
                "@babel/preset-env",{
                "targets":{
                    "node":"current"
                }
            }
        ]
    ]
}
```

### jest.config.js 完整的配置

```js
const { defaults } = require('jest-config') // jest默认配置
// console.log('defaults', defaults)
// process.exit() // 退出node命令，控制台可以打印上面的log内容
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // 类似 webpack.entry 入口文件，这个文件可以放全局引入的文件配置
  setupFiles: ['<rootDir>/tests/unit/setup.js'],
  // 类似 webpack.resolve.alias 别名
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/examples/$1',
    '^@packages(.*)$': '<rootDir>/packages/$1'
  },
  // 支持文件的后缀
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions, // [ 'js', 'json', 'jsx', 'ts', 'tsx', 'node' ]
    'vue'
  ],
  // 查找下面规则路径的测试文件来执行
  testMatch: [
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec).js?(x)'
  ],
  transform: { // 类似 webpack.module.rules, 转换规则
    '^.+\\.jsx?$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  watchPathIgnorePatterns: ['node_modules'],
  // 模拟的浏览器的地址是什么
  testURL: 'http://localhost:8080/',
  // collectCoverage: true, // 打开收集覆盖率
  // 报告应从那些文件中收集
  // collectCoverageFrom: [
  //   '**/views/*.{js,jsx,vue}',
  //   '**/components/*.{js,jsx,vue}',
  //   '!**/node_modules/**'
  // ],
  // coverageThreshold: { // 我们还可以设置当测试覆盖率达到多少时，测试才通过
  //   global: {
  //     branches: 100, // 分支覆盖率（branch coverage）是否每个if代码块都执行了？
  //     functions: 100, // 函数覆盖率（function coverage）是否每个函数都调用了？
  //     lines: 100, // 行覆盖率（line coverage) 是否每一行都执行了？
  //     statements: 100 // 语句覆盖率（statement coverage）是否每个语句都执行了？
  //   }
  // }
}
```

## 相关文档
- [Vue Test Utils 官方文档](https://vue-test-utils.vuejs.org/zh/)
- [jest 官方文档](https://jestjs.io/zh-Hans/)
- [jest 预期匹配](https://jestjs.io/zh-Hans/docs/expect)
- [Jest 中文教程](https://www.w3cschool.cn/jest_cn/)

## jest使用教程

```js
describe('分组一', () => {
    test('测试1', () => {
        expect(1).toBe(1)
    })

    test('测试2', () => {
        function add(a, b){
            return a + b
        }
        expect(add(1, 2)).toBe(3)
    })
})

describe('分组二', () => {
    it('测试21', () => {
        expect(2).toBe(1)
    })

    it('测试22', () => {
        function add(a, b){
            return a + b
        }
        expect(add(1, 22)).toBe(3)
    })
})
```
分析： 

- `describe`函数是分组的意思， `test`函数是表示一条测试
- `test` 和 `it` 功能完全一样，使用哪个都行
- 每次要测试一个值时都会使用`expect`函数, `expect`的`参数`应该是`您的代码产生的值`
- `toBe`是匹配器函数, 表示`expect`的参数的值，要与`toBe`参数的值要相等，就匹配通过（通过测试），反之，就匹配不通过
- `toBe`只是一种匹配器，还有很多匹配器，更多请查看[jest 预期匹配](https://jestjs.io/zh-Hans/docs/expect)

思考： 为什么要这样子写呢，那这样我直接1 = 1不就好了，还要写 expect 和 toBe不就好了？

解答：因为你使用jest框架，你是不是想让他统计一些测试报告，你自己判断当然是可以，但是你不使用jest封装好的expect方法，那它怎么知道你通不通过，怎么拿到你想要测试的数据，怎么控制台打印数据，怎么生成报表， `expect(1).toBe(1)`， 这种写法，就是链式写法，背后做了很多处理，所以它才强大。


## 一些匹配器

```js
toBe()            严格相等 ===
toEqual()         值相等 ==
toBeNull()        只匹配null
not()             取反
toBeUndefined()   只匹配undefined
toBeDefined()     只要定义过了，都可以匹配成功
toBeTruthy()      判断真才通过
toBeFalsy()       判断假才通过
toBeGreaterThan() 这个是用来作数字比较的，大于什么数值，只要大于传入的数值，就可以通过测试
toBeLessThan()    小于
toBeGreaterThanOrEqual() 大于等于
toBeLessThanOrEqual()    小于等于
toBeCloseTo()     自动消除JavaScript浮点精度错误的匹配器
toMatch(x)         字符串是否有该x参数
toContain(x)       数组是否有该x参数
toThrow()          专门对异常进行处理的匹配器，可以检测一个方法会不会抛出异常
```

参考文章

[技术胖单元测试匹配器](https://jspang.com/detailed?id=65#toc225)

[jest官网匹配器](https://jestjs.io/zh-Hans/docs/expect)

## 钩子函数

```js
beforeAll(()=>{
    console.log('beforeAll()钩子函数的意思是在所有测试用例之前进行执行')
})

afterAll(()=>{
  console.log('afterAll()钩子函数是在完成所有测试用例之后才执行的函数')
})

beforeEach(()=>{
  console.log('beforeEach()钩子函数，是在每个测试用例前都会执行一次的钩子函数')
})

afterEach(()=>{
  console.log('afterEach()钩子函数，是在每次测试用例完成测试之后执行一次的钩子函数')
})
```

## describe分组例子写法

```js
// 引入需要测试的js函数
const appDir = process.cwd()
const date = require(`${appDir}/src/common/js/date`)

describe('测试一', () => {
  test('date.dealTime', () => {
    expect(date.dealTime('2020-01-01')).toBe(1577836800000)
  })
  test('demo2', () => {
    expect('2').toEqual(2)
  })
})
describe('测试二', () => {
  test('demo2', () => {
    expect('2').toEqual(2)
  })
})
```

## 测试api接口

```js
import axios from 'axios'
// axios设置基础域名
axios.defaults.baseURL = 'http://fapi-qa.piaodian.net/v1'
describe('models/api', () => {
  test('HomeApi', async() => {
    const homeApi = await import(`${appDir}/src/models/api/home.js`)
    const res = await homeApi.default.auth({
      mobile: '17898466684',
      password: 'bihukeji@2021',
    })
    expect(res.status).toBe(200)
  })
})
```

参考文章

[技术胖单元测试](https://jspang.com/detailed?id=65)

[jest官网](https://jestjs.io/zh-Hans/)
