<style lang="scss" scoped>
.back-to-top {
  position: fixed;
  width: 60px;
  height: 80px;
  right: 40px;
  bottom: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
}
.top {
  display: block;
  position: absolute;
  margin: auto;
  bottom: 0;
  right: 0;
}
.back-top-container {
  height: 80px;
  width: 60px;
  margin: auto;
  &:hover .cat {
    bottom: 50px;
  }
  &:hover .diglett {
    bottom: 26px;
  }
}
.cat {
  background: #FF9955;
  height: 30px;
  top: auto;
  right: 15px;
  bottom: 30px;
  width: 30px;
  z-index: 0;
  transition: all .2s linear;
  .eyes {
    position: absolute;
    height: 4px;
    width: 4px;
    background: #333;
    border-radius: 100%;
    top: 8px;
  }
  .left {
    left: 6px;
  }
  .right {
    right: 6px;
  }
  .mouth {
    position: absolute;
    height: 2px;
    width: 60%;
    background: #333;
    border-radius: 0 0 30% 30%;
    top: 14px;
    margin: auto;
    left: 0;
    right: 0;
  }
  &::before {
    border-left: 0 solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #FF9955;
    left: 0;
  }
  &::after {
    border-right: 0 solid transparent;
    border-left: 8px solid transparent;
    border-bottom: 8px solid #FF9955;
    right: 0;
  }
  &::before, &::after {
    width: 0;
    height: 0;
    top: -5px;
    position: absolute;
    content: "";
  }
}
.diglett {
  top: auto;
  right: -10px;
  bottom: 0;
  width: 80px;
  z-index: 0;
  transition: all .2s linear;
}
.moon {
  height: 60px;
  width: 60px;
  background: #666;
  border-radius: 30px;
  box-shadow: 0 0 30px 1px #444;
  &::before {
    border-radius: 30px;
    box-shadow: 5px -25px 0 0 #444, 25px 0 0 0 #444, 25px -18px 0 5px #444;
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    left: 15px;
    bottom: 5px;
    background: #444;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
  .cat {
    bottom: 50px;
  }
  .diglett {
    bottom: 26px;
  }
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  .cat {
    bottom: 30px !important;
  }
  .diglett {
    bottom: 0 !important;
  }
}
</style>

<template>
  <transition name="fade">
    <div class="back-to-top" v-show="show" @click="scrollToTop">
      <div class="back-top-container top">
        <!-- <div class="cat top">
          <span class="eyes left"></span>
          <span class="eyes right"></span>
          <span class="mouth"></span>
        </div> -->
        <img class="diglett top" src="./lufei.png" alt="路飞" title="点我返回顶部">
        <!-- <div class="moon top"></div> -->
      </div>
    </div>
  </transition>
</template>

<script>
import { debounce } from '../../common/js/util'

export default {
  name: "back-to-top",
  props: {
    threshold: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      scrollTop: null
    }
  },
  computed: {
    show () {
      return this.scrollTop > this.threshold
    }
  },
  mounted () {
    this.scrollTop = this.getScrollTop()
    window.addEventListener('scroll', debounce(() => {
      this.scrollTop = this.getScrollTop()
    }, 100))
  },
  methods: {
    getScrollTop () {
      return window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop || 0
    },
    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
