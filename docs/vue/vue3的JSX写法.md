# vue3的JSX写法

## 函数式组件

```js
const App = () => <div></div>;
```

## 在 render 中使用

```js
const App = {
  render() {
    return <div>Vue 3.0</div>;
  },
};
```

```js
import { withModifiers, defineComponent } from "vue";

const App = defineComponent({
  setup() {
    const count = ref(0);

    const inc = () => {
      count.value++;
    };

    return () => (
      <div onClick={withModifiers(inc, ["self"])}>{count.value}</div>
    );
  },
});
```

## Fragment(片段)

```js
const App = () => (
  <>
    <span>I'm</span>
    <span>Fragment</span>
  </>
);
```

## Attributes / Props

```js
const App = () => <input type="email" />;
```

动态绑定:

```js
const placeholderText = "email";
const App = () => <input type="email" placeholder={placeholderText} />;
```