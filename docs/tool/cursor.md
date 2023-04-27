# 智能编码编辑器Cursor

在 [ChatGPT](https://chat.openai.com/chat) 问世之前，我们的编码方式很多时候都是面向搜索引擎编码，需要不断地进行搜索，然后复制粘贴，俗称`CV工程师`。

但是，随着`ChatGPT`的出现，这一切将彻底改变。

`ChatGPT` 是一种基于人工智能的自然语言处理模型，可以根据上下文理解人类语言并生成相应的回复。

在编码方面，ChatGPT可以提供准确而详尽的帮助和提示，甚至可以**自动生成代码**。

这种新的编码方式将彻底颠覆以往的编码方式，大大提高编码的效率和准确性，让编码变得更加高效、便捷、智能化。

今天我们就给大家介绍一款免费的智能编码编辑器：[Cursor](https://www.cursor.so/)。

Cursor 编辑器集成了**OpenAI 的 GPT-4**，这意味着它能够利用最先进的人工智能技术来帮助我们编写代码。

## 如何使用 Cursor

先了解大概了解下cursor的快捷键功能

- 在cursor界面上，可以看到这句话提示 `Type Ctrl+k to generate ` 意思就是 **按Ctrl+k生成**
- 我们按下 Ctrl+k，看得弹出一个输入框窗口，`instructions for code to generate`（生成代码的说明），输入我们的需求，就会自动生成代码
- Ctrl+l, 弹窗 `Chat about the current file/selection...` (讨论当前文件/选择…)  意思就是根据当前文件内容进行讨论，你问他问题，他回复你

>tip: 先创建一个文件，有后缀名的，这样他可以根据你文件后缀来生成对应的代码，

### vue

例如我们创建一个 `index.vue`文件

按下 Ctrl+k，在弹窗输入我们的需求，例如我们输入：`帮我写一个登录窗口，居中显示`，得到代码如下

```vue
<template>
  <div class="login-window">
    <!-- login form goes here -->
  </div>
</template>

<script>
export default {
  name: 'LoginWindow',
  mounted() {
    // center the login window
    const loginWindow = document.querySelector('.login-window');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const loginWindowWidth = loginWindow.offsetWidth;
    const loginWindowHeight = loginWindow.offsetHeight;
    loginWindow.style.left = `${(windowWidth - loginWindowWidth) / 2}px`;
    loginWindow.style.top = `${(windowHeight - loginWindowHeight) / 2}px`;
  }
}
</script>

<style>
.login-window {
  position: absolute;
  /* other styles for the login window */
}
</style>
```

哇，酷，是不是震惊，根据描述自动生成了一些代码出来，看着代码能正常使用，虽然代码质量距离优秀的程序员写的还有差距，不过也是能正常使用的。

并且我们还可以继续引导他写出更好的代码来。

这里我们看到他生成的代码，居中效果是用js控制的，我们一般会用css来写居中效果，那么我们可以和他说，`用css显示居中效果`

这里有个小技巧1：我们是想全文更改的，就先ctrl+a全文选中，再按ctrl+k来提问，就会比较好的效果，它是可以根据你选中内容来进行分析的

优化代码如下：

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/tool/cursor/1.png')" />

可以看到已经帮我们优化了代码，Accept ALL（接受所有） Reject ALL（拒绝所有），这里我们可以看根据需求点击接受还是拒绝代码。点Accept ALL之后

```vue
<template>
  <div class="login-window center">
    <!-- login form goes here -->
  </div>
</template>

<script>
export default {
  name: 'LoginWindow',
}
</script>

<style>
.login-window {
  position: absolute;
  /* other styles for the login window */
}

.center {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
```
这里又有个技巧2：看到上面注释是英文的吧，我们可以让它翻译成中文的

先ctrl+a全选, 再按ctrl+k, 输入 `翻译`

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/tool/cursor/2.png')" />

我们根据需求点击 Accept 或者 Reject 就好

我们继续引导它完善添加功能代码，比如输入：`添加表单内容，用户名和密码`

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/tool/cursor/3.png')" />

继续输入：`添加表单样式，input聚焦时边框有动画闪烁效果`

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/tool/cursor/4.png')" />

继续输入：`表单添加正则检验，用户名只能用英文中文数字，不能用特殊字符，密码字数范围是6-20，有大小写字母`

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/tool/cursor/5.png')" />

我们输入交互了几次了，是不是慢慢发现，只要我们慢慢引导的妥当，他就能生成我们想要的代码，真的是太牛了，就和人平时交流沟通一样，它能理解你的自然语言，然后给出答案。酷，太赞了！！！

大家动手多去发挥自己的想象，和想法，去输入指令给它帮你生成代码吧。

当然也要自己**review下代码**正确性，和代码质量哦，它有时生成的代码不一定是自己想要的代码，可以当做参考，结合实际情况来使用

### react

接下来我们创建一个用tsx文件格式看看, `index.tsx`


