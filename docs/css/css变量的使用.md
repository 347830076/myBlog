# CSS 变量的使用

## 变量的声明

声明变量的时候，变量名前面要加两根连词线（`--`）。

变量名大小写敏感，各种值都可以放入 CSS 变量。

```css
:root{
  --main-color: #4d4e53;
  --main-bg: rgb(255, 255, 255);
  --logo-border-color: rebeccapurple;

  --header-height: 68px;
  --content-padding: 10px 20px;

  --base-line-height: 1.428571429;
  --transition-duration: .35s;
  --external-link: "external link";
  --margin-top: calc(2vh + 20px);
}
```

## var() 函数

`var()` 函数用于读取变量。

```css
a {
  color: var(--foo);
  text-decoration-color: var(--bar);
}
```

`var()` 函数还可以使用第二个参数，表示变量的默认值。如果该变量不存在，就会使用这个默认值。

```
color: var(--foo, #7F583F);
```

## 作用域

同一个 CSS 变量，可以在多个选择器内声明。读取的时候，优先级最高的声明生效。这与 CSS 的"层叠"（cascade）规则是一致的。

```html
<style>
  :root { --color: blue; }
  div { --color: green; }
  #alert { --color: red; }
  * { color: var(--color); }
</style>

<p>蓝色</p>
<div>绿色</div>
<div id="alert">红色</div>
```

这就是说，变量的作用域就是它所在的选择器的有效范围。

由于这个原因，全局的变量通常放在根元素:root里面，确保任何选择器都可以读取它们。

```css
:root {
  --main-color: #06c;
}
```

## JavaScript 操作

JavaScript 操作 CSS 变量的写法如下：

```js
// 设置变量
document.body.style.setProperty('--primary', '#7F583F');

// 读取变量
document.body.style.getPropertyValue('--primary').trim();
// '#7F583F'

// 删除变量
document.body.style.removeProperty('--primary');
```

## 在 Vue 中使用

以下例子为利用 css 变量实现切换字体功能：

```vue
<template>
  <div :style="userStyle" class="book-text">文本内容</div>
</template>

<script>
export default {
  data () {
    return {
      fontOptions: ['Roboto', 'Lobster', 'Comic Sans'],
      userSelectedFont: 'Roboto'
    }
  },
  computed: {
    userStyle () {
      return {
        '--user-font-family': this.userSelectedFont
      }
    }
  }
</script>

<style scoped>
.book-text {
  font-family: var(--user-font-family);
}
</style>
```

可以在以下三个场景考虑使用 CSS 变量：

### 1. 样式复用
### 2. 在伪类或伪元素中动态设置值：

```css
p::first-line {
  color: var(--theme-secondary-color);
}
```

### 3. 数学计算

```vue
<template>
  <main :style="bannerStyle">
    <div class="banner">
      Banner
      <div class="banner-conent">
        banner 内容
      </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    bannerWidth () {
      const fooWidth = document.getElementById('foo').offsetWidth
      return `${fooWidth / 2}px`
    },
    bannerStyle () {
      return {
        '--banner-width': this.bannerWidth
      }
    }
  }
</script>

<style scoped>
.banner {
  width: var(--banner-width);
}
.banner-content {
  width: calc(var(--banner-width) - 20px);
}
</style>
```

## 参考链接

- [CSS 变量教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2017/05/css-variables.html)
- [小tips:了解CSS变量var « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2016/11/css-css3-variables-var/)
- [Binding CSS Variables in Vue - shayneo](https://shayneo.com/blog/binding-css-variables-with-vue/)