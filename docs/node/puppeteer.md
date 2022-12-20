# puppeteer 

[Puppeteer](https://pptr.dev/) 是一个 Node.js 库，它提供了一个高级 API 来通过 DevTools Protocol控制 Chrome/Chromium 。

简单来说，就是puppeteer提供api给我们可以在服务器打开浏览器，然后操作浏览器。

[Puppeteer 中文文档](https://puppeteer.bootcss.com/)

## 能做什么呢？

大多数您可以在浏览器中手动完成的事情都可以使用 Puppeteer 完成！以下是一些帮助您入门的示例：

- 生成页面的屏幕截图和 PDF。
- 抓取 SPA（单页应用程序）并生成预渲染内容（即“SSR”（服务器端渲染））。
- 自动化表单提交、UI 测试、键盘输入，鼠标模拟等。
- 使用最新的 JavaScript 和浏览器功能创建自动化测试环境。
- 捕获站点的 时间线跟踪 以帮助诊断性能问题。
- 测试 Chrome 扩展。

## 安装

Puppeteer 有2种包可以安装：

- puppeteer-core 核心api包，不下载chrome浏览器，不支持PUPPETEER_* 系列环境变量
- puppeteer 安装时下载chrome浏览器

在大多数情况下，你可以使用 puppeteer 包。

然而, 如果是下面这些情况那你需要使用 puppeteer-core:

你正在构建 DevTools 协议顶部的另一个最终用户产品或库。例如，可以使用 puppeteer-core 构建 PDF 生成器并编写下载 headless_shell 的自定义install.js脚本而不是 Chromium 来节省磁盘空间。

你正在打包 Puppeteer 用在 Chrome 扩展应用或浏览器中以使用 DevTools 协议，因为下载额外的 Chromium 二进制文件不是必须的。

```
npm i puppeteer
```

```
npm install puppeteer-core
```


## 操作浏览器

### 启动浏览器

要启动Chrome浏览器，可以使用`puppeteer`的`launch`方法:

创建 app.js 文件，写如下代码：

```js
// app.js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  console.info(browser);
  await browser.close();
})();

```

然后通过node 执行 app.js文件

```js
node app.js
```

可以看到控制台打印了 browser 信息了

### 有头(headful)模式

Puppeteer中，浏览器默认是在无头(headless)模式下启动的，无头(headless)模式只使用命令行，不显示图形界面

而有头(headful)模式会在执行期间打开浏览器图形界面

```js
const puppeteer = require('puppeteer');

(async () => {
  // 让浏览器以有头(headful)模式启动
  const browser = await puppeteer.launch({ headless: false });
  console.info(browser);
  await browser.close();
})();
```

无头(headless)模式对于不需要UI或者不支持图形界面的环境非常有用；而有头(headful)模式则会让我们清楚地看到执行详情。

### 调试

#### 查看浏览器的执行

puppeteer脚本执行时，可以查看浏览器的执行和界面显示情况。

puppeteer有头(headful)模式会显示浏览器界面，设置`slwMo`参数可以减慢puppeteer执行每个操作时的速度。

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 200 });

  // 浏览器操作

  await browser.close();
})();
```

#### 在浏览器中调试应用程序代码

puppeteer有头(headful)模式会显示浏览器界面，可以使用DevTools调试应用程序本身。

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ devtools: true });

  // 浏览器操作

  // 保持浏览器打开，直到显式终止进程
  await browser.waitForTarget(() => false);

  await browser.close();
})();
```

puppeteer启动时，设置`devtools: true`，默认情况下会以有头(headful)模式启动浏览器，并自动打开devtools。

使用`waitForTarget`来保留浏览器进程，直到浏览器被显式关闭(控制台退出)。

要让浏览器休眠一段时间，可以使用：

