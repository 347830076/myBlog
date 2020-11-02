# css各种布局

## 圣杯布局

::: demo [vanilla]
```html
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>圣杯布局</title>

		<style type="text/css">
			body {
				background-color: #ffffff;
				font-size: 14px;
			}
			
			#hd,
			#ft {
				padding: 20px 3px;
				background-color: #03a9f4;
				text-align: center;
                color: #ffffff;
			}
			
			.bd-lft,
			.bd-rgt,
			.bd-3-lr,
			.bd-3-ll,
			.bd-3-rr {
				margin: 10px 0;
				min-width: 400px;
			}
			
			.main {
				background-color: #03a9f4;
				color: #ffffff;
			}
			
			.aside,
			.aside-1,
			.aside-2 {
				background-color: #00bcd4;
				color: #ffffff;
			}
			
			p {
				margin: 0;
				padding: 20px;
				text-align: center;
			}
			/* 左侧栏固定宽度，右侧自适应 */
			
			.bd-lft {
				zoom: 1;
				overflow: hidden;
				padding-left: 210px;
			}
			
			.bd-lft .aside {
				float: left;
				width: 200px;
				margin-left: -100%;
				/*= -100%*/
				position: relative;
				left: -210px;
				/* = -parantNode.paddingLeft */
				_left: 0;
				/*IE6 hack*/
			}
			
			.bd-lft .main {
				float: left;
				width: 100%;
			}
			/* 右侧栏固定宽度，左侧自适应 */
			
			.bd-rgt {
				zoom: 1;
				overflow: hidden;
				padding-right: 210px;
			}
			
			.bd-rgt .aside {
				float: left;
				width: 200px;
				margin-left: -200px;
				/* = -this.width */
				position: relative;
				right: -210px;
				/* = -parantNode.paddingRight */
			}
			
			.bd-rgt .main {
				float: left;
				width: 100%;
			}
			/* 左中右 三栏自适应 */
			
			.bd-3-lr {
				zoom: 1;
				overflow: hidden;
				padding-left: 210px;
				padding-right: 210px;
			}
			
			.bd-3-lr .main {
				float: left;
				width: 100%;
			}
			
			.bd-3-lr .aside-1 {
				float: left;
				width: 200px;
				margin-left: -100%;
				position: relative;
				left: -210px;
				_left: 210px;
				/*IE6 hack*/
			}
			
			.bd-3-lr .aside-2 {
				float: left;
				width: 200px;
				margin-left: -200px;
				position: relative;
				right: -210px;
			}
			/* 都在左边，右侧自适应 */
			
			.bd-3-ll {
				zoom: 1;
				overflow: hidden;
				padding-left: 420px;
			}
			
			.bd-3-ll .main {
				float: left;
				width: 100%;
			}
			
			.bd-3-ll .aside-1 {
				float: left;
				width: 200px;
				margin-left: -100%;
				position: relative;
				left: -420px;
				_left: 0px;
				/*IE6 hack*/
			}
			
			.bd-3-ll .aside-2 {
				float: left;
				width: 200px;
				margin-left: -100%;
				position: relative;
				left: -210px;
				_left: 210px;
				/*IE6 hack*/
			}
			/* 都在右边，左侧自适应 */
			
			.bd-3-rr {
				zoom: 1;
				overflow: hidden;
				padding-right: 420px;
			}
			
			.bd-3-rr .main {
				float: left;
				width: 100%;
			}
			
			.bd-3-rr .aside-1 {
				float: left;
				width: 200px;
				margin-left: -200px;
				position: relative;
				right: -210px;
			}
			
			.bd-3-rr .aside-2 {
				float: left;
				width: 200px;
				margin-left: -200px;
				position: relative;
				right: -420px;
			}
		</style>

	</head>

	<body>

		<div id="hd">头部</div>

		<div class="bd-lft">
			<div class="main">
				<p>主内容栏自适应宽度</p>
			</div>

			<div class="aside">
				<p>侧边栏固定宽度</p>
			</div>
		</div>

		<div class="bd-rgt">
			<div class="main">
				<p>主内容栏自适应宽度</p>
			</div>

			<div class="aside">
				<p>侧边栏固定宽度</p>
			</div>
		</div>

		<div class="bd-3-lr">
			<div class="main">
				<p>主内容栏自适应宽度</p>
			</div>

			<div class="aside-1">
				<p>侧边栏1固定宽度</p>
			</div>

			<div class="aside-2">
				<p>侧边栏2固定宽度</p>
			</div>
		</div>

		<div class="bd-3-ll">
			<div class="main">
				<p>主内容栏自适应宽度</p>
			</div>

			<div class="aside-1">
				<p>侧边栏1固定宽度</p>
			</div>

			<div class="aside-2">
				<p>侧边栏2固定宽度</p>
			</div>
		</div>

		<div class="bd-3-rr">
			<div class="main">
				<p>主内容栏自适应宽度</p>
			</div>

			<div class="aside-1">
				<p>侧边栏1固定宽度</p>
			</div>

			<div class="aside-2">
				<p>侧边栏2固定宽度</p>
			</div>
		</div>
		<div id="ft">底部</div>
	</body>
</html>
<script>
</script>
<style>
</style>
```
:::

