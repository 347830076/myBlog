# css重置样式表

个人整理工作中常用的css重置样式，和一些样式解决方法，并写上了注释

```css
html, body {
	height: 100%;
	/* 文字风格 Sans-serif 各笔画粗细相同，Serif 笔画粗细不同，monospace 等宽体，cursive草书，fantasy梦幻 */
	font-family: "Microsoft YaHei", sans-serif, "Helvetica Neue", Helvetica, Arial, "黑体", "宋体", Arial;
	-webkit-tap-highlight-color: transparent;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  }
  body {
	font-size: 14px;
	color: #333;
  }
  
  /* 重置各标签的默认样式 */
  a, body, center, cite, code, dd, del, div, dl, dt, em, fieldset, figcaption, figure, footer, form,
  h1, h2, h3, h4, h5, h6, header, hr, html, img, input, label, legend, li, mark, ol, p, section, span,  textarea, time, td, th, ul {
	  margin: 0;
	  border: 0;
	  padding: 0;
	  font-style: normal;
	  box-sizing: border-box;
	  /*  自动换行 */
	  word-wrap:break-word;
	  /*  强制英文单词断行 */
	  word-break: break-all;
  }
  
  /*  设置标签为块级分类 */
  article,
  aside,
  details,
  fieldset,
  figcaption,
  figure,
  footer,
  header,
  main,
  nav,
  section {
	  display: block
  }
  
  /* 去除input标签的默认样式 */
  button, input, textarea {
	-webkit-appearance: none;
	font-family: "Microsoft YaHei", sans-serif, "Helvetica Neue", Helvetica, Arial, "黑体", "宋体", Arial;
	  border: 0;
	  margin: 0;
	  padding: 0;
	  font-size: 1em;
	  line-height: 1em;
	  outline: none;
	  background-color: transparent;
  }
  
  /*  禁止多文本框手动拖动大小 */
  textarea {
	  resize: none;
	  -webkit-appearance: none;
  }
  
  /* 去掉按下的阴影盒子 */
  input,
  textarea,
  a {
	  -webkit-tap-highlight-color: transparent;
  }
  
  /*  清除a标签下划线 */
  a,
  a:visited {
	  text-decoration: none
  }
  a:focus,
  a:active,
  a:hover {
	  outline: none;
  }
  
  /*  清除列表前面的点 */
  ol,
  li,
  ul {
	  list-style: none
  }
  
  /*  清除IE下图片的边框 */
  img {
	border-style: none;
	font-size: 0;
  }
  
  /*  解决chrome浏览器默认黄色背景问题 */
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
	-webkit-box-shadow: 0 0 0 1000px #fff inset;
  }
  
  /*  设置默认滚动条样式 */
  ::-webkit-input-placeholder { color: #afbdcc; }
  :-moz-placeholder { color: #afbdcc; }
  ::-moz-placeholder { color: #afbdcc; }
  :-ms-input-placeholder { color: #afbdcc; }
  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-track { background-color: #f5f5f5; }
  ::-webkit-scrollbar-track-piece { background-color: #f5f5f5; border-radius: 6px; }
  ::-webkit-scrollbar-thumb { background-color: #cccccc; border-radius: 6px; }
  ::-webkit-scrollbar-corner { background-color: #f5f5f5; }
  ::-webkit-resizer { background-repeat: no-repeat; background-position: bottom right; }
```