- `setTimeout`方法

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ devtools: true });

  // 浏览器操作

  // 创建空白页(新选项卡)
  const page = await browser.newPage();

  await page.goto('https://www.infobyip.com');
  console.log('加载完页面');

  // 在“setTimeout”结束时resolve一个承诺
  const sleep = duration => new Promise(resolve => setTimeout(resolve, duration));
  await sleep(3000);

  console.log('3秒后打印')

  await browser.close();
})();
```

#### 调试Puppeteer脚本的执行进程

Puppeteer脚本是在Node.js进程中执行的，与浏览器进程完全分离。因此，可以像调试常规Node.js应用程序一样调试Puppeteer脚本。

#### node inspect 命令行调试

例如，在命令行中，可以使用`node inspect <脚本文件>`调试脚本：

```js
node inspect app.js
```

可以输入`help`查看调试命令：

```
debug> help

run, restart, r       Run the application or reconnect
kill                  Kill a running application or disconnect

cont, c               Resume execution
next, n               Continue to next line in current file
step, s               Step into, potentially entering a function
out, o                Step out, leaving the current function
backtrace, bt         Print the current backtrace
list                  Print the source around the current line where execution
                      is currently paused

setBreakpoint, sb     Set a breakpoint
clearBreakpoint, cb   Clear a breakpoint
breakpoints           List all known breakpoints
breakOnException      Pause execution whenever an exception is thrown
breakOnUncaught       Pause execution whenever an exception isn't caught
breakOnNone           Don't pause on exceptions (this is the default)

watch(expr)           Start watching the given expression
unwatch(expr)         Stop watching an expression
watchers              Print all watched expressions and their current values

exec(expr)            Evaluate the expression and print the value
repl                  Enter a debug repl that works like exec

scripts               List application scripts that are currently loaded
scripts(true)         List all scripts (including node-internals)

profile               Start CPU profiling session.
profileEnd            Stop current CPU profiling session.
profiles              Array of completed CPU profiling sessions.
profiles[n].save(filepath = 'node.cpuprofile')
                      Save CPU profiling session to disk as JSON.

takeHeapSnapshot(filepath = 'node.heapsnapshot')
                      Take a heap snapshot and save to disk as JSON.
```

#### node inspect 图形界面调试(VS code)

VS code 已经对node inspect做了很好的集成，使用起来很方便：

1. 点击Debug按钮，添加调试配置，如下图所示：

<img class="zoom-custom-imgs" src="https://qiniu.wanggege.cn/blog/puppeteer/debug1.png" />

2. 启动调试

如下图所示，先设置断点，然后启动调试：

<img class="zoom-custom-imgs" src="https://qiniu.wanggege.cn/blog/puppeteer/debug2.png" />

## 页面操作

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();

  // 在默认浏览器环境中创建一个新页面
  const page = await browser.newPage();
  console.info(page);

  await browser.close();
})();
```

如上所示，调用newPage方法创建了一个新页面，注意，该页面是在默认浏览器环境中创建的。

Page/页面表示浏览器中的一个选项卡页面，是一个类，类中包含了方便的方法和事件，可用来与页面交互(例如选择元素、获取元素信息等等)。

### 访问网站

我们已经创建了一个新页面，现在尝试访问某个网址：

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  // 创建空白页(新选项卡)
  const page = await browser.newPage();

  // 空白页访问指定网址
  await page.goto('https://pptr.dev');

  // 获取页面的标题
  const title = await page.title();
  console.info(`标题是: ${title}`);

  await browser.close();
})();
```

如上所示，使用goto方法访问指定网址，然后获取页面标题，并打印。

执行脚本，输出：

```
>  node app.js

>  标题是: Puppeteer | Puppeteer
```

有时会发现，标题意外地丢失了。

原因是页面中并没有真正完成title 元素的加载，导致这个问题可能是由于页面加载很慢，或者页面的一部分是延迟加载的，或者页面被立即导航到另一个页面。

#### 等待元素渲染

解决这个问题，需要等待页面中真正完成title 元素的加载，再获取页面标题，可以使用`waitForSelector`方法:

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // 创建空白页(新选项卡)
  await page.goto('https://pptr.dev');

  // 等待，直到“title”元素呈现
  await page.waitForSelector('title');

  // 获取页面的标题
  const title = await page.title();
  console.info(`标题是: ${title}`);

  await browser.close();
})();
```

