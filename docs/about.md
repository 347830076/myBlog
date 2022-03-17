<style lang="scss" spcode>
  .page .theme-default-content {
    max-width: 100% !important;
  }
  .about{
    .row{
      padding: 10px 0;
      display: flex;
      align-items: center;
      label{
        position: relative;
        width: 64px;
        margin-right: 10px;
        &::after {
          position: absolute;
          content: ':';
          right: 0px;
        }
      }
    }
  }
</style>

<template>
  <div class="about">
      <h3>哈喽，大家好，我是阿离王</h3>
      <div class="row">一名在职前端程序员</div>
      <div class="row">热爱前端，喜欢分享。</div>
      <div class="row">欢迎大家一起讨论，共同学习进步！</div>
      <div class="row">
        <label>github</label> <a href='https://github.com/347830076/' target="_blank">https://github.com/347830076/</a>
      </div>
      <div class="row">
        <label>我的B站</label> <a href='https://space.bilibili.com/666922383' target="_blank">https://space.bilibili.com/666922383</a>
      </div>
      <div>
        <label>掘金</label>
        <a href='https://juejin.cn/user/1072724804906152' target="_blank">https://juejin.cn/user/1072724804906152</a>
      </div>
      <div class="row">
       阿离王带你零基础学习前端(电子书)：<a href='https://showhtml5.gitee.io/myebook/' target="_blank">https://showhtml5.gitee.io/myebook/</a>
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
