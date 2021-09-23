# Vue中封装axios的取消请求事情

## 前言

需要取消重复请求的场景：
- 比如输入框搜索需要取消上一次的重复请求
- tab切换频繁获取数据列表接口时，接口重复请求
- 就是用户频繁切换操作时，我们调用都是同一个接口的时候，就需求先取消上一次的接口请求，只请求用户最后一次操作的接口，不然相同的接口重复请求，接口是异步的，到时就容易拿到数据不是最后一次操作想要的数据了

## axios本身就封装了取消事件

[axios中文文档 取消事件](http://www.axios-js.com/zh-cn/docs/#%E5%8F%96%E6%B6%88)

### axios取消事件代码如下

- 方法一、可以使用 CancelToken.source 工厂方法创建 cancel token，像这样：

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
     // 处理错误
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// 取消请求（message 参数是可选的）
source.cancel('Operation canceled by the user.');
```

- 方法二、还可以通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel token：

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // executor 函数接收一个 cancel 函数作为参数
    cancel = c;
  })
});

// cancel the request
cancel();
```

#### 单独使用axios的时候，两个方法都可以，但是封装好axios方法在vue中全局调用时，方法一有个问题，axios的cancel方法会把即将要发出的请求取消掉，所以用第二个方法

## 完整axios封装代码如下：

```js
import axios from 'axios'
import UserModel from '../models/user'

// 接口前缀
const PREFIX = {
  mock: 'https://yapi.comliq.net/mock/31/', // yapi mock 地址
  development: 'http://xxx/', // qa环境
  production: 'http://xxx/', // 生产环境
}
const env = process.env.NODE_ENV
let interfacePrefix = PREFIX[env] || PREFIX.production // 接口前缀

/**
 * config 自定义配置项
 * @param withoutCheck 不使用默认的接口状态校验，直接返回 response
 * @param returnOrigin 是否返回整个 response 对象，为 false 只返回 response.data
 * @param mock 是否使用 mock 服务
 * @param timeout 接口请求超时时间，默认10秒
 * @param isCancelRequest 是否可以取消请求
 */
const configDefault = {
  returnOrigin: false,
  withoutCheck: false,
  mock: false,
  timeout: 10000
}

// 创建请求器
const service = axios.create(Object.assign({
  baseURL: '',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
}, configDefault))


// 添加请求拦截器
service.interceptors.request.use(
  request => {
    const reqData = request.data || request.params
    if (reqData && !request.canEmpty) { // 对请求参数进行处理，清除空参数
      request.data = deleteEmpty(reqData)
    }

    // 检测接口，根据环境自动切换前缀
    if (request.url.indexOf('http') === -1) {
      if (request.url[0] === '/') {
        request.url = request.url.substr(1)
      }
      request.url = `${env !== 'production' && request.mock ? PREFIX.mock : interfacePrefix}${request.url}`
    }

    // 若有做鉴权token，需要请求头自动加上token, 这个token自己封装获取的
    request.headers.accessToken = UserModel.getToken()

    return request
  },
  error => {
    return Promise.reject(error)
  },
)

// object对象存放每次new CancelToken生成的方法
let source = {}

// 每次请求前都会把path放在此数组中，响应成功后清除此请求path
let requestList = []

// 定义取消方法
function cancelRequest(path, allCancel) {
  // 请求列表里存在此path，即发起重复请求，把之前的请求取消掉
  if (path && requestList.includes(path) && typeof source[path] === 'function') {
    source[path]('终止请求')
  } else if (!path && allCancel) {
    // allCancel为true则请求列表里的请求全部取消
    requestList.forEach(el => {
      source[el]('批量终止请求')
    })
  }
}

// 添加响应拦截器
service.interceptors.response.use(
  res => {
    // 获取请求的api
    const path = JSON.stringify(res.config.url)
    // 请求完成后，将此请求从请求列表中移除
    requestList = requestList.filter(item => !path.includes(item))
    // HTTP 状态码 2xx 状态入口，data.code 为 200 表示数据正确，无任何错误
  },
  error => { // 非 2xx 状态入口
    return Promise.reject(error)
  },
)

// 这里只做post封装演示，大家可以自己封装其他请求方法
function requestFn(method, path, params = {}, options = {}) {
  // 取消上一次请求
  if (requestList.length) {
    cancelRequest(path)
  }
  // 设置isCancelRequest为ture, 请求前将path推入requestList
  if (options.isCancelRequest) {
    requestList.push(path)
  }

  if (method === 'post') {
    return service.post(path, params, {
      cancelToken: new axios.CancelToken(c => {
        source[path] = c
      }),
      ...options
    })
  }
}

export const api = {
  axios: service, // 原始 axios 对象

  // 重新封装 get 函数，统一使用方式
  get: (path, data, config) => service.get(path, { params: data, ...config }),
  delete: (path, data, config) => service.delete(path, { data, ...config }),

  post: (path, data, config) => requestFn('post', path, data, config),
  put: (path, data, config) => service.put(path, data, config),
}

export default api
```

参考文献：

[Vue中封装带有取消请求的axios](https://juejin.cn/post/6844904143149072398)