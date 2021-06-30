# 粘性定位sticky的用途

粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。

>元素根据正常文档流进行定位，然后相对它的**最近滚动祖先**（nearest scrolling ancestor）和 containing block (最近块级祖先 nearest block-level ancestor)，包括table-related元素，基于top, right, bottom, 和 left的值进行偏移。偏移值不会影响任何其他元素的位置。
该值总是创建一个新的层叠上下文（stacking context）。注意，一个sticky元素会“固定”在离它最近的一个拥有“滚动机制”的祖先上（当该祖先的overflow 是 hidden, scroll, auto, 或 overlay时），即便这个祖先不是最近的真实可滚动祖先。这有效地抑制了任何“sticky”行为。

以上文字是 [MDN官网的解释](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

下面我们用例子来看看如何使用sticky

## 导航的跟随定位效果

<br />
<iframe height="500" style="width: 100%;" scrolling="no" title="" src="https://codepen.io/347830076/embed/GRmgyvw?defaultTab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/347830076/pen/GRmgyvw">
  </a> by cylyiou (<a href="https://codepen.io/347830076">@347830076</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 不超过一屏，显示在页面最底部，页面超过一屏，一直跟随在最后面
<br />
<iframe height="300" style="width: 100%;" scrolling="no" title="" src="https://codepen.io/347830076/embed/BaRyJOX?defaultTab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/347830076/pen/BaRyJOX">
  </a> by cylyiou (<a href="https://codepen.io/347830076">@347830076</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<iframe height="300" style="width: 100%;" scrolling="no" title="sticky跟随底部2" src="https://codepen.io/347830076/embed/VwbYyEG?defaultTab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/347830076/pen/VwbYyEG">
  sticky跟随底部2</a> by cylyiou (<a href="https://codepen.io/347830076">@347830076</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

这里注意，要使用`top: 100%;`, 使用 `bottom: 0;`是没有效果的。

各位大佬如有更多`sticky`的用法，欢迎留言交流。

<Vssue :options="{ locale: 'zh' }"  />