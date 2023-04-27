# Web Worker 的使用

`JavaScript 语言采用的是单线程模型`，也就是说，所有任务只能在一个线程上完成，一次只能做一件事。前面的任务没做完，后面的任务只能等着。随着电脑计算能力的增强，尤其是多核 CPU 的出现，单线程带来很大的不便，无法充分发挥计算机的计算能力。

在HTML5的新规范中，实现了 Web Worker 来引入 js 的 “多线程” 技术, 可以让我们可以在页面主运行的 js 线程中加载运行另外单独的一个或者多个 js 线程。

`Web Worker` 为 Web 内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。

使用web worker就可以实现js的多线程，而且不阻塞js主线程

## Web Worker优点

Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程（通常负责 UI 交互）就会很流畅，不会被阻塞或拖慢。

Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。

- 可以开启多线程充分利用电脑性能进行大量的计算，而不阻塞js主线程
- 还可以结合离屏canvas进行绘图，提升绘图的渲染性能和使用体验

## Web Worker的限制

### 同源限制
分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

### DOM 限制
在 Worker 线程的运行环境中没有 `window` 全局对象，Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象。

Worker中只能获取到部分浏览器提供的 API，如`定时器`、`navigator`、`location`、`XMLHttpRequest`等

由于可以获取XMLHttpRequest 对象，可以在 Worker 线程中执行ajax请求

### 通信联系

Worker 线程和主线程不在同一个上下文环境，它们不能直接通信

每个线程运行在完全独立的环境中，需要通过`postMessage`、 `message`事件机制来实现的线程之间的通信

### 脚本限制

Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。

### 文件限制

Worker 线程`无法读取本地文件`，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。

## worker 特性检测

为了更好的错误处理控制以及向下兼容，将你的 worker 运行代码包裹在以下代码中是一个很好的想法 (main.js)：

```
if (window.Worker) {

  ...

}

```

## 基本使用

### 生成一个worker

创建一个新的 worker 很简单。采用`new`命令，调用`Worker()`构造函数，新建一个 Worker 线程。

Worker()构造函数的参数是一个脚本文件，该文件就是 Worker 线程所要执行的任务。由于 Worker 不能读取本地文件，所以这个脚本必须来自网络。如果下载没有成功（比如404错误），Worker 就会默默地失败。

