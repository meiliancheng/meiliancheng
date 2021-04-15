# 每天学习了什么？

### 4-15 ~ react+flexible适配移动端项目的配置

#### 1.安装flexible

``` json
npm i lib-flexible --save
```

#### 2.安装 sass-loader node-sass

```  
npm i sass-loader node-sass --save-dev
```

#### 3.安装 postcss-px2rem

``` 
 npm i postcss-px2rem --save
```

#### 4.在 node_modules/config/webpack.config.js 下做如下配置：

```js
引入
	再次之前要执行 npm run eject

 const px2rem = require('postcss-px2rem');
 px2rem({ remUnit: 75 })
```

![](https://img-blog.csdnimg.cn/2019030814224680.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpbHkyMDE2bg==,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20190308142221137.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpbHkyMDE2bg==,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20190308142358162.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpbHkyMDE2bg==,size_16,color_FFFFFF,t_70)

#### 5. 引入 lib-flexible，在项目入口文件 index.js 里 引入 lib-flexible

```
import 'lib-flexible'
```

![](https://img-blog.csdnimg.cn/20190308142625125.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpbHkyMDE2bg==,size_16,color_FFFFFF,t_70)

#### 6.重新启动下项目完成配置

### 	Promise实现原理（附源码）

#### 		1. `Promise` 基本结构

```jsx
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('FULFILLED')
  }, 1000)
})

```

------

```json
构造函数Promise必须接受一个函数作为参数，我们称该函数为handle，handle又包含resolve和reject两个参数，它们是两个函数。
```

#### 	2.什么是Promise？我们用Promise来解决什么问题？

```json
Promise 是异步编程的一种解决方案：
从语法上讲，promise是一个对象，从它可以获取异步操作的消息；从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。
promise有三种状态：pending(等待态)，fulfiled(成功态)，rejected(失败态)；状态一旦改变，就不会再变。创造promise实例后，它会立即执行。
```

#### 	3. `Promise` 的 `then` 方法

```json
promise.then(onFulfilled, onRejected)

参数可选
onFulfilled 和 onRejected 都是可选参数。

如果 onFulfilled 或 onRejected 不是函数，其必须被忽略

onFulfilled 特性
    如果 onFulfilled 是函数：

当 promise 状态变为成功时必须被调用，其第一个参数为 promise 成功状态传入的值（ resolve 执行时传入的值）
在 promise 状态改变前其不可被调用
其调用次数不可超过一次

onRejected 特性
    如果 onRejected 是函数：

当 promise 状态变为失败时必须被调用，其第一个参数为 promise 失败状态传入的值（ reject 执行时传入的值）
在 promise 状态改变前其不可被调用
其调用次数不可超过一次

多次调用
    then 方法可以被同一个 promise 对象调用多次

当 promise 成功状态时，所有 onFulfilled 需按照其注册顺序依次回调
当 promise 失败状态时，所有 onRejected 需按照其注册顺序依次回调

返回
then 方法必须返回一个新的 promise 对象

promise2 = promise1.then(onFulfilled, onRejected);

因此 promise 支持链式调用
```

#### 4.all的用法：谁跑的慢，以谁为准执行回调。all接收一个数组参数，里面的值最终都算返回Promise对象

```js
let Promise1 = new Promise(function(resolve, reject){})
let Promise2 = new Promise(function(resolve, reject){})
let Promise3 = new Promise(function(resolve, reject){})

let p = Promise.all([Promise1, Promise2, Promise3])

p.then(funciton(){
  // 三个都成功则成功  
}, function(){
  // 只要有失败，则失败 
})
```

> **有了all，你就可以并行执行多个异步操作，并且在一个回调中处理所有的返回数据，是不是很酷？*有一个场景是很适合用这个的，一些游戏类的素材比较多的应用，打开网页时，预先加载需要用到的各种资源如图片、flash以及各种静态文件。所有的都加载完后，我们再进行页面的初始化。***

#### 5.race的用法：谁跑的快，以谁为准执行回调

race的使用场景：比如我们可以用race给某个异步请求设置超时时间，并且在超时后执行相应的操作，代码如下：

```js
 //请求某个图片资源
    function requestImg(){
        var p = new Promise((resolve, reject) => {
            var img = new Image();
            img.onload = function(){
                resolve(img);
            }
            img.src = '图片的路径';
        });
        return p;
    }
    //延时函数，用于给请求计时
    function timeout(){
        var p = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('图片请求超时');
            }, 5000);
        });
        return p;
    }
    Promise.race([requestImg(), timeout()]).then((data) =>{
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });

```

requestImg函数会异步请求一张图片，我把地址写为"图片的路径"，所以肯定是无法成功请求到的。timeout函数是一个延时5秒的异步操作。我们把这两个返回Promise对象的函数放进race，于是他俩就会赛跑，如果5秒之内图片请求成功了，那么遍进入then方法，执行正常的流程。如果5秒钟图片还未成功返回，那么timeout就跑赢了，则进入catch，报出“图片请求超时”的信息。运行结果如下：

![](https://user-gold-cdn.xitu.io/2018/5/19/16376a95ffa3b13c?imageslim)


