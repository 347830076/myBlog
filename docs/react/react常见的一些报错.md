# react常见的一些报错

相信大家在刚刚学习，使用react开发的时候，会遇到一些报错。这里我记录下我遇到的报错，和解决办法

## 卸载页面（切换路由）的时候

会出现如下图的报错：

<img class="zoom-custom-imgs" :src="$withBase('/assets/img/react/error.png')">


报错提示：无法对未装载的组件执行反应状态更新。这是一个不准的操作，但它表示应用程序内存泄漏。若要修复，请取消useffect清理函数中的所有订阅和异步任务

**根据提示我们可以知道，使用useEffect时，我们并没有用useEffect的离开页面生命周期去处理（清除）一些订阅和异步任务**

虽然不处理也不会影响页面使用，但是有追求的你，肯定是想解决报错，避免造成内存泄漏

### 第一种定时器情况：

```js
const [update, setUpdate] = useState(1);
 useEffect(() => {
    const creatInt = setInterval(() => {    //假设这里写了定时器来更新update
      setUpdate(1);
      console.log(update)
    }, 300);
  }, []);
```

以上代码大家应该也很常见，在页面写了个定时器, 当我们切换页面的时候，你会发现控制台还会继续打印，这样就会有几率出现上面的报错，而且会造成内存泄漏。

为什么说有几率出现报错呢，是根据笔者的测试，发现并不是每次都会报错。

想感知造成内存泄漏也很简单，你设置定时时间短一点，你设置个4毫秒， 然后不断切换页面，会发现控制台拼命的打印，然后浏览器就慢慢卡死了（慎重）。

所以我们使用定时器的时候，要时刻记得养成习惯，在页面卸载时（切换页面），一定要手动清除定时器

**如下解决方法：**

```js
const [update, setUpdate] = useState(1);
 useEffect(() => {
    const creatInt = setInterval(() => {    //假设这里写了定时器来更新update
      setUpdate(1);
      console.log(update)
    }, 300);
    return () => {
      clearInterval(creatInt);   //（重点）这里清除掉定时器  
    };
  }, []);
```

### 使用接口异步的时候

这里直接放解决方法的写法了:

```js
useEffect(() => {
    let isUnmount = false;      //这里插入isUnmount
    const fetchDetail = async () => {
      const res = await getDetail(detailId);
      if (res.code === 0 && !isUnmount) {  //加上判断isUnmount才去更新数据渲染组件
        setDetail(res.data);
      }
    };
    fetchDetail();
    return () => isUnmount = true;   //最好return一个isUnmount
  }, [detail]);
```

看了上面两个例子，相信大家也能想到，其实存在异步的情况，或者是有定时器（订阅任务）时，就有可能出现这样的报错

**说明：useEffect相当于class组件的3个生命周期，其中return ()=>{ }  相当于 componentWillUnMount** 不是很了解useEffect的同学可以自行谷歌了解了解

class类组件：原理同hook，在 `componentWillUnMount` 中设置一个 值true 、false来判断是否渲染组件

好了，大家又解决了一个bug，完美（成就感）。

参考文献： [解决react hook组件卸载数据处于加载中渲染组件状态](https://www.cnblogs.com/seemoon/p/12744957.html)