我们也可以使用 [worker-loader](https://www.npmjs.com/package/worker-loader) 的npm包，结合我们vue或react框架来进行本地写worker.js开发

```js
const myWorker = new Worker('worker.js');
```

### worker 中消息的接收和发送
主线程调用worker.postMessage()方法，向 Worker 发消息

```js
input.onchange = function() {
  myWorker.postMessage('hello worker');
  console.log('Message posted to worker');
}
```
这段代码中变量 input 代表 `<input>元素`；当它的值发生改变时，`myWorker.postMessage('hello worker');` 会将这个值组成数组发送给 worker。你可以在消息中发送许多你想发送的东西。

在 worker 中接收到消息后，我们可以写这样一个事件处理函数代码作为响应（worker.js）：

```js
// worker.js
onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data);
  console.log('Posting message back to main script');
  postMessage('我接收到了');
}
```

### 终止 worker

如果你需要从主线程中立刻终止一个运行中的 `worker`，可以调用 `worker` 的`terminate` 方法：

```js
myWorker.terminate();
```

worker 线程会被立即杀死，不会有任何机会让它完成自己的操作或清理工作。

### 关闭 worker
在 worker 线程中，使用完毕，为了节省系统资源，必须关闭 Worker。

```js
myWorker.close();
```

### Worker 加载脚本

Worker 内部如果要加载其他脚本，有一个专门的方法importScripts()。

```js
importScripts('script1.js');
```

该方法可以同时加载多个脚本。

```js
importScripts('script1.js', 'script2.js');
```

### 错误处理

主线程可以监听 Worker 是否发生错误。如果发生错误，Worker 会触发主线程的error事件。

```js
worker.onerror(function (event) {
  console.log([
    'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
  ].join(''));
});

// 或者
worker.addEventListener('error', function (event) {
  // ...
});
```
Worker 内部也可以监听error事件。


## 数据通信

主线程与 Worker 之间的通信内容，可以是`文本(字符串)`，也可以是`对象`。需要注意的是，这种通信是`拷贝关系`，即是`传值`而`不是传址`，Worker 对通信内容的修改，不会影响到主线程。事实上，浏览器内部的运行机制是，先将通信内容串行化，然后把串行化后的字符串发给 Worker，后者再将它还原。

主线程与 Worker 之间也可以交换二进制数据，比如 File、Blob、ArrayBuffer 等类型，也可以在线程之间发送。下面是一个例子。

```js
// 主线程
var uInt8Array = new Uint8Array(new ArrayBuffer(10));
for (var i = 0; i < uInt8Array.length; ++i) {
  uInt8Array[i] = i * 2; // [0, 2, 4, 6, 8,...]
}
worker.postMessage(uInt8Array);

// Worker 线程
onmessage = function (e) {
  var uInt8Array = e.data;
  postMessage('Inside worker.js: uInt8Array.toString() = ' + uInt8Array.toString());
  postMessage('Inside worker.js: uInt8Array.byteLength = ' + uInt8Array.byteLength);
};
```

但是，拷贝方式发送二进制数据，会`造成性能问题`。比如，主线程向 Worker 发送一个 `500MB` 文件，默认情况下浏览器会生成一个原文件的拷贝。为了解决这个问题，JavaScript 允许主线程把二进制数据直接转移给子线程，但是一旦转移，主线程就无法再使用这些二进制数据了，这是为了防止出现多个线程同时修改数据的麻烦局面。这种转移数据的方法，叫做[Transferable Objects](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects)。这使得主线程可以快速把数据交给 Worker，对于影像处理、声音处理、3D 运算等就非常方便了，不会产生性能负担。

如果要直接转移数据的控制权，就要使用下面的写法。

```js
// Transferable Objects 格式
worker.postMessage(arrayBuffer, [arrayBuffer]);

// 例子
var ab = new ArrayBuffer(1);
worker.postMessage(ab, [ab]);
```

## 同页面的 Web Worker

通常情况下，Worker 载入的是一个单独的 JavaScript 脚本文件，但是也可以载入与主线程在同一个网页的代码。

```html
<!DOCTYPE html>
  <body>
    <script id="worker" type="app/worker">
      addEventListener('message', function () {
        postMessage('some message');
      }, false);
    </script>
  </body>
</html>
```

上面是一段嵌入网页的脚本，注意必须指定`<script>`标签的type属性是一个浏览器不认识的值，上例是`app/worker`。

然后，读取这一段嵌入页面的脚本，用 Worker 来处理。

```js
var blob = new Blob([document.querySelector('#worker').textContent]);
var url = window.URL.createObjectURL(blob);
var worker = new Worker(url);

worker.onmessage = function (e) {
  // e.data === 'some message'
};
```

上面代码中，先将嵌入网页的脚本代码，转成一个二进制对象，然后为这个二进制对象生成 URL，再让 Worker 加载这个 URL。这样就做到了，主线程和 Worker 的代码都在同一个网页上面。

## 实例：Worker 线程完成轮询

有时，浏览器需要轮询服务器状态，以便第一时间得知状态改变。这个工作可以放在 Worker 里面。

```js

function createWorker(f) {
  var blob = new Blob(['(' + f.toString() +')()']);
  var url = window.URL.createObjectURL(blob);
  var worker = new Worker(url);
  return worker;
}

var pollingWorker = createWorker(function (e) {
  var cache;

  function compare(new, old) { ... };

  setInterval(function () {
    fetch('/my-api-endpoint').then(function (res) {
      var data = res.json();

      if (!compare(data, cache)) {
        cache = data;
        self.postMessage(data);
      }
    })
  }, 1000)
});

pollingWorker.onmessage = function () {
  // render data
}

pollingWorker.postMessage('init');
```

上面代码中，Worker 每秒钟轮询一次数据，然后跟缓存做比较。如果不一致，就说明服务端有了新的变化，因此就要通知主线程。

## API

### 主线程

浏览器原生提供Worker()构造函数，用来供主线程生成 Worker 线程。

```js
const myWorker = new Worker(jsUrl, options);
```

Worker()构造函数，可以接受两个参数。第一个参数是脚本的网址（必须遵守同源政策），该参数是必需的，且只能加载 JS 脚本，否则会报错。第二个参数是配置对象，该对象可选。它的一个作用就是指定 Worker 的名称，用来区分多个 Worker 线程。

```js

// 主线程
var myWorker = new Worker('worker.js', { name : 'myWorker' });

// Worker 线程
self.name // myWorker
```

Worker()构造函数返回一个 Worker 线程对象，用来供主线程操作 Worker。Worker 线程对象的属性和方法如下。

- `Worker.onerror`：指定 error 事件的监听函数。
- `Worker.onmessage`：指定 message 事件的监听函数，发送过来的数据在Event.data属性中。
- `Worker.onmessageerror`：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
- `Worker.postMessage()`：向 Worker 线程发送消息。
- `Worker.terminate()`：立即终止 Worker 线程。

###  Worker 线程

Web Worker 有自己的全局对象，不是主线程的window，而是一个专门为 Worker 定制的全局对象。因此定义在window上面的对象和方法不是全部都可以使用。

Worker 线程有一些自己的全局属性和方法。

- `self.name`： Worker 的名字。该属性只读，由构造函数指定。
- `self.onmessage`：指定message事件的监听函数。
- `self.onmessageerror`：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
- `self.close()`：关闭 Worker 线程。
- `self.postMessage()`：向产生这个 Worker 线程发送消息。
- `self.importScripts()`：加载 JS 脚本。

参考文章

[Web Worker MDN WEB](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers#web_workers_api)

[阮一峰 Web Worker 使用教程](https://www.ruanyifeng.com/blog/2018/07/web-worker.html)

[如何让前端拥有后端的计算能力？一文彻底了解Web Worker，十万、百万条数据都是弟弟](https://mp.weixin.qq.com/s/FycjUq6MuN-Zq_QQAtaKug)