## 1.单列布局

### 1.1 水平居中

#### 父元素 text-align:center;子元素：inline-block;

- 优点：兼容性好；
- 不足：需要同时设置子元素和父元素

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  width: 500px;
  height: 200px;
  background: red;
  text-align: center;
}
.child {
  display: inline-block;
  width: 300px;
  height: 100px;
  background: blue;
}
```

#### 子元素 margin:0 auto;

- 优点：兼容性好
- 缺点：需要指定宽度

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  width: 500px;
  height: 400px;
  background: red;
}
.child {
  margin: 0 auto;
  width: 300px;
  height: 100px;
  background: blue;
}
```

<!-- #### 子元素{display:table;margin:0 auto;}

- 优点:只需要对自身进行设置
- 不足:IE6,7 需要调整结构

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  width: 500px;
  height: 400px;
  background: red;
}
.child {
  margin: 0 auto;
  display: table;
  width: 300px;
  height: 100px;
  background: blue;
}
``` -->

#### 父元素：relative；子元素：absolute；left:50%;margin-left:-宽度的一半

- 优点：兼容性好
- 缺点：需要知道子元素的宽度

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  position: relative;
  top: 0;
  left: 0;
  width: 500px;
  height: 400px;
  background: red;
}
.child {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -150px;
  width: 300px;
  height: 100px;
  background: blue;
}
```

#### 父元素：relative；子元素：absolute；left:50%;transform:translate(-50%,0);

- 优点：不需要知道子元素的宽度
- 缺点：兼容性差 （新时代的你们，现在新的浏览器支持了，放心用了）

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  position: relative;
  top: 0;
  left: 0;
  width: 500px;
  height: 400px;
  background: red;
}
.child {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 300px;
  height: 100px;
  background: blue;
}
```

#### 弹性盒子：父元素：display:flex;justify-content:center;

- 优点：简单
- 缺点：兼容性差 （新时代的你们，现在新的浏览器支持了，放心用了）

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  display: flex;
  justify-content: center;
  width: 500px;
  height: 400px;
  background: red;
}
.child {
  width: 300px;
  height: 100px;
  background: blue;
}
```

### 1.2 垂直居中

#### vertical-align:center;

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  width: 500px;
  height: 400px;
  background: red;
  display: table-cell;
  vertical-align: middle;
}
.child {
  width: 300px;
  height: 100px;
  background: blue;
}
```

<!-- ### line-height

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  width: 500px;
  height: 400px;
  background: red;
  line-height: 400px;
}
.child {
  width: 300px;
  height: 100px;
  background: blue;
  display: inline-block;
  vertical-align: middle;
}
``` -->

#### 父元素：position:relative;子元素：positon:absolute;top:50%;transform:translate(0,-50%);

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  position: relative;
  top: 0;
  left: 0;
  width: 500px;
  height: 400px;
  background: red;
}
.child {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  width: 300px;
  height: 100px;
  background: blue;
}
```

#### 父元素：position:relative;子元素：positon:absolute;top:50%;margin-top:-子元素高度的一半;

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  position: relative;
  top: 0;
  left: 0;
  width: 500px;
  height: 400px;
  background: red;
}
.child {
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -50px;
  width: 300px;
  height: 100px;
  background: blue;
}
```

#### 父元素：display:flex;align-items:center;

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  width: 500px;
  height: 400px;
  background: red;
  display: flex;
  align-items: center;
}
.child {
  width: 300px;
  height: 100px;
  background: blue;
}
```

### 1.3 水平垂直居中

#### 父元素：display:table-cell;vertical-align:middle;text-align:center;子元素；display:inline-block;

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  width: 500px;
  height: 400px;
  background: red;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.child {
  width: 300px;
  height: 100px;
  background: blue;
  display: inline-block;
}
```