使用waitForSelector方法等待选定的元素在页面中呈现，这样就可以轻松地处理异步呈现，确保元素在页面上是可见的。

这样就比较完美，谨慎了

### 设备模拟

Puppeteer提供了模拟各种设备的API，例如模拟iphone。

#### 模拟设备的用户代理和视口

模拟设备通常会涉及2个方面：

- 用户代理(user agent)模拟
- 视口(viewport)模拟

让我们模拟一个移动设备:

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, devtools: true });
  const page = await browser.newPage();

  // 模拟一个 iPhone X
  await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1');
  await page.setViewport({ width: 375, height: 812 });

  await page.goto('https://www.qikegu.com');

//   await browser.close();
})();
```

上面的示例模拟iPhone X，访问指定网页。使用setUserAgent方法设置iPhone X的用户代理，使用setViewport设置iPhone X的视口。

对于多个页面，每个页面都可以有自己的用户代理和视口定义。

上面示例的chrome运行界面, 在控制台输入下面命令

```js
navigator.userAgent

window.innerWidth

window.innerHeight
```

得到的值，确实是我们设置的值


#### 设备描述(DeviceDescriptors)

实际上，要模拟iPhone X，不必显式地设置 iPhone X 的用户代理和视口，Puppeteer中定义了一系列的设备描述以及emulate方法，emulate方法根据预定义的设备描述（包含用户代理参数与视口参数），就可以模拟该设备。emulate方法内部调用了setUserAgent和setViewport。

使用emulate方法模拟iphone x：

```js
const puppeteer = require('puppeteer');

(async () => {
  // 导入设备描述库
  const devices = puppeteer.KnownDevices

  const browser = await puppeteer.launch({ headless: false, devtools: true });
  const page = await browser.newPage();

  // 模拟iPhone X
  console.log(devices['iPhone X']);
  await page.emulate(devices['iPhone X']);
  await page.goto('https://www.qikegu.com');

//   await browser.close();
})();
```

iPhone X 的配置

```js
{
  name: 'iPhone X',
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
  viewport: {
    width: 375,
    height: 812,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    isLandscape: false
  }
}
```

### 事件处理

Page类通过继承Node.js的EventEmitter类发送事件，这表明node.js中侦听事件的方法都能使用，例如on，once， removeListener等等。

以下是支持的事件列表:

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 在解析DOM并准备就绪时发出(无需等待资源)
  page.once('domcontentloaded', () => console.info('√ DOM is ready'));

  // 当页面完全加载时发出
  page.once('load', () => console.info('√ Page is loaded'));

  // 当页面附加一个frame时发出
  page.on('frameattached', () => console.info('√ Frame is attached'));

  // 当页面内的frame导航到新URL时发出
  page.on('framenavigated', () => console.info('➞ Frame is navigated'));

  // 当页面中的脚本使用“console.timeStamp”时发出
  page.on('metrics', data => console.info(`➞ Timestamp added at ${data.metrics.Timestamp}`));

  // 当页面中的脚本使用“console”时发出
  page.on('console', message => console[message.type()](`➞ ${message.text()}`));

  // 当页面发生错误事件时发出(例如，页面崩溃)
  page.on('error', error => console.error(`✖ ${error}`));

  // 当页面中的脚本有未捕获异常时发出
  page.on('pageerror', error => console.error(`✖ ${error}`));

  // 当页面中的脚本使用“alert”、“prompt”、“confirm”或“beforeunload”时发出
  page.on('dialog', async dialog => {
    console.info(`➞ ${dialog.message()}`);
    await dialog.dismiss();
  });

  // 当打开属于浏览器环境/上下文的新页面时发出
  page.on('popup', () => console.info('➞ New page is opened'));

  // 当页面产生请求时发出
  page.on('request', request => console.info(`➞ Request: ${request.url()}`));

  // 当页面生成的请求失败时发出
  page.on('requestfailed', request => console.info(`✖ Failed request: ${request.url()}`));

  // 当页面生成的请求成功完成时发出
  page.on('requestfinished', request => console.info(`➞ Finished request: ${request.url()}`));

  // 当接收到响应时发出
  page.on('response', response => console.info(`➞ Response: ${response.url()}`));

  // 当页面创建专用的网络工作者时发出
  page.on('workercreated', worker => console.info(`➞ Worker: ${worker.url()}`));

  // 当页面销毁专用的网络工作者时发出
  page.on('workerdestroyed', worker => console.info(`➞ Destroyed worker: ${worker.url()}`));

  // 当页面分离frame时发出
  page.on('framedetached', () => console.info('√ Frame is detached'));

  // 关闭页面后发出
  page.once('close', () => console.info('√ Page is closed'));

  await page.goto('https://www.qikegu.com');

  await browser.close();
})();
```

