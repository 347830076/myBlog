---
sidebarDepth: 3
---
# Promise使用和实现方法

我们先来了解下官方Promise的使用方法
## promise的使用
## 实例方法

- <a href="#promise-prototype-then">then</a>
- <a href="#promise-prototype-then">catch</a>
- <a href="#promise-prototype-finally">finally</a>

### Promise.prototype.then()

```js
new Promise((resolve, reject) => {
    resolve()
})
.then((resolveValue) => {}, (rejectValue) => {})
.catch((err) => {})
.finally()
```

### Promise.prototype.catch()

catch其实是then(null, () => {})的缩写

```js
new Promise(resoleve, reject) => {
  reject()
}).then(null, (rejectValue) => {})

// 等价于
new Promise(resoleve, reject) => {
  reject()
}).catch((err) => {})
```
### Promise.prototype.finally()

finally() 方法返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。这为在Promise是否成功完成后都需要执行的代码提供了一种方式。

这避免了同样的语句需要在then()和catch()中各写一次的情况。

```js
new Promise((resolve, reject) => {
    resolve()
    // reject()
})
.then((resolveValue) => {}, (rejectValue) => {})
.catch((err) => {})
.finally((result) => {
  console.log('我都会执行')
})
```

## 静态方法
- <a href="#promise-resolve">Promise.resolve()</a>
- <a href="#promise-reject">Promise.reject()</a>
- <a href="#promise-all">Promise.all()</a>
- <a href="#promise-race">Promise.race()</a>
- <a href="#promise-allSettled">Promise.allSettled()</a>
- <a href="#promise-any">Promise.any()</a>

### Promise.resolve()

```js
const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(value);
  // expected output: 123
});
```
### Promise.reject() 

```js
function resolved(result) {
  console.log('Resolved');
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error('fail')).then(resolved, rejected);
// expected output: Error: fail
```

### Promise.all()

语法：Promise.all(iterable)
- iterable  一个可迭代对象，如 Array，Map，Set

***等待所有都完成（或第一个失败）。***
- 等待所有的resolve
- 如果有一个reject,直接返回第一个reject错误

```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});
```

```js
const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}).catch(err => {
	console.log(err)
})
// expected output: 3
```

