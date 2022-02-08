# vue 防抖组件

```js
export default {
    name: 'throttle',
    abstract: true,
    props: {
        time: {
            type: Number,
            default: 1000
        },
        throttle: {
            type: Boolean,
            default: false
        },
        //defer默认true: 反向防抖，先执行回调，单位时间内重触发时间，不再执行回调。可用于合并请求，执行第一次 后续单位时间内不再执行。
        defer:{
            type: Boolean,
            default: true
        }
    },
    data(){
        return {}
    },
    render() {
        //所有的 $slots 现在都会作为函数暴露在 $scopedSlots 中。
        const vnode = this.$slots.default ? this.$slots.default[0] : null;
        console.log(this.$slots.default)
        if (vnode){
            let throttledMap = {};
            let listeners = vnode.data.on || vnode.componentOptions.listeners;
            console.log('listeners',listeners)
            console.log('listeners2',Object.getOwnPropertyNames(listeners))

            if (listeners){
                Object.getOwnPropertyNames(listeners).forEach(key => {
                    if (!throttledMap[key]){
                        throttledMap[key] = this.debounce(listeners[key], this.time ,this.defer);
                    }
                    console.log('listeners3',key,throttledMap[key])
                });
                Object.getOwnPropertyNames(throttledMap).forEach(key => {
                    listeners[key] = throttledMap[key];
                })
            }
        }
        return vnode;
    },
    methods: {
        debounce(fn, wait = 300, defer = false) {
            let timer, deferTimer;
            return function (...args) {
              let that = this;
              if (timer) {
                clearTimeout(timer);
              }
              if (defer && !deferTimer) {
                deferTimer = true;
                fn.apply(that, args);
              }
              timer = setTimeout(() => {
                deferTimer = null;
                !defer && fn.apply(that, args);
              }, wait);
            };
          }
    },
}
```