下面的脚本模拟触发部分事件:

```js
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // 当页面中的脚本使用“console.timeStamp”时发出
    page.on('metrics', data => console.info(`➞ Timestamp added at ${data.metrics.Timestamp}`));
    // 当页面中的脚本使用“console”时发出
    page.on('console', message => console[message.type()](`➞ ${message.text()}`));
    // 当页面中的脚本使用“alert”、“prompt”、“confirm”或“beforeunload”时发出
    page.on('dialog', async dialog => {
        console.info(`➞ ${dialog.message()}`);
        await dialog.dismiss();
    });
    // 当页面发生错误事件时发出(例如，页面崩溃)
    page.on('error', error => console.error(`✖ ${error}`));

    // 触发 `metrics` 事件
    await page.evaluate(() => console.timeStamp());

    // 触发 `console` 事件
    await page.evaluate(() => console.info('A console message within the page'));

    // 触发 `dialog` 事件
    await page.evaluate(() => alert('An alert within the page'));

    // 触发 `error` 事件
    await page.emit('error', new Error('An error within the page'));

    // 触发 `close` 事件
    await page.close();

    await browser.close();
})();
```

### 鼠标模拟

Pupeteer中可以模拟鼠标操作，表示鼠标的对象是mouse对象。每个页面含有一个mouse对象，使用mouse类可以模拟鼠标移动、点击等操作。

#### 鼠标移动

要模拟鼠标移动，可以使用mouse.move方法：

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://www.qikegu.com');

  // 等待"后端开发"这部分内容呈现
  await page.waitForSelector('a[href="#pos-java-backend"]',{timeout: 10000});

  const el = await page.$('a[href="#pos-java-backend"');

  // 获取元素的位置
  const sliderRect = await page.evaluate((el) => {
    const {top, left, bottom, right} = el.getBoundingClientRect()
    return {top, left, bottom, right}
  }, el)
  
  console.log(sliderRect);
  // 移动鼠标到起点
  await page.mouse.move(sliderRect.left + 30, sliderRect.top + 5)

  // await browser.close();
})();
```

#### 鼠标点击

要模拟鼠标点击，可以使用mouse.click方法：

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://www.qikegu.com');

  // 等待"后端开发"这部分内容呈现
  await page.waitForSelector('a[href="#pos-java-backend"]',{timeout: 10000});

  const el = await page.$('a[href="#pos-java-backend"');

  // 获取元素的位置
  const elRect = await page.evaluate((el) => {
    const {top, left, bottom, right} = el.getBoundingClientRect()
    return {top, left, bottom, right}
  }, el)
  
  console.log(elRect);
  // // 移动鼠标到起点
  // await page.mouse.move(elRect.left + 30, elRect.top + 5)
  // // 按下鼠标
  // await page.mouse.down()
  // await page.mouse.up()

  // 点击，等效上面三句
  await page.mouse.click(elRect.left + 30, elRect.top + 5)

  // await browser.close();
})();
```

