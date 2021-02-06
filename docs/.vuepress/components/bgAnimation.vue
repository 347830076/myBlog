<template>
  <ul class="slide-box">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>

<script>

export default {
  name: "bgAnimation"
};
</script>

<style lang="scss">
.slide-box {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000;
  top: 0;
  left: 0;
  z-index: 0;
  li {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    color: transparent;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: none;
    opacity: 0.1;
    z-index: 0;
    animation: imgAnimation 8s linear infinite;

    &:nth-child(1) {
      background-image: url(/assets/login/bg-1.png);
    }
    &:nth-child(2) {
      background-image: url(/assets/login/bg-5.jpg);
      animation-delay: 2s;
    }
    &:nth-child(3) {
      background-image: url(/assets/login/bg-2.jpg);
      animation-delay: 4s;
    }
    &:nth-child(4) {
      background-image: url(/assets/login/bj.jpg);
      animation-delay: 6s;
      opacity: 0.5;
    }
  }
}

@keyframes imgAnimation {
  0% {
    opacity: 0.1;
     transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.3);
  }
  100% {
    opacity: 0.1;
  }
}
</style>
