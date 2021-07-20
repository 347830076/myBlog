# 关于我

<!-- 
:::: tabs

::: tab 热爱
    前端
:::


::: tab 分享
    交流
:::

:::: -->

<style lang="scss">
.row{
  padding: 10px 0;
  display: flex;
  align-items: center;
  label{
    width: 70px;
  }
}
</style>

<template>
  <div class="adout">
      <h2>哈喽，大家好，我是阿离王</h2>
      <div class="row">一名在职前端程序员</div>
      <div class="row">热爱前端代码，喜欢分享。</div>
      <div class="row">欢迎大家一起讨论，共同学习进步！</div>
      <div class="row">
        <label>github：</label> <a href='https://github.com/347830076/'>https://github.com/347830076/</a>
      </div>
      <div class="row">
        <label>B站：</label> <a href='https://space.bilibili.com/666922383'>https://space.bilibili.com/666922383</a>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>

<Vssue :options="{ locale: 'zh' }"  />