click会依次触发`mousemove`、`mousedown`和`mouseup`事件，click方法中还可以控制鼠标按钮(左、中、右)和点击次数，详情可参考官方API文档。

#### 鼠标拖放

结合使用`move`，`down`，`up`可以模拟鼠标拖放操作。

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://www.qikegu.com');

  // 将鼠标从一个点上拖动
  await page.mouse.move(0, 0);
  await page.mouse.down();

  // 将鼠标放到另一个点
  await page.mouse.move(1000, 1000, {steps: 200});
  await page.mouse.up();

  // await browser.close();
})();
```

### 键盘模拟

键盘是与页面交互的另一种方式，主要用于输入。与鼠标类似，Puppeteer通过一个名为keyboard的类表示键盘，每个页面实例都包含这样一个键盘实例。

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://www.qikegu.com');

  // 等待工具栏呈现
  await page.waitForSelector('form.search-form');

  // 焦点设置到搜索输入
  await page.focus('form.search-form [type="search"]');

  // 将文本键入焦点元素
  await page.keyboard.type('puppeteer', { delay: 1000 });

  // 回车
  await page.keyboard.press('Enter');

//   await browser.close();
})();
```

### 截屏

Puppeteer中截屏是一个非常简单的任务，可使用[page.screenshot](https://puppeteer.bootcss.com/api#pagescreenshotoptions)方法。

#### 截屏整个页面

`page.screenshot`方法默认截屏整个页面：

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://www.qikegu.com');
  await page.waitForSelector('title');

  // 截屏整个视图
  await page.screenshot({ path: 'screenshot.png' });

  await browser.close();
})();
```

运行代码之后，就发现项目根目录，有一张 `screenshot.png` 图片了

`page.screenshot`方法还有很多参数，如保存的图片类型、图片质量等等。

下面的例子，截屏页面中的一个指定区域：

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://www.qikegu.com');
  await page.waitForSelector('title');

  // 截屏页面中的一个区域
  await page.screenshot({
    path: 'screenshot.jpg',
    type: 'jpeg',
    quality: 80,
    clip: { x: 0, y: 0, width: 300, height: 300 }
  });

  await browser.close();
})();
```

### 生成PDF

Puppeteer可以根据网页内容生成pdf文件。要生成pdf文件，可使用`page.pdf`方法。

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 导航到项目自述文件
  await page.goto('https://www.baidu.com');

  // 从页面内容生成PDF
  await page.pdf({ path: 'out.pdf' });

  await browser.close();
})();

```

### 地理位置模拟

许多网站根据用户的地理位置定制内容。要修改用户的地理位置，可以使用`page.setGeolocation`方法。

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ devtools: true });
  const page = await browser.newPage();

  // 授予更改地理位置的权限
  const context = browser.defaultBrowserContext();
  await context.overridePermissions('https://www.qikegu.com', ['geolocation']);

  await page.goto('https://www.qikegu.com');
  await page.waitForSelector('title');

  // 设置为北极位置
  await page.setGeolocation({ latitude: 90, longitude: 0 });

  // await browser.close();
})();
```
上面示例中，先授予浏览器环境适当的权限，然后使用setGeolocation用北极坐标覆盖当前的地理位置。

运行脚本后，在打开的浏览器的console中，可以打印出用户经纬度：

```js
navigator.geolocation.getCurrentPosition((pos) => console.info('Latitude:', pos.coords.latitude,', Longitude:', pos.coords.longitude))
```

### 阻止Javascript

有时需要禁止Javascript，可以通过拦截请求，判断类型是“script”，阻止加载。

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ 
    headless: false
  });
  const page = await browser.newPage();

  await page.setRequestInterception(true);

  // 监听拦截请求事件
  page.on('request', request => {

    if (request.resourceType() === 'script')
      request.abort();
    else
      request.continue();
  });

  await page.goto('https://www.baidu.com');

  // await browser.close();
})();