#### 父元素：position:relative;子元素：position:absolute?50%;left:50%;margin-left:宽度的一半；margin-top:高度的一半；或者 transform:translate(-50%,-50%);

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  width: 500px;
  height: 400px;
  background: red;
  position: relative;
  left: 0;
  right: 0;
}
.child {
  width: 300px;
  height: 100px;
  background: blue;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

#### 父元素{display:flex;justify-content:center;align-items:center;}

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  width: 500px;
  height: 400px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
.child {
  width: 300px;
  height: 100px;
  background: blue;
}
```

## 2.多列布局

### 2.1 左侧定宽，右侧自适应 第一种

**left{float:left;width:100px;}
.right{margin-left:100px;}**

```html
<div class="left">left</div>
<div class="right">right</div>
```

```css
* {
  margin: 0;
  padding: 0;
}
.left {
  height: 400px;
  width: 300px;
  background: red;
  float: left;
}
.right {
  height: 400px;
  margin-left: 300px;
  background: blue;
}
```

---

### 2.1 左侧定宽，右侧自适应 第二种

```html
<div class="parent">
  <div class="left">
    left
  </div>
  <div class="right-fix">
    <div class="right">
      right
    </div>
  </div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}
.left {
  width: 300px;
  height: 400px;
  float: left;
  background: red;
}
.right-fix {
  width: 100%;
  margin-left: -300px;
  float: right;
}
.right {
  margin-left: 300px;
  height: 400px;
  background: blue;
}
```

---

**.left{width:宽度值;float:left;} .right{overflow:hidden;}**

```html
<div class="parent">
  <div class="left">
    left
  </div>
  <div class="right">
    right
  </div>
</div>
```

```css
/*设置overflow:hidden;创建BFC。根据BFC特性，BFC不会与float box 重叠。*/

* {
  margin: 0;
  padding: 0;
}
.left {
  width: 300px;
  height: 400px;
  float: left;
  background: red;
}
.right {
  height: 400px;
  background: blue;
  overflow: hidden;
}
```

---

**table 实现**

```html
<div class="parent">
  <div class="left">
    left
  </div>
  <div class="right">
    right
  </div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}
.parent {
  display: table;
  table-layout: fixed;
  width: 100%;
}
.left {
  width: 300px;
  height: 400px;
  background: red;
  display: table-cell;
}
.right {
  height: 400px;
  background: blue;
  display: table-cell;
}
```

---

**flex 实现**

```html
<div class="parent">
  <div class="left">
    left
  </div>
  <div class="right">
    right
  </div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}
.parent {
  display: flex;
  width: 100%;
}
.left {
  width: 300px;
  height: 400px;
  background: red;
}
.right {
  height: 400px;
  background: blue;
  flex: 1;
}
```

### 2.2 右侧定宽左侧自适应

**float margin 实现**

```html
<div class="parent">
  <div class="left">
    left
  </div>
  <div class="right">
    right
  </div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}
.left {
  width: 100%;
  height: 400px;
  background: red;
  float: left;
  margin-right: -300px;
}
.right {
  height: 400px;
  background: blue;
  width: 300px;
  float: right;
}
```

**table 实现**

```html
<div class="parent">
  <div class="left">
    left
  </div>
  <div class="right">
    right
  </div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}
.parent {
  width: 100%;
  display: table;
  table-layout: fixed;
}
.left {
  width: 100%;
  height: 400px;
  background: red;
  display: table-cell;
}
.right {
  height: 400px;
  background: blue;
  width: 300px;
  display: table-cell;
}
```

---

**flex 实现**

```html
<div class="parent">
  <div class="left">
    left
  </div>
  <div class="right">
    right
  </div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}
.parent {
  width: 100%;
  display: flex;
}
.left {
  flex: 1;
  background: red;
}
.right {
  height: 400px;
  background: blue;
  width: 300px;
}
```

### 2.3 左边两列定宽，右侧自适应

**float margin 实现**

```html
<div class="parent">
  <div class="left">
    left
  </div>
  <div class="center">
    center
  </div>
  <div class="right">
    right
  </div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}
.parent {
  width: 100%;
}
.left,
.center {
  background: red;
  float: left;
  width: 300px;
  height: 400px;
}
.center {
  background: yellow;
}
.right {
  height: 400px;
  background: blue;
  margin-left: 600px;
}
```

---

**float overflow 实现**

```html
<div class="parent">
  <div class="left">
    left
  </div>
  <div class="center">
    center
  </div>
  <div class="right">
    right
  </div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}
.parent {
  width: 100%;
}
.left,
.center {
  background: red;
  float: left;
  width: 300px;
  height: 400px;
}
.center {
  background: yellow;
}
.right {
  height: 400px;
  background: blue;
  overflow: hidden;
}
```

---

**table 实现**

```html
<div class="parent">
  <div class="left">
    left
  </div>
  <div class="center">
    center
  </div>
  <div class="right">
    right
  </div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
}
.parent {
  width: 100%;
  display: table;
  table-layout: fixed;
}
.left,
.center {
  background: red;
  display: table-cell;
  width: 300px;
  height: 400px;
}
.center {
  background: yellow;
}
.right {
  height: 400px;
  background: blue;
  display: table-cell;
}
```


<Vssue :options="{ locale: 'zh' }"  />