```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
[p1, p2, p3].reduce((p, f) => p.then(f), Promise.resolve())
.then(result3 => { /* use result3 */ });

```
### Promise.race()

Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
```

### Promise.allSettled(iterable)

等到所有promises都已敲定（settled）（每个promise都已兑现（fulfilled）或已拒绝（rejected））。返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。

当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个promise的结果时，通常使用它。

```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"
```
### Promise.any(iterable)

接收一个Promise对象的集合，当其中的一个 promise 成功，就返回那个成功的promise的值。

```js
const pErr = new Promise((resolve, reject) => {
  reject("总是失败");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "最终完成");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "很快完成");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
  // pFast fulfils first
})
// 期望输出: "很快完成"
```

参考文章 [MDN Web DOCS Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Promise实现方法

实现代码之前，我们先来了解下 **Promises/A+规范**

Promise/A+规范: [https://github.com/promises-aplus/promises-spec](https://github.com/promises-aplus/promises-spec)

Promise/A+测试工具: [https://github.com/promises-aplus/promises-tests](https://github.com/promises-aplus/promises-tests)

### 先定义下下面代码的术语

- `promise`：是一个拥有 then 方法的对象或函数，其行为符合本规范
- `thenable`：是一个定义了 then 方法的对象或函数。这个主要是用来兼容一些老的Promise实现，只要一个Promise实现是`thenable`，也就是拥有then方法的，就可以跟Promises/A+兼容。
- `value`：指reslove出来的值，可以是任何合法的JS值(包括 undefined , thenable 和 promise等)
- `exception`：异常，在Promise里面用throw抛出来的值
- `reason`：拒绝原因，是reject里面传的参数，表示reject的原因

### Promise总共有三个状态:

- `pending`: 一个promise在resolve或者reject前就处于这个状态。
- `fulfilled`: 一个promise被resolve后就处于fulfilled状态，这个状态不能再改变，而且必须拥有一个不可变的值(value)。
- `rejected`: 一个promise被reject后就处于rejected状态，这个状态也不能再改变，而且必须拥有一个不可变的拒绝原因(reason)。

注意这里的不可变指的是===，也就是说，如果value或者reason是对象，只要保证引用不变就行，规范没有强制要求里面的属性也不变。Promise状态其实很简单，画张图就是:

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/js/promise.png')" alt="promise">

### then方法

一个promise必须拥有一个then方法来访问他的值或者拒绝原因。then方法有两个参数：

```js
promise.then(onFulfilled, onRejected)
```
#### 参数可选

`onFulfilled` 和 `onRejected` 都是可选参数。

- 如果 `onFulfilled` 不是函数，其必须被忽略
- 如果 `onRejected` 不是函数，其必须被忽略

  **onFulfilled 的特性**
  - 如果 `onFulfilled` 是函数：
    - 当 promise 执行结束后其必须被调用，其第一个参数为 promise 的终值`value`
    - 在 promise 执行结束前其不可被调用
    - 其调用次数不可超过一次

  **onRejected 特性**
  - 如果 `onRejected` 是函数：
    - 当 promise 被拒绝执行后其必须被调用，其第一个参数为 promise 的值，拒绝原因`reason`
    - 在 promise 被拒绝执行前其不可被调用
    - 其调用次数不可超过一次

#### 多次调用

`then` 方法可以被同一个 `promise` 调用多次
- 当 promise 成功执行时，所有 onFulfilled 需按照其注册顺序依次回调
- 当 promise 被拒绝执行时，所有的 onRejected 需按照其注册顺序依次回调

#### 返回值

`then` 方法必须返回一个 `promise` 对象。

```js
promise2 = promise1.then(onFulfilled, onRejected); 
```
- 如果 `onFulfilled` 或者 `onRejected` 抛出一个异常 `e` ，则 `promise2` 必须拒绝执行，并返回拒因 `e`
- 如果 `onFulfilled` 不是函数且 `promise1` 成功执行， `promise2` 必须成功执行并返回相同的值
- 如果 `onRejected` 不是函数且 `promise1` 拒绝执行， `promise2` 必须拒绝执行并返回相同的据因

### 开始手写Promise

有了上面的一些规范，我们再来看下promise的实现前的分析

1. 新建`Promise`需要使用`new`关键字，那他肯定是作为面向对象的方式调用的，`Promise是一个类`
2. 我们`new Promise(fn)`的时候需要传一个函数进去，说明`Promise的参数是一个函数`
3. 构造函数传进去的`fn`会收到`resolve`和`reject`两个函数，用来表示Promise成功和失败，说明构造函数里面还需要`resolve`和`reject`这两个函数，这两个函数的作用是改变`Promise的状态`。
4. 根据规范，promise有`pending`，`fulfilled`，`rejected`三个状态，初始状态为`pending`，调用`resolve`会将其改为`fulfilled`，调用`reject`会改为`rejected`。
5. promise实例对象建好后可以调用`then`方法，而且是可以链式调用`then`方法，说明`then`是一个实例方法。简单的说就是`then`方法也必须返回一个带`then`方法的对象，可以是`this`或者`新的promise实例`。

### 先写个构造函数

```js
// 先定义三个常量表示状态
var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

function MyPromise(fn) {
  this.status = PENDING;    // 初始状态为pending （等待）
  this.value = null;        // 初始化value （resolve的值）
  this.reason = null;       // 初始化reason（reject的拒绝原因）
}
```

### 写resolve和reject方法

```js
// 先定义三个常量表示状态
var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