```

百度太厉害了，禁止了他的js, 照样可以搜索，大家可以自己去调试看看

### 获取页面源代码

要获取页面的HTML源代码，可以使用`page.content()`方法。

```js
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ 
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com');

  // 等待，直到“title”元素呈现
  await page.waitForSelector('title');

  const html = await page.content();

  // 将html保存到一个文件中
  fs.writeFile('page.html', html, _ => console.log('HTML saved'));

  //... 做一些事
  await browser.close();
})();
```

### 可访问性(Accessibility)

可访问性是一个web标准，是指Web内容对于残障用户的可阅读和可理解性。例如对于盲人，支持文字语音就是提高可访问性的一个具体功能。提高可访问性也能让普通用户更容易理解Web内容。

可访问性树是DOM的子集，包含与辅助技术(如屏幕阅读器、语音控制等)信息相关的元素。拥有可访问性树，意味着我们可以分析和测试页面中的可访问性支持。

Puppeteer可以通过`page.accessibility`获取可访问性树的当前状态:

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.baidu.com');
  await page.waitForSelector('title');

  // 获取可访问性树的当前状态
  const snapshot = await page.accessibility.snapshot();
  console.info(snapshot);

  await browser.close();
})();
```

### 代码覆盖率

代码覆盖率（Code Coverage）用于衡量一个源文件里有多少代码是被用到的。例如，某个网页引用了一个css文件，通常该网页只会使用css文件中的一部分代码，这样就可以计算用到的代码量与文件中全部代码量的比率。

代码覆盖率统计功能是作为Chrome v59的一部分正式引入的，通过统计代码覆盖率，可以减少无用代码，加快页面加载速度。

Puppeteer中，可用通过`page.coverage`使用代码覆盖率统计功能。

