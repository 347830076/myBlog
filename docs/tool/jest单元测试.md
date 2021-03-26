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


## 匹配器

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