// 这两个方法直接写在构造函数里面
function MyPromise(fn) {
  this.status = PENDING;    // 初始状态为pending （等待）
  this.value = null;        // 初始化value （resolve的值）
  this.reason = null;       // 初始化reason（reject的拒绝原因）
  
  // 存一下this,以便resolve和reject里面访问
  var that = this;
  // resolve方法参数是value
  function resolve(value) {
    // 判断状态是处于pending才更改状态，并设置
    if(that.status === PENDING) {
      that.status = FULFILLED;
      that.value = value;
    }
  }
  
  // reject方法参数是reason
  function reject(reason) {
    // 判断状态是处于pending才更改状态
    if(that.status === PENDING) {
      that.status = REJECTED;
      that.reason = reason;
    }
  }
}
```

### 调用构造函数参数

将`resolve`和`reject`作为参数调用传进来的参数，记得加上`try`，如果捕获到错误就`reject`。

```js
function MyPromise(fn) {
  // ...省略前面代码...
  
  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }
}
```

### 来写then方法

根据我们前面的分析，`then`方法可以链式调用，所以他是实例方法，而且规范中的API是`promise.then(onFulfilled, onRejected)`，我们先把架子搭出来：

```js
MyPromise.prototype.then = function(onFulfilled, onRejected) {}
```

- 那`then`方法里面应该干什么呢
- 先检查`onFulfilled`和`onRejected`是不是函数，如果不是函数就忽略他们，所谓“忽略”并不是什么都不干，对于`onFulfilled`来说“忽略”就是将value原封不动的返回
- 对于`onRejected`来说就是返回reason，`onRejected`因为是错误分支，我们返回reason应该throw一个Error:

```js
MyPromise.prototype.then = function(onFulfilled, onRejected) {
  // 如果onFulfilled不是函数，给一个默认函数，返回value
  var realOnFulfilled = onFulfilled;
  if(typeof realOnFulfilled !== 'function') {
    realOnFulfilled = function (value) {
      return value;
    }
  }

  // 如果onRejected不是函数，给一个默认函数，返回reason的Error
  var realOnRejected = onRejected;
  if(typeof realOnRejected !== 'function') {
    realOnRejected = function (reason) {
      throw reason;
    }
  }
}
```

- 参数检查完后就该干点真正的事情了，想想我们使用`Promise`的时候
- 如果`promise`操作成功了就会调用`then`里面的`onFulfilled`
- 如果他失败了，就会调用`onRejected`。
- 对应我们的代码就应该检查下`promis`e的`status`，如果是`FULFILLED`，就调用`onFulfilled`，如果是`REJECTED`，就调用`onRejected`

```js
MyPromise.prototype.then = function(onFulfilled, onRejected) {
  // ...省略前面代码...

  if(this.status === FULFILLED) {
    onFulfilled(this.value)
  }

  if(this.status === REJECTED) {
    onRejected(this.reason);
  }
}
```

写完上面代码了，我们再想一下，新建一个promise的时候可能是直接这样用的:

```js
new Promise(fn).then(onFulfilled, onRejected)
```

- 上面代码`then`是在实例对象一创建好就调用了，这时候fn里面的异步操作可能还没结束呢，也就是说他的`status`还是`PENDING`，这怎么办呢，
- 这时候我们肯定不能立即调`onFulfilled`或者`onRejected`的，因为`fn`到底成功还是失败还不知道呢。那什么时候知道fn成功还是失败呢？
- 答案是fn里面主动调`resolve`或者`reject`的时候。
- 所以如果这时候`status`状态还是`PENDING`，我们应该将`onFulfilled`和`onRejected`两个回调存起来，
- 等到`fn`有了结论，是`resolve`或者`reject`的时候再来调用对应的代码。
- 因为后面`then`还有链式调用，会有多个`onFulfilled`和`onRejected`，我这里用`两个数组`将他们存起来，等`resolve`或者`reject`的时候将数组里面的全部方法拿出来执行一遍

```js
// 构造函数
function MyPromise(fn) {
  // ...省略其他代码...
  
  // 构造函数里面添加两个数组存储成功和失败的回调
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];
  
  function resolve(value) {
    if(that.status === PENDING) {
      // ...省略其他代码...
      // resolve里面将所有成功的回调拿出来执行
      that.onFulfilledCallbacks.forEach(callback => {
        callback(that.value);
      });
    }
  }
  
  function reject(reason) {
    if(that.status === PENDING) {
      // ...省略其他代码...
      // resolve里面将所有失败的回调拿出来执行
      that.onRejectedCallbacks.forEach(callback => {
        callback(that.reason);
      });
    }
  }
}