计算百度首页内，javascript文件与css文件的有效代码量。

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 开始收集JS和CSS文件的覆盖率信息
  await Promise.all([page.coverage.startJSCoverage(), page.coverage.startCSSCoverage()]);

  await page.goto('https://www.baidu.com');
  await page.waitForSelector('title');

  // 停止收集覆盖率信息
  const [jsCoverage, cssCoverage] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage()
  ]);

  // 根据覆盖率计算使用了多少字节
  const calculateUsedBytes = (type, coverage) =>
    coverage.map(({ url, ranges, text }) => {
      let usedBytes = 0;

      ranges.forEach(range => (usedBytes += range.end - range.start - 1));

      return {
        url,
        type,
        usedBytes,
        totalBytes: text.length
      };
    });

  console.info([
    ...calculateUsedBytes('js', jsCoverage),
    ...calculateUsedBytes('css', cssCoverage)
  ]);

  await browser.close();
})();
```

上面示例中，

首先为JavaScript和CSS文件收集覆盖率信息，直到页面加载完成。

然后，定义`calculateUsedBytes`函数，它将遍历收集的覆盖率数据，计算使用了多少字节(基于覆盖率)。

最后，对收集到覆盖率信息：`jsCoverage`与`cssCoverage`，调用`calculateUsedBytes`函数，计算使用到的字节数。

运行脚本的输出:

```js
[
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 137,
    totalBytes: 925
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 12,
    totalBytes: 154
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 336,
    totalBytes: 407
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 1025,
    totalBytes: 5296
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 17,
    totalBytes: 46
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 50,
    totalBytes: 153
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 23,
    totalBytes: 91
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 9475,
    totalBytes: 9548
  },
  {
    url: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/lib/jquery-1-edb203c114.10.2.js',
    type: 'js',
    usedBytes: 65350,
    totalBytes: 143928
  },
  {
    url: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/lib/esl-d776bfb1aa.js',
    type: 'js',
    usedBytes: 10514,
    totalBytes: 16420
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 448,
    totalBytes: 517
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 3586,
    totalBytes: 10290
  },
  {
    url: 'https://pss.bdstatic.com/r/www/cache/static/protocol/https/bundles/es6-polyfill_5645e88.js',
    type: 'js',
    usedBytes: 22429,
    totalBytes: 71823
  },
  {
    url: 'https://pss.bdstatic.com/r/www/cache/static/protocol/https/plugins/every_cookie_mac_82990d4.js',
    type: 'js',
    usedBytes: 1515,
    totalBytes: 2556
  },
  {
    url: 'https://pss.bdstatic.com/r/www/cache/static/protocol/https/bundles/polyfill_9354efa.js',
    type: 'js',
    usedBytes: 13199,
    totalBytes: 41939
  },
  {
    url: 'https://pss.bdstatic.com/r/www/cache/static/protocol/https/global/js/all_async_search_4f981bf.js',
    type: 'js',
    usedBytes: 107953,
    totalBytes: 684164
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 467,
    totalBytes: 624
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 495,
    totalBytes: 2141
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 1129,
    totalBytes: 1423
  },
  {
    url: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/sbase-829e78c5bb.js',
    type: 'js',
    usedBytes: 16199,
    totalBytes: 55552
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 8238,
    totalBytes: 8473
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 209,
    totalBytes: 307
  },
  {
    url: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/s_super_index-3fffae8d60.js',
    type: 'js',
    usedBytes: 416,
    totalBytes: 1022
  },
  {
    url: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/min_super-59ec6c653e.js',
    type: 'js',
    usedBytes: 14967,
    totalBytes: 63261
  },
  {
    url: 'https://www.baidu.com/',
    type: 'js',
    usedBytes: 130,
    totalBytes: 131
  },
  {
    url: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/components/hotsearch-5af0f864cf.js',
    type: 'js',
    usedBytes: 1662,
    totalBytes: 5451
  },
  {
    url: 'https://hectorstatic.baidu.com/cd37ed75a9387c5b.js',
    type: 'js',
    usedBytes: 51800,
    totalBytes: 75245
  },
  {
    url: 'https://pss.bdstatic.com/r/www/cache/static/protocol/https/plugins/bzPopper_7bc4f0e.js',
    type: 'js',
    usedBytes: 23345,
    totalBytes: 92200
  },
  {
    url: 'https://pss.bdstatic.com/r/www/cache/static/protocol/https/home/js/nu_instant_search_79bce6e.js',
    type: 'js',
    usedBytes: 1609,
    totalBytes: 24415
  },
  {
    url: 'https://pss.bdstatic.com/r/www/cache/static/protocol/https/plugins/swfobject_0178953.js',
    type: 'js',
    usedBytes: 1523,
    totalBytes: 9216
  },
  {
    url: 'https://pss.bdstatic.com/r/www/cache/static/protocol/https/soutu/js/tu_9af35bd.js',
    type: 'js',
    usedBytes: 1774,
    totalBytes: 16109
  },
  {
    url: 'https://pss.bdstatic.com/r/www/cache/static/protocol/https/voice/js/voice_7c500f4.js',
    type: 'js',
    usedBytes: 7592,
    totalBytes: 33116
  },
  {
    url: 'https://pss.bdstatic.com/r/www/cache/static/protocol/https/amd_modules/@baidu/search-sug_897d083.js',
    type: 'js',
    usedBytes: 7066,
    totalBytes: 38737
  },
  {
    url: 'https://hector.baidu.com/a.js',
    type: 'js',
    usedBytes: 1832,
    totalBytes: 4665
  },
  {
    url: 'https://www.baidu.com/',
    type: 'css',
    usedBytes: 2222,
    totalBytes: 3853
  },
  {
    url: 'https://www.baidu.com/',
    type: 'css',
    usedBytes: 118,
    totalBytes: 626
  },
  {
    url: 'https://www.baidu.com/',
    type: 'css',
    usedBytes: 0,
    totalBytes: 6423
  },
  {
    url: 'https://www.baidu.com/',
    type: 'css',
    usedBytes: 2701,
    totalBytes: 24929
  },
  {
    url: 'https://www.baidu.com/',
    type: 'css',
    usedBytes: 0,
    totalBytes: 8599
  },
  {
    url: 'https://www.baidu.com/',
    type: 'css',
    usedBytes: 1230,
    totalBytes: 13081
  },
  {
    url: 'https://www.baidu.com/',
    type: 'css',
    usedBytes: 4840,
    totalBytes: 40292
  },
  {
    url: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/css/ubase_sync-d600f57804.css?v=md5',
    type: 'css',
    usedBytes: 0,
    totalBytes: 407
  },
  {
    url: 'https://www.baidu.com/',
    type: 'css',
    usedBytes: 9720,
    totalBytes: 16410
  },
  {
    url: 'https://www.baidu.com/',
    type: 'css',
    usedBytes: 251,
    totalBytes: 1648
  },
  {
    url: 'https://pss.bdstatic.com/r/www/cache/static/protocol/https/soutu/css/soutu_new2_dd3a84f.css',
    type: 'css',
    usedBytes: 1588,
    totalBytes: 13599
  }
]
```

可以看出，百度首页还有不少可以优化的余地。

### 性能评估

可以使用Puppeteer评估网站性能，分析页面的加载速度和响应速度等性能指标。

#### 1. 评估加载时间

页面导航和加载时间等指标，可以通过`window.performance`访问。

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://pptr.dev');
  await page.waitForSelector('title');

  // 在页面上下文中执行导航API
  const metrics = await page.evaluate(() => JSON.stringify(window.performance));

  // 将结果解析为JSON
  console.info(JSON.parse(metrics));

  await browser.close();
})();
```

