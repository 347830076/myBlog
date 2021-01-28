# CSS 规范

- 禁止内联 style
- 嵌套层级不超过 4 级，尽量减少
- 命名横杠 `-` 划分
- 避免通配符和标签选择器
- 编写顺序，由外到里

```css
.class {
    display: flex;
    position: relative;
    left: 0;
    top: 0;
    margin: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100px;
    height: 100px;
    color: #333333;
    font-size: 12px;
    font-weight: bold;
    background-color: #fff;
}
```

- 有 `0px` 的删掉 `px`

```
margin: 0 10px;
```

- `margin` 、 `padding` 合并缩写，同一元素不得有两个 `margin` / `padding` 

- 小数点前加 `0`

```width: 0.5rem;```
  
- vue 中 `style` 标签使用 `scoped` 属性，如需改组件样式，可使用 `::v-deep`

```html
<style scoped lang="scss">
@import "./index.scss";
</style>
```

```css
::v-depp .class{}
```

- 颜色 16 进制用大写字母，6 位字符

```
color: #FFFFFF;
```
- `background-image` 中填写 url 时，不需要携带引号
- 空格
    - 属性值前
    - 选择器 `>`, `+`, `~` 前后
    - `{` 前
    - `!important` 的 `!` 前
    - `@else` 前后
    - 属性值中的 `,` 后
    - 注释 `/` 后和 `/` 前

```css
/* 注释 */
.class {
  color: red !important;
  background-color: rgba(0, 0, 0, .5);
}

.class1,
.class2 {
  /* ... */
}

.class > .class{
  /* ... */
}

.class {
  /* ... */
}

@if {
  /* ... */
} @else {
  /* ... */
}
```
   