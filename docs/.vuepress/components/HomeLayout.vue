<style scoped lang="scss">
html, body,ul{
  margin: 0;
}
.login-container {
	.layer {
	  position: absolute;
	  height: 100%;
	  width: 100%;
	}
  .some-space{
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 9999;
    .title{
      font-size: 40px;
      color: #fff;
    }
    .desc{
      font-size: 20px;
      color: #fff;
      opacity: 0.8;
      margin: 40px 0;
    }
  }
	#particles-js {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
    z-index: 1000;
	}
}
</style>

<template>
  <div class="login-container">
    <div class="layer">
      <div class="some-space">
        <div class="title">欢迎来到我的个人博客</div>
        <div class="desc">热爱前端，热爱分享</div>
        <div>
          <a href="/about">
            <el-button type="primary">进入博客</el-button>
          </a>
        </div>
      </div>
    </div>

    <bgAnimation />

    <vue-particles 
	      color="#6495ED"
	      :particleOpacity="0.3"
	      :particlesNumber="80"
	      shapeType="circle"
	      :particleSize="4"
	      linesColor="#6495ED"
	      :linesWidth="1"
	      :lineLinked="true"
	      :lineOpacity="0.2"
	      :linesDistance="150"
	      :moveSpeed="3"
	      :hoverEffect="true"
	      hoverMode="grab"
	      :clickEffect="true"
	      clickMode="push"
	    >
	    </vue-particles>

  </div>
</template>

<script>
import Vue from 'vue'
import vueParticles from 'vue-particles'
Vue.use(vueParticles)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  created() { },
  mounted() {
  },
  methods: {
  },
}
</script>

