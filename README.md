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

#### React hooks的钩子 

1. useState

   - 定义状态 

     - 方法使用

     ```js
     const [state, setState] = useState(initialState);
      //state为变量，setState 修改 state值的方法， setState也是异步执行。
     //class this.setState更新是state是合并， useState中setState是替换。
     ```

2. useEffect 

   - ```js
     useEffect(()  =>  {// Async Action}, ?[dependencies]); // 第二参数非必填
     ```

     - useEffect 是在render之后生效执行的！
     - Effect在render后按照前后顺寻执行的。
     - effect在没有任何依赖的情况下，render后都按照顺序执行。
     - effect内部执行是异步的。
     - 依赖 [] 可以实现类似componentDidMount的作用，但最好忘记生命周期，只记副作用
     - effect的回调函数返回一个匿名函数，相当于`componentUnMount`的钩子函数，一般是remove eventLisenter， clear timeId等，主要是组件卸载后防止内存泄漏。

3. useContext 

   - **跨组件共享数据的钩子函数**

   - ```js
     const value = useContext(MyContext);
     // MyContext 为 context 对象（React.createContext 的返回值） 
     // useContext 返回MyContext的返回值。
     // 当前的 context 值由上层组件中距离当前组件最近的<MyContext.Provider> 的 value prop 决定。
     ```

     ```js
     import React, { useContext, useState } from “react”;
     const MyContext = React.createContext();
     function Demo5() {
       const [value, setValue] = useState("init”);
       console.log(“Demo5”);
      return (
         <div>
           {(() => {
             console.log("render");
             return null;
           })()}
      <button onClick={() => {
             console.log('click：更新value')
             setValue(`${Date.now()}_newValue`)
           }}>
             改变value
      </button>
           <MyContext.Provider value={value}>
             <Child1 />
             <Child2 />
           </MyContext.Provider>
         </div>
       );
     }
     
     function Child1() {
       const value = useContext(MyContext);
       console.log(“Child1-value”, value);
       return <div>Child1-value: {value}</div>;
     }
     
     function Child2(props) {
       console.log(‘Child2’)
       return <div>Child2</div>;
     }
     ```

     - useContext 的组件总会在 context 值变化时重新渲染， 所以`<MyContext.Provider>`包裹的越多，层级越深，性能会造成影响。
     - `<MyContext.Provider>` 的 value 发生变化时候， 包裹的组件无论是否订阅content value，所有组件都会从新渲染。
     - demo中child2 不应该rerender, 如何避免不必要的render？*
       使用React.memo优化。

     ```js
     const Child2 = React.memo((props) => {
       return <div>Child2</div>;
     })
     ```

     - useContext 的组件总会在 context 值变化时重新渲染， 所以`<MyContext.Provider>`包裹的越多，层级越深，性能会造成影响。
     - `<MyContext.Provider>` 的 value 发生变化时候， 包裹的组件无论是否订阅content value，所有组件都会从新渲染。
     - demo中child2 不应该rerender, 如何避免不必要的render？*
       使用React.memo优化。

     ```js
     const Child2 = React.memo((props) => {
       return <div>Child2</div>;
     })
     ```

4. useRef

   - 传送门

     ```
     const refContainer = useRef(initialValue);
     ```

     - useRef 返回一个可变的 ref 对象, 和自建一个 {current: …} 对象的唯一区别是，useRef 会在每次渲染时返回同一个 ref 对象, 在整个组件的生命周期内是唯一的。
     - useRef 可以保存任何可变的值。其类似于在 class 中使用实例字段的方式。

   **总结：**

   - *useRef 可以存储那些不需要引起页面重新渲染的数据*。
   - 如果你刻意地想要从某些异步回调中读取 /最新的/ state，你可以用 一个 ref 来保存它，修改它，并从中读取。

5. useMemo

   - *语法：*
     `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`; 返回一个 memoized 值，和`useCallback`一样，当依赖项发生变化，才会重新计算 memoized 的值,。
     useMemo和useCallback不同之处是：它允许你将 *memoized* 应用于任何值类型（不仅仅是函数）。

**总结：**
     

     - `useMemo` 会在`render `前执行。
     - 如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。
     - `useMemo`用于返回`memoize`,防止每次render时*大计算量*带来的开销。
     - 使用`useMemo`优化需谨慎， 因为优化本身也带来了计算，*大多数时候，你不需要考虑去优化不必要的重新渲染*。

6. useCallback

   ```js
   usecallback(()=> e=>console.log(e), [] )//主要针对箭头函数 相当于重新走一遍useMemo!
   ```

   