// then方法
MyPromise.prototype.then = function(onFulfilled, onRejected) {
  // ...省略其他代码...

  // 如果还是PENDING状态，将回调保存下来
  if(this.status === PENDING) {
    this.onFulfilledCallbacks.push(realOnFulfilled);
    this.onRejectedCallbacks.push(realOnRejected);
  }
}
```

- 上面这种暂时将回调保存下来，等条件满足的时候再拿出来运行让我想起了一种模式：
- 订阅发布模式。我们往回调数组里面push回调函数，其实就相当于往事件中心注册事件了，
- resolve就相当于发布了一个成功事件，即从onFulfilledCallbacks里面的所有方法都会拿出来执行，
- 同理reject就相当于发布了一个失败事件

### 已经完成了一部分

到这里为止，其实我们已经可以实现异步调用了，只是then的返回值还没实现，还不能实现链式调用，我们先来玩一下：

整理上面的完整代码

```js
// 先定义三个常量表示状态
var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

function MyPromise(fn) {
  this.status = PENDING;    // 初始状态为pending
  this.value = null;        // 初始化value
  this.reason = null;       // 初始化reason

  // 构造函数里面添加两个数组存储成功和失败的回调
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  // 存一下this,以便resolve和reject里面访问
  var that = this;
  // resolve方法参数是value
  function resolve(value) {
    if (that.status === PENDING) {
      that.status = FULFILLED;
      that.value = value;

      // resolve里面将所有成功的回调拿出来执行
      that.onFulfilledCallbacks.forEach(callback => {
        callback(that.value);
      });
    }
  }

  // reject方法参数是reason
  function reject(reason) {
    if (that.status === PENDING) {
      that.status = REJECTED;
      that.reason = reason;

      // resolve里面将所有失败的回调拿出来执行
      that.onRejectedCallbacks.forEach(callback => {
        callback(that.reason);
      });
    }
  }

  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  // 如果onFulfilled不是函数，给一个默认函数，返回value
  var realOnFulfilled = onFulfilled;
  if(typeof realOnFulfilled !== 'function') {
    realOnFulfilled = function (value) {
      return value;
    }
  }

  // 如果onRejected不是函数，给一个默认函数，返回reason的Error
  var realOnRejected = onRejected;
  if(typeof realOnRejected !== 'function') {
    realOnRejected = function (reason) {
      throw reason;
    }
  }

  if(this.status === FULFILLED) {
    onFulfilled(this.value)
  }

  if(this.status === REJECTED) {
    onRejected(this.reason);
  }

  // 如果还是PENDING状态，将回调保存下来
  if(this.status === PENDING) {
    this.onFulfilledCallbacks.push(realOnFulfilled);
    this.onRejectedCallbacks.push(realOnRejected);
  }
}

```


### 完整代码

```js
// 先定义三个常量表示状态
var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

