# css使用小技巧

## 一个字前进，数字1，2加.对齐 

::: demo
```html

<template>
    <div>
        <div class="paragraph">
        <label class="num">1</label>我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1我是一个段落1
        </div>
        <div class="paragraph">
            <label class="num">2</label>我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2我是一个段落2
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style>
    .paragraph {
      margin-bottom: 4px;
      padding-left: 1em;
      font-size: 16px;
      text-indent: -1em;
      line-height: 24px;
    }
    .paragraph .num {
        position: relative;
        display: inline-block;
        width: 1em;
        text-indent: 0;
    }
     .paragraph .num::after {
        position: absolute;
        right: 0;
        content: '.';
    }
</style>
```
:::