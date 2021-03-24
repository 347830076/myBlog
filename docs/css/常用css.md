# 常用css

## 单文本溢出

```css
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
```

## 多文本溢出

```css
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
## 字符超出部分换行

```css
overflow-wrap: break-word;
```
## 字符超出位置使用连字符-

```css
hyphens: auto;
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

## 1px 边框解决方案

### 设置单条底部边框：

```css
.scale-1px-bottom {
    position: relative;
    border:none;
}
.scale-1px-bottom::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background: #000;
    width: 100%;
    height: 1px;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
```

### 同时设置 4 条边框：

```css
.scale-1px {
    position: relative;
    margin-bottom: 20px;
    border:none;
}
.scale-1px::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 200%;
    height: 200%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: left top;
    transform-origin: left top;
}
```

