# 常用css

## 单文本溢出

```css
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
```

## 多文本溢出

```
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box; /* 作为弹性伸缩盒子模型显示。 */
-webkit-box-orient: vertical;/* 设置伸缩盒子的子元素排列方式--从上到下垂直排列 */
-webkit-line-clamp: 2; /* 显示的行 */
```

## 强制不换行

```css
white-space:nowrap;
```

## 自动换行

```css
word-wrap:break-word;
```

## 强制英文单词断行

```css
word-break:break-all;
```

## 右箭头

```css
&::after{
    position: absolute;
    right: 20px;
    top: 50%;
    content: '';
    width: 10px;
    height: 10px;
    border: 1px solid #BF1B21;
    border-color: #BF1B21 #BF1B21 transparent transparent;
    transform: translateY(-50%) rotate(45deg);
}
```