现在，通过这些指标([指标说明](https://www.w3.org/TR/navigation-timing/#processing-model))，就可以计算各种加载时间，例如，`loadEventEnd - navigationStart`表示从导航开始到页面加载完成的时间。

#### 2. 运行时指标

Puppeteer中要获取页面的运行时指标，可以使用`page.metrics`方法。

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://pptr.dev');
  await page.waitForSelector('title');

  // 返回页面的运行时指标
  const metrics = await page.metrics();
  console.info(metrics);

  await browser.close();
})();
```

运行脚本结果是：

```js
{
  Timestamp: 1327432.660694, //调用metrics方法时间戳
  Documents: 17, //文档数量
  Frames: 7, //frame数量
  JSEventListeners: 61, //事件的数量
  Nodes: 2650, // DOM元素的数量
  LayoutCount: 10, //页面布局的数量
  RecalcStyleCount: 24, //页面样式重新计算的次数
  LayoutDuration: 0.145065, //所有页面布局的总持续时间
  RecalcStyleDuration: 0.02759, //所有页面样式重新计算的总持续时间
  ScriptDuration: 0.425575, // JavaScript执行的总时间
  TaskDuration: 0.744677, //浏览器执行的所有任务的总持续时间
  JSHeapUsedSize: 16177616, // JavaScript实际内存使用情况
  JSHeapTotalSize: 22986752  // JavaScript使用的内存总量，包括空闲分配的空间
}
```

#### 3. 通过Chrome跟踪分析浏览器活动

Chrome跟踪是一种分析工具，记录浏览器的幕后活动，包括浏览器中线程、选项卡和进程等相关信息。Chrome跟踪获取的信息可在Chrome DevTools的时间轴面板中查看。

Puppeteer中，要使用Chrome跟踪功能，可以使用`page.tracing`对象。

下面的例子，记录浏览器在导航过程中的活动:

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 开始跟踪
  await page.tracing.start({ path: 'trace.json' });

  await page.goto('https://www.qikegu.com');
  await page.waitForSelector('title');

  // 结束跟踪
  await page.tracing.stop();

  await browser.close();
})();
```

运行脚本，跟踪记录会保存为`trace.json`文件

可在Chrome DevTools的时间轴面板中查看跟踪信息：使用chrome浏览器打开网址`chrome://tracing`，然后加载`trace.json`文件。

下面是将跟踪文件导入DevTools后的图形化数据:

<img class="zoom-custom-imgs" src="https://qiniu.wanggege.cn/blog/puppeteer/t1.png" />

参考文章

[Puppeteer 教程](https://www.qikegu.com/docs/4525)