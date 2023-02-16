(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{488:function(t,a,s){"use strict";s.r(a);var e=s(3),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"viewport详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewport详解"}},[t._v("#")]),t._v(" viewport详解")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("这次想聊聊移动开发相关的事。是的，你没有看错，一句话就可以开始你的移动前端开发。")]),t._v(" "),a("p",[t._v("你心里一定在想，什么话这么酷，能够瞬间带入到移动前端开发的世界。")]),t._v(" "),a("p",[t._v("但其实它一点也不新奇，不复杂。")]),t._v(" "),a("h2",{attrs:{id:"viewport简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewport简介"}},[t._v("#")]),t._v(" viewport简介")]),t._v(" "),a("p",[t._v("没错，就是viewport特性，一个移动专属的Meta值，用于定义视口的各种行为。")]),t._v(" "),a("p",[t._v("该特性最先由Apple引入，用于解决移动端的页面展示问题，后续被越来越多的厂商跟进。")]),t._v(" "),a("p",[t._v("举个简单的例子来讲为什么会需要它：")]),t._v(" "),a("p",[t._v("我们知道用户大规模使用手机等移动设备来进行网页浏览器，其实得益于智能手持设备的兴起，也就是近几年的事。（还记得不久前的几年，满大街都还是诺基亚的天下么？）")]),t._v(" "),a("p",[t._v("这时有一个很现实的问题摆在了厂商面前，用户并不能很好地通过手机等设备访问网页，因为屏幕太小。")]),t._v(" "),a("h2",{attrs:{id:"layout-viewport-布局视口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout-viewport-布局视口"}},[t._v("#")]),t._v(" layout viewport (布局视口)")]),t._v(" "),a("p",[t._v("Apple也发现了这个问题，并且适时的出现，它提出了一个方案用来解决这个问题。在iOS Safari中定义了一个"),a("code",[t._v("viewport meta")]),t._v("标签，用来创建一个虚拟的"),a("code",[t._v("布局视口（layout viewport）")]),t._v("，而这个视口的分辨率接近于PC显示器，Apple将其定义为980px（其他厂商各有不同①）")]),t._v(" "),a("p",[t._v("这就很好的解决了早期的页面在手机上显示的问题，由于两者之间的宽度趋近，CSS只需要像在PC上那样渲染页面就行，原有的页面结构不会被破坏。")]),t._v(" "),a("blockquote",[a("p",[t._v("①的描述大致如下，数值不一定持续准确，厂商可能更改，但这个绝对值其实并非特别重要：\niOS, Android基本都是: 980px\nBlackBerry: 1024px")])]),t._v(" "),a("h2",{attrs:{id:"visual-viewport-视觉视口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visual-viewport-视觉视口"}},[t._v("#")]),t._v(" visual viewport (视觉视口)")]),t._v(" "),a("p",[t._v("有了"),a("code",[t._v("layout viewport(布局视口)")]),t._v("，我们还需要一个视口用来承载它，这个视口可以简单的认为是手持设备物理屏幕的可视区域，我们称之为（视觉视口）"),a("code",[t._v("visual viewport")]),t._v("。这是一个比较直观的概念，因为你能看得见你的手机屏幕。")]),t._v(" "),a("p",[t._v("对于"),a("code",[t._v("visual viewport")]),t._v("，开发者一般只需要知道它的存在和概念就行，因为无法对它进行任何设置或者修改。很明显，"),a("code",[t._v("visual viewport")]),t._v("的尺寸不会是一个固定的值，甚至每款设备都可能不同。大致列几种常见设备的visual viewport尺寸：")]),t._v(" "),a("ul",[a("li",[t._v("iPhone4: 320*480px")]),t._v(" "),a("li",[t._v("iPhone5/SE: 320*568px")]),t._v(" "),a("li",[t._v("iPhone6/6s/7/8: 375*667px")]),t._v(" "),a("li",[t._v("iPhone6/6s/7/8Plus: 414*736px")]),t._v(" "),a("li",[t._v("iPhoneX: 375*812px")])]),t._v(" "),a("p",[t._v("以iPhone4S为例，会在其320px②的"),a("code",[t._v("visual viewport(视觉视口)")]),t._v("上，创建一个宽980px的"),a("code",[t._v("layout viewport(布局视口)")]),t._v("，于是用户可以在"),a("code",[t._v("visual viewport(视觉视口)")]),t._v("中拖动或者缩放网页，来获得良好的浏览效果；布局视口用来配合CSS渲染布局，当我们定义一个容器的宽度为100%时，这个容器的实际宽度是980px而不是320px，通过这种方式大部分网页就能以缩放的形式正常显示在手机屏幕上了。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("②的描述大致如下：\n早期移动前端开发工程师常能见到宽640px的设计稿，原因就是UI工程师以物理屏幕宽度为320px的iPhone4-iPhone5S作为参照设计；\n当然，现在你还可能会见到750px和1242px尺寸的设计稿，原因当然是iPhone6的出现\n当然，为了更好的适配移动端或者只为移动端设计的应用，单有布局视口和视觉视口还是不够的。\n")])])]),a("h2",{attrs:{id:"ideal-viewport-完美视口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ideal-viewport-完美视口"}},[t._v("#")]),t._v(" ideal viewport(完美视口)")]),t._v(" "),a("p",[t._v("我们还需要一个视口，它类似于布局视口，但宽度和视觉视口相同，这就是"),a("code",[t._v("完美视口（ideal viewport）")]),t._v("。")]),t._v(" "),a("p",[t._v("有了完美视口，用户不用缩放和拖动网页就能够很好的进行网页浏览。而完美视口也是通过viewport meta的某种设置来达到。")]),t._v(" "),a("p",[t._v("说了这么一大堆的东西，貌似都和viewport有关联，那么viewport到底怎么搞，请继续往下。")]),t._v(" "),a("h2",{attrs:{id:"viewport特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewport特性"}},[t._v("#")]),t._v(" viewport特性")]),t._v(" "),a("p",[a("strong",[t._v("通常情况下")]),t._v("，viewport有以下6种设置。当然厂商可能会增加一些特定的设置，比如iOS Safari7.1增加了一种在网页加载时隐藏地址栏与导航栏的设置：minimal-ui，不过随后又将之移除了。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Value")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("正整数或device-width")]),t._v(" "),a("td",[t._v("定义视口的宽度，单位为像素")])]),t._v(" "),a("tr",[a("td",[t._v("height正整数或device-height")]),t._v(" "),a("td",[t._v("定义视口的高度，单位为像素")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("initial-scale")]),t._v(" "),a("td",[t._v("[0.0-10.0]")]),t._v(" "),a("td",[t._v("定义初始缩放值")])]),t._v(" "),a("tr",[a("td",[t._v("minimum-scale")]),t._v(" "),a("td",[t._v("[0.0-10.0]")]),t._v(" "),a("td",[t._v("定义缩小最小比例，它必须小于或等于maximum-scale设置")])]),t._v(" "),a("tr",[a("td",[t._v("maximum-scale")]),t._v(" "),a("td",[t._v("[0.0-10.0]")]),t._v(" "),a("td",[t._v("定义放大最大比例，它必须大于或等于minimum-scale设置")])]),t._v(" "),a("tr",[a("td",[t._v("user-scalable")]),t._v(" "),a("td",[t._v("yes/no")]),t._v(" "),a("td",[t._v("定义是否允许用户手动缩放页面，默认值yes")])])])]),t._v(" "),a("p",[a("strong",[t._v("width")])]),t._v(" "),a("p",[t._v("width被用来定义"),a("code",[t._v("layout viewport(布局视口)")]),t._v("的宽度，如果不指定该属性（或者移除viewport meta标签），则layout viewport宽度为厂商默认值。如：iPhone为980px；")]),t._v(" "),a("p",[t._v("举个例子：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("此时的"),a("code",[t._v("layout viewport(布局视口)")]),t._v("将成为"),a("code",[t._v("ideal viewport(完美视口)")]),t._v("，因为"),a("code",[t._v("layout viewport(布局视口)")]),t._v("宽度与设备视觉视口(visual viewport)宽度一致了。")]),t._v(" "),a("p",[t._v("除了width之外，还有一个属性定义也能实现"),a("code",[t._v("ideal viewport(完美视口)")]),t._v("，那就是"),a("code",[t._v("initial-scale")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("height")])]),t._v(" "),a("p",[t._v("与width类似，但实际上却不常用，因为没有太多的use case(使用案例)。")]),t._v(" "),a("p",[a("strong",[t._v("initial-scale")])]),t._v(" "),a("p",[t._v("如果想页面默认以某个比例放大或者缩小然后呈现给用户，那么可以通过定义initial-scale来完成。")]),t._v(" "),a("p",[t._v("initial-scale用于指定页面的初始缩放比例，假定你这样定义：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("initial-scale=2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("那么用户将会看到2倍大小的页面内容。")]),t._v(" "),a("p",[t._v("在说width的时候，我们说到initial-scale也能实现"),a("code",[t._v("ideal viewport(完美视口)")]),t._v("，是的，你只需要这样做，也可以得到完美视口：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("initial-scale=1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[a("strong",[t._v("maximum-scale")])]),t._v(" "),a("p",[t._v("在移动端，你可能会考虑用户浏览不便，然后给予用户放大页面的权利，但同时又希望是在一定范围内的放大，这时就可以使用maximum-scale来进行约束。")]),t._v(" "),a("p",[t._v("maximum-scale用于指定用户能够放大的比例。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("initial-scale=1,maximum-scale=5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("页面的默认缩放值initial-scale是1，用户最终能够将页面放大到这个初始页面大小的5倍。")]),t._v(" "),a("p",[a("strong",[t._v("minimum-scale")])]),t._v(" "),a("p",[t._v("类似maximum-scale的描述，不过minimum-scale是用来指定页面缩小比例的。")]),t._v(" "),a("p",[t._v("通常情况下，为了有更好地体验，不会定义该属性的值比1更小，因为那样页面将变得难以阅读。")]),t._v(" "),a("p",[a("strong",[t._v("user-scalable")])]),t._v(" "),a("p",[t._v("如果你不想页面被放大或者缩小，通过定义user-scalable来约束用户是否可以通过手势对页面进行缩放即可。")]),t._v(" "),a("p",[t._v("该属性的默认值为yes，即可被缩放（如果使用默认值，该属性可以不定义）；当然，如果你的应用不打算让用户拥有缩放权限，可以将该值设置为no。")]),t._v(" "),a("p",[t._v("使用方法如下：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user-scalable=no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h2",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),a("p",[t._v("正如开篇所说，这既不高深也不新奇，它而仅仅是一点观念转变。")]),t._v(" "),a("p",[t._v("当你掌握了viewport，那么意味着你已经大致了解了移动平台与PC平台的不同，你可以更专注而细致的去解决某些平台差异问题。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("在移动端，无论你给viewport设置宽多少，如果没有指定默认的缩放值，则移动端浏览器会自动计算这个缩放值，以达到当前页面不会出现横向滚动条（或者说，viewport的宽度就是屏幕的宽度）")]),t._v(" "),a("p",[t._v("如果什么都还没搞懂，也没关系，会设置viewport就可以了，不影响我们开发移动端，当然，理解了解这些概念才能体现出我们的专业，一开始不是很理解的，先这样用，之后看多几次理解。")]),t._v(" "),a("p",[a("strong",[t._v("第一种情况  推荐使用")])]),t._v(" "),a("p",[t._v("设置layout viewport(布局视口)等于设备视觉视口(visual viewport)宽度， 此时给页面设置百分比布局")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0, user-scalable=no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("strong",[t._v("第二种情况")])]),t._v(" "),a("p",[t._v("设置layout viewport(布局视口)固定宽度, 此时不可以设置 initial-scale，max-scale，min-scale, 利用手机的自动缩放来使用手机屏幕， 此时的元素100%宽度，表示设置固定的宽度")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=640,  user-scalable=no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("Vssue",{attrs:{options:{locale:"zh"}}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);