function MyPromise(fn) {
  this.status = PENDING;    // 初始状态为pending
  this.value = null;        // 初始化value
  this.reason = null;       // 初始化reason

  // 构造函数里面添加两个数组存储成功和失败的回调
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  // 存一下this,以便resolve和reject里面访问
  var that = this;
  // resolve方法参数是value
  function resolve(value) {
    if (that.status === PENDING) {
      that.status = FULFILLED;
      that.value = value;

      // resolve里面将所有成功的回调拿出来执行
      that.onFulfilledCallbacks.forEach(callback => {
        callback(that.value);
      });
    }
  }

  // reject方法参数是reason
  function reject(reason) {
    if (that.status === PENDING) {
      that.status = REJECTED;
      that.reason = reason;

      // resolve里面将所有失败的回调拿出来执行
      that.onRejectedCallbacks.forEach(callback => {
        callback(that.reason);
      });
    }
  }

  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

function resolvePromise(promise, x, resolve, reject) {
  // 如果 promise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 promise
  // 这是为了防止死循环
  if (promise === x) {
    return reject(new TypeError('The promise and the return value are the same'));
  }

  if (x instanceof MyPromise) {
    // 如果 x 为 Promise ，则使 promise 接受 x 的状态
    // 也就是继续执行x，如果执行的时候拿到一个y，还要继续解析y
    // 这个if跟下面判断then然后拿到执行其实重复了，可有可无
    x.then(function (y) {
      resolvePromise(promise, y, resolve, reject);
    }, reject);
  }
  // 如果 x 为对象或者函数
  else if (typeof x === 'object' || typeof x === 'function') {
    // 这个坑是跑测试的时候发现的，如果x是null，应该直接resolve
    if (x === null) {
      return resolve(x);
    }

    try {
      // 把 x.then 赋值给 then 
      var then = x.then;
    } catch (error) {
      // 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
      return reject(error);
    }

    // 如果 then 是函数
    if (typeof then === 'function') {
      var called = false;
      // 将 x 作为函数的作用域 this 调用之
      // 传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise
      // 名字重名了，我直接用匿名函数了
      try {
        then.call(
          x,
          // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
          function (y) {
            // 如果 resolvePromise 和 rejectPromise 均被调用，
            // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
            // 实现这条需要前面加一个变量called
            if (called) return;
            called = true;
            resolvePromise(promise, y, resolve, reject);
          },
          // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
          function (r) {
            if (called) return;
            called = true;
            reject(r);
          });
      } catch (error) {
        // 如果调用 then 方法抛出了异常 e：
        // 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
        if (called) return;

        // 否则以 e 为据因拒绝 promise
        reject(error);
      }
    } else {
      // 如果 then 不是函数，以 x 为参数执行 promise
      resolve(x);
    }
  } else {
    // 如果 x 不为对象或者函数，以 x 为参数执行 promise
    resolve(x);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  // 如果onFulfilled不是函数，给一个默认函数，返回value
  // 后面返回新promise的时候也做了onFulfilled的参数检查，这里可以删除，暂时保留是为了跟规范一一对应，看得更直观
  var realOnFulfilled = onFulfilled;
  if (typeof realOnFulfilled !== 'function') {
    realOnFulfilled = function (value) {
      return value;
    }
  }

  // 如果onRejected不是函数，给一个默认函数，返回reason的Error
  // 后面返回新promise的时候也做了onRejected的参数检查，这里可以删除，暂时保留是为了跟规范一一对应，看得更直观
  var realOnRejected = onRejected;
  if (typeof realOnRejected !== 'function') {
    realOnRejected = function (reason) {
      throw reason;
    }
  }

  var that = this;   // 保存一下this

  if (this.status === FULFILLED) {
    var promise2 = new MyPromise(function (resolve, reject) {
      setTimeout(function () {
        try {
          if (typeof onFulfilled !== 'function') {
            resolve(that.value);
          } else {
            var x = realOnFulfilled(that.value);
            resolvePromise(promise2, x, resolve, reject);
          }
        } catch (error) {
          reject(error);
        }
      }, 0);
    });

    return promise2;
  }

  if (this.status === REJECTED) {
    var promise2 = new MyPromise(function (resolve, reject) {
      setTimeout(function () {
        try {
          if (typeof onRejected !== 'function') {
            reject(that.reason);
          } else {
            var x = realOnRejected(that.reason);
            resolvePromise(promise2, x, resolve, reject);
          }
        } catch (error) {
          reject(error);
        }
      }, 0);
    });

    return promise2;
  }

  // 如果还是PENDING状态，将回调保存下来
  if (this.status === PENDING) {
    var promise2 = new MyPromise(function (resolve, reject) {
      that.onFulfilledCallbacks.push(function () {
        setTimeout(function () {
          try {
            if (typeof onFulfilled !== 'function') {
              resolve(that.value);
            } else {
              var x = realOnFulfilled(that.value);
              resolvePromise(promise2, x, resolve, reject);
            }
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
      that.onRejectedCallbacks.push(function () {
        setTimeout(function () {
          try {
            if (typeof onRejected !== 'function') {
              reject(that.reason);
            } else {
              var x = realOnRejected(that.reason);
              resolvePromise(promise2, x, resolve, reject);
            }
          } catch (error) {
            reject(error);
          }
        }, 0)
      });
    });

    return promise2;
  }
}

MyPromise.deferred = function () {
  var result = {};
  result.promise = new MyPromise(function (resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
}

MyPromise.resolve = function (parameter) {
  if (parameter instanceof MyPromise) {
    return parameter;
  }

  return new MyPromise(function (resolve) {
    resolve(parameter);
  });
}

MyPromise.reject = function (reason) {
  return new MyPromise(function (resolve, reject) {
    reject(reason);
  });
}

MyPromise.all = function (promiseList) {
  var resPromise = new MyPromise(function (resolve, reject) {
    var count = 0;
    var result = [];
    var length = promiseList.length;

    if (length === 0) {
      return resolve(result);
    }

    promiseList.forEach(function (promise, index) {
      MyPromise.resolve(promise).then(function (value) {
        count++;
        result[index] = value;
        if (count === length) {
          resolve(result);
        }
      }, function (reason) {
        reject(reason);
      });
    });
  });

  return resPromise;
}

MyPromise.race = function (promiseList) {
  var resPromise = new MyPromise(function (resolve, reject) {
    var length = promiseList.length;

    if (length === 0) {
      return resolve();
    } else {
      for (var i = 0; i < length; i++) {
        MyPromise.resolve(promiseList[i]).then(function (value) {
          return resolve(value);
        }, function (reason) {
          return reject(reason);
        });
      }
    }
  });

  return resPromise;
}

MyPromise.prototype.catch = function (onRejected) {
  this.then(null, onRejected);
}

MyPromise.prototype.finally = function (fn) {
  return this.then(function (value) {
    return MyPromise.resolve(fn()).then(function () {
      return value;
    });
  }, function (error) {
    return MyPromise.resolve(fn()).then(function () {
      throw error
    });
  });
}

MyPromise.allSettled = function (promiseList) {
  return new MyPromise(function (resolve) {
    var length = promiseList.length;
    var result = [];
    var count = 0;

    if (length === 0) {
      return resolve(result);
    } else {
      for (var i = 0; i < length; i++) {

        (function (i) {
          var currentPromise = MyPromise.resolve(promiseList[i]);

          currentPromise.then(function (value) {
            count++;
            result[i] = {
              status: 'fulfilled',
              value: value
            }
            if (count === length) {
              return resolve(result);
            }
          }, function (reason) {
            count++;
            result[i] = {
              status: 'rejected',
              reason: reason
            }
            if (count === length) {
              return resolve(result);
            }
          });
        })(i)
      }
    }
  });
}

module.exports = MyPromise;
```

参考文章： 

[手写一个Promise/A+,完美通过官方872个测试用例](https://segmentfault.com/a/1190000023157856)

[Promise 实现原理](https://segmentfault.com/a/1190000022614627#)