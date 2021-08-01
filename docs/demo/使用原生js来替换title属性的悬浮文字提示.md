# 使用原生js来替换title属性的悬浮文字提示

### 背景

一般我们想要DOM元素出现悬浮文字提醒，就会给这个元素添加title属性即可

```html
<div title="惊喜就是我，惊不惊喜">鼠标移到我身上有惊喜</div>
```

title属性的悬浮文字提示在不同的浏览器，悬浮等待的时间和悬浮文字的样式都可能会不一样，例如chrome上显示是白底灰字，firefox上就可能是黄底黑字，时长可能是**3s或者1s**，

如果为了确保不同浏览器的用户体验的效果趋于一致的话，那么我们就需要禁用默认的title属性，改用js手动实现悬浮文字的提示。

**最重要的是悬浮时间太久才显示，要个3秒就很难受了**

## 实现原理步骤

1. 首先我们得知道页面上dom加载完成  
2. 也得知道动态渲染的dom加载完成 (使用[MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver) 接口提供了监视对DOM树所做更改的能力)
3. 获取有title属性的所有元素
4. 监听对应元素的mouseenter事件
5. 写样式替换原生的title悬浮效果

具体实现代码如下：

```js
// 使用自定义的悬浮文字提示代替原生的title属性，采用addEventListner进行事件绑定，不兼容IE 6 7 8
let titleTools = {
  init(time) {
    time = parseInt(time)
    if (!isNaN(time) && time >= 0) {
      this.timeout = time
    } else {
      console.warn(`param ${time} is not a number or out of range! using default timeout setting`)
    }
    // 选中所有含有title属性的节点
    let eles = document.querySelectorAll('*[title]')
    for (let i = 0; i < eles.length; i++) {
      // 隐藏原先的title属性，改用js进行控制
      if (eles[i].title) {
        eles[i].dataset.title = eles[i].title
        eles[i].title = ''
      }
      // 绑定函数
      eles[i].timeoutms = this.timeout
      eles[i].addEventListener('mousemove', this.title)
      eles[i].addEventListener('mouseleave', this.clear)
      eles[i].leaveAction = this.clear
    }
  },
  // 延时显示文字
  timeout: 500,
  // 显示提示文字的函数绑定在mousemove中
  title(e) {
    clearTimeout(this.timer)
    const that = this
    that.removeEventListener('mousemove', this.leaveAction)
    this.timer = setTimeout(() => {
      let div = document.createElement('div')
      div.innerHTML = that.dataset.title
      div.style.cssText = `display:inline-block;
                            border-radius: 2px;
                            padding: 0 5px;
                            line-height:1.3;
                            color:#000;
                            background:#fff;
                            font-size:13px;
                            box-shadow: 0 0 6px #ccc;
                            position:fixed;
                            left:${e.clientX}px;
                            top:${e.clientY}px;
                            z-index:999`
      document.body.appendChild(div)
      that.titleElement = div
      that.addEventListener('mousemove', that.leaveAction)
    }, this.timeoutms)
  },
  // 清除文字提示框的函数，绑定在mousemove和mouseleave上
  clear(e) {
    clearTimeout(this.timer)
    let div = this.titleElement
    if (div && div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }
}

// 选择需要观察变动的节点
const targetNode = document.getElementById('root')

// 观察器的配置（需要观察什么变动）
const config = {
  childList: true,  // 观察目标子节点的变化，是否有添加或者删除
  attributes: true, // 观察属性变动
  subtree: true     // 观察后代节点，默认为 false
}

// 当观察到变动时执行的回调函数
const callback = function(mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  titleTools.init(500)
}

// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback)

// 以上述配置开始观察目标节点
observer.observe(targetNode, config)
```

实际效果如下图：

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/demo/title.png')">

参考文章： [使用原生js来替换title属性的悬浮文字提示-可自定义样式和出现时间-简单实现](https://www.pianshen.com/article/5173364630/)