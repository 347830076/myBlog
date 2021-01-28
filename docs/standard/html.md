# html 规范

- 属性使用双引号

```html
<img class="img" alt="图片" data-index="1" />
```

- 语义化标签

```html
<header>头部</header>
<nav>导航栏</nav>
<section>块</section>
<footer>尾部</footer>
```

- 单标签自闭合

```html
<input type="text" />
<custom-tag />
```

- 自定义标签名，横杠 `-` 划分

```html
<user-list></user-list>
```

- `img` 需要写 `alt`

```html
<img class="img" alt="图片" data-index="1" />
```

- `html` 标签的 `lang` 属性统一用 `zh-cmn-Hans`，简体中文

```html
<html lang='zh-cmn-Hans'>
```

[HTML lang 参考文章](https://juejin.cn/post/6844903872117358599)

- `meta` 设置

```html
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="keywords" content="壁虎, 壁虎科技">
<meta name="description" content="壁虎科技打造的专业票据交易工具。">
```

- 元素层级换行并用两个空格缩进

```html
<setion>
  <div>
    <span></span>
  </div>
</setion>
```

- 操作符号前后加空格

```html
<div>
  { data.num }
</div>
```

- `v-for` 处加上 `key`

```html
<div v-for="" :key=""></div>
```
