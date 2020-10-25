# setTimeout 和 setInterval 的定时时间深入研究

`setInterval()` - 间隔指定的毫秒数不停地执行指定的代码（一直执行）。

`setTimeout()` - 在指定的毫秒数后执行指定代码(只执行一次)。

使用setInterVal：

```js
    function doStuff(){
        // 此处为需要执行一段时间T的代码
    }
    setInterVal(doStuff, 100);
```

下来用使用setTimeout模拟setInterval：

```js
    function tick() {
        doStuff();
        setTimeout(tick, 100);
    }
    tick();
```

看下正常情况下两者的区别：

<img :src="$withBase('/assets/img/js/setTime.png')" alt="time">

**setInterval**每个定时器之间的间隔是**100ms**，而**setTimeout**每隔`100ms执行一次doStuff`,所以每个定时器之间的间隔是**100 + T**(doStuff执行时间为T);这个T就是本文的关键了。

- 如果T可以忽略的话，两者的效果是基本相同的。
- T <= 100时，setInterval定时器间隔100，setTimeout定时器间隔100+T。
- 如果T > 100，setTimeout依然如上图，两个定时器之间间隔100+T。 那么setInterval呢？

先看下图：

<img :src="$withBase('/assets/img/js/setTime2.png')" alt="time2">

在0ms时，定时器1开始进入宏任务队列；100ms时，定时器1开始执行doStuff1，队列为空，定时器2进入队列；200ms时，因为定时器2(doStuff1还没执行完)在队列中，所以定时器3被跳过。**浏览器不会同时创建两个相同的间隔计时器**。 300ms时，定时器2已经开始执行，队列为空，定时器4进入队列。以此类推~

下面我们用代码验证下。T设置为140ms。 我们让定时器运行5次，按照上述理解，总运行时间应该是：**100+5*140 = 800ms**。 代码如下：

```js
let i = 0;
console.time("总时间");

function doStuff() {
    console.log("delay");
    dead(140);
    console.timeEnd("测试");
}

function dead(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

let timer = setInterval(() => {
    i++;
    if (i > 4) {
        clearInterval(timer);
        setTimeout(() => {
        console.timeEnd("总时间");
        }, 0);
    }
    console.log("interval start");
    console.time("测试");
    doStuff();
}, 100);
consle
```
<img :src="$withBase('/assets/img/js/setTime3.png')" alt="time3">

可以看出定时器运行了5次，总时间的确为 **100 + 140*5 = 800ms**。 

如果我们设置dead(250), 经过测试总时间为 **100 + 250 * 5 = 1350**;

<img :src="$withBase('/assets/img/js/setTime4.png')" alt="time4">

如果doStuff中的代码是异步的呢？比如像我们常用promise。140ms返回结果。代码如下：

```js
    let i = 0;
    console.time("总时间");

    function delay(i) {
        promise(i);
    }

    function promise(i) {
        return new Promise((resole,reject) => {
            setTimeout(() => {
                resole(i);
            }, 140);
        }).then(res => {
            console.log("res", res);
        })
    }

    let timer = setInterval(() => {
        i++;
        if (i > 4) {
            clearInterval(timer);
            setTimeout(() => {
                console.timeEnd("总时间");
            }, 0);
        }
        delay(i);
    }, 100);
```

<img :src="$withBase('/assets/img/js/setTime5.png')" alt="time5">

可以看出总时间是500ms，请求接口的异步代码并不会阻塞定时器。这个也很好理解，定时器中的同步代码会直接进入队列，异步代码注册事件，完成后进入队列；所以当异步代码注册事件后，这个定时器就执行完了，并不是等异步代码回来后这个定时器才算结束，不然5次定时器的总时间就是800ms了。

### 根据以上代码效果总结

`setInterval`只是在特定时间点将代码推入队列，如果已有定时器在队列中，则会跳过。**浏览器不会同时创建两个相同的间隔计时器**。

`setInterval`设置定时时间小于函数体内的执行时间时候，则第一次执行定时时间后面的真正的定时时间应该是执行函数体的总时间。

`setInterval`中的异步代码不会阻塞创建新的定时器。


