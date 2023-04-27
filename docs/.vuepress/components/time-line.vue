<style lang="scss" scoped>
ul, li, div {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.time-line {
  box-sizing: border-box;
  color: rgba(0,0,0,.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
  margin: 0;
  padding: 0;
  list-style: none;
}
.timeline-item {
  position: relative;
  margin: 0;
  padding-bottom: 20px;
  font-size: 14px;
  list-style: none;
}
.timeline-item:last-of-type .timeline-item-tail {
  display: none;
}
.timeline-item-label {
  position: absolute;
  top: -7.001px;
  width: calc(50% - 12px);
  text-align: right;
}
.timeline-item-tail {
  position: absolute;
  top: 10px;
  left: 50%;
  height: calc(100% - 10px);
  border-left: 2px solid #f0f0f0;
}
.timeline-item-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border: 2px solid transparent;
  border-radius: 100px;
  margin-left: -4px;
  left: 50%;
  box-sizing: border-box;
}
.timeline-item-dot-green {
  color: #11A560;
  border-color: #11A560;
}
.timeline-item-dot-gray {
  color: rgba(0,0,0,.25);
  border-color: rgba(0,0,0,.25);
}
.timeline-item-text {
  left: calc(50% - 4px);
  width: calc(50% - 14px);
  text-align: left;
  position: relative;
  top: -7.001px;
  margin: 0 0 0 26px;
  word-break: break-word;
}
</style>

<template>
  <ul class="time-line">
    <li class="timeline-item" v-for="(item, index) in renderItems" :key="index">
      <div class="timeline-item-label" v-if="item.label">{{item.label}}</div>
      <div class="timeline-item-tail"></div>
      <div :class="['timeline-item-dot', getDotColorClass(item)]"></div>
      <div class="timeline-item-text">{{item.text}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "time-line",
  props: {
    items: Array
  },
  computed: {
    renderItems() {
      return this.items.map(item => {
        if (typeof item === 'string') {
          return {
            text: item,
            label: ''
          }
        }
        return item
      })
    }
  },
  methods: {
    getDotColorClass (item) {
      const color = item.color || 'green'
      return `timeline-item-dot-${color}`
    }
  }
}
</script>
