##### vue相关的问题

一、概念

　	　vuex是一个专为vue.js应用程序开发的状态管理模式（它采用集中式存贮管理应用的所有组件的状		态，	并以相应的规则保证状态以一种可预测的方式发生变化）。

二、五大核心属性	

　　核心属性为：state，getter，mutation，action，module

- **state**：存储数据，存储状态；在根实例中注册了store 后，用 `this.$store.state` 来访问；对应vue里面的data；存放数据方式为响应式，vue组件从store中读取数据，如数据发生变化，组件也会对应的更新。
- **getters**：可以认为是 store 的计算属性，相当于 vue中的 computed，依赖于 state里面的值。它的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
- **mutations**：用于修改状态，store里面的数仅能通过`mutations`里面的方法改变,但是必须是同步的。更改 vuex 的 store 中的状态的唯一方法是提交 mutation，也就是$store.commit。
- **actions**：包含任意异步操作，用它处理完后再触发mutations来改变状态。
- **module**：将 store 分割成模块，每个模块都具有state、mutation、action、getter、甚至是嵌套子模块。

##### vue相关的指令

```php
v-model   数据绑定
data  返回对象用 return
v-for   循环   格式  v-for="字段名 in(of) 数组json"
v-show   显示 隐藏     传递的值为布尔值  true  false  默认为false
v-if   显示与隐藏     和v-show对比的区别 就是是否删除dom节点   默认值为false
v-else-if  必须和v-if连用
v-else  必须和v-if连用  不能单独使用  否则报错   模板编译错误
v-bind  动态绑定  作用： 及时对页面的数据进行更改
v-on 绑定事件  函数必须写在methods里面
 @click  快捷方法
v-text  解析文本
v-html   解析html标签
v-bind:class   三种绑定方法  1、对象型  '{red:isred}'  2、三目型   'isred?"red":"blue"'   3、数组型  '[{red:"isred"},{blue:"isblue"}]'
v-once  进入页面时  只渲染一次 不在进行渲染
v-cloak  防止闪烁
v-pre  把标签内部的元素原位输出
```

##### 路由的两种模式

##### hash模式

​	这里的 hash 就是指 url 尾巴后的 # 号以及后面的字符。这里的 # 和 css 里的 # 是一个意思。hash 也 称	作 锚点，本身是用来做页面定位的，她可以使对应 id 的元素显示在可视区域内。

​	由于 hash 值变化不会导致浏览器向服务器发出请求，而且 hash 改变会触发 hashchange 事件，浏览器	的进后退也能对其进行控制，所以人们在 html5 的 history 出现前，基本都是使用 hash 来实现前端路由	的。

​	使用到的api：

```js
window.location.hash = 'qq' // 设置 url 的 hash，会在当前url后加上 '#qq'

var hash = window.location.hash // '#qq'  

window.addEventListener('hashchange', function(){ 
    // 监听hash变化，点击浏览器的前进后退会触发
})
```

##### history模式

- history模式与hash模式的区别：
  1. 传参方式：
     1. hash模式实在url 地址栏传参 参数不易太多 
     2. history模式传参方式不仅可以在url地址栏传参还可以在一个特定的对象上传参。
  2. 跳转方式
     1. hash模式就是利用锚点功能进行跳转
     2. history模式是基于新增的pushState 和replaceStae 进行路由跳转
        1. pushState是在数组后面添加
        2. replaceState相当于redirect 重定向
        3. pushState、replaceState接受三个参数
           1. state：需要保存的数据
           2. title：标题
           3. url： 设定路径
     3. history 有向前向后 方法 back后退forword前进 go()会在函数里数字进行跳转几条历史记录负数的话就是后退
     4. history改变url地址会发生页面请求在服务端进行处理如果匹配不到静态资源则返回同一个html页面

##### npm 常用的一些命令

1. [npm install 安装模块](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-install)
2. [npm uninstall 卸载模块](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-uninstall)
3. [npm update 更新模块](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-update)
4. [npm outdated 检查模块是否已经过时](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-outdated)
5. [npm ls 查看安装的模块](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-ls)
6. [npm init 在项目中引导创建一个package.json文件](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-init)
7. [npm help 查看某条命令的详细帮助](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-help)
8. [npm root 查看包的安装路径](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-root)
9. [npm config 管理npm的配置路径](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-config)
10. [npm cache 管理模块的缓存](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-cache)
11. [npm start 启动模块](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-start)
12. [npm stop 停止模块](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-stop)
13. [npm restart 重新启动模块](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-restart)
14. [npm test 测试模块](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-test)
15. [npm version 查看模块版本](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-version)
16. [npm view 查看模块的注册信息](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-view)
17. [npm adduser 用户登录](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-adduser)
18. [npm publish 发布模块](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-publish)

##### 渐变的实现方式

###### 	  background-image: linear-gradient(to right, red , blue);

##### 让整个浏览器变成灰色

######  filter: grayscale(100%)

##### promise实现的三种方式

1. new promise
2. promise.reslove() ||promise.reject()
3. async awiet
4. promise.all 执行把所有的promise 组合成一个数组 一起执行 

##### promise链式调用的原理 

- 每次then里面也应该返回一个promise，如果不是的话应该用promise.reslove 把它转化成promise

##### 小程序的生命周期

1. onLaunch 进站时候触发一次
2. onshow  每次进页面都会触发的生命周期 合适在这里请求数据
3. onhied  隐藏的时候触发
4. onErroe错误监听函数
5. onPageNotFound 页面不存在时触发此函数

##### 小程序页面的生命周期

1. data：页面初始化数据
2. onLoad：监听页面的加载
3. onShow ：监听页面显示
4. onReady：监听页面初次渲染完成
5. onHide：监听页面的显示隐藏
6. onUnload：页面卸载的时候触发
7. onPullDown Refresh：监听下拉时触发
8. onReachBottom：监听上拉触发事件
9. onShareAppMessage：右上角转发触发此函数
10. onPageScroll：页面滚动触发事件
11. onTabItemTop：当前是tab页 的时候点击触发2

##### 微信路由跳转方式

1.   navigateTo: 追加，路由最多十层
2. redirectTo: 替换
3.  navigateBack: 返回
4.  reluanch：重新加载
5. switchTab: 切换tab

##### react生命周期

1. constructor 构造函数 可以继承父组件传入的属性 super继承关键字
2. componentWillMount 组件挂载之前
3. render   组件的渲染
4. componentDidMount 组件挂载完成之后
5. componentWillRecevieProps 父组件传入的值发生改变的时候触发  接受一个参数修改后的新值
6. shouldComponentUpdata 接受两个参数nextProps、nextState 是props、state修改之后的新数据
7. componentWillupdate 组件更新之前 接受两个参数 nextProps 、 nextState 修改完成的数据
8. componetDidUpdata 组件更之后 接受两个参数prevProps、prevState修改之前的数据
9. componentWillUnMount 组件销毁之前

##### react组件通信方式

1. 子父 props

2. 父子 回调函数

3. 跨组件  context

4. 本地存储 localStorage sessionStorage 

5. 状态管理仓库 redux

   - redux的三大属性 	actions 、reducer、createStore；

   1. redux中的state数据是只读的，只能通过触发action字段进行修改。
   2. reducer ：当触发actions的时候必须返回一个新的state来触发视图的更新，通过reducer来修改当前的state 接受两个参数 actions和state，最后返回一个新的state。
   
6. createStore做的事情

   1. 提供了getState方法获取state
   2. 提供dispatch方法更新state
   3. 通过subscribe注册监听器
   4. 通过subscribe返回的函数注销监听器。


##### vue的数据劫持

vue2：object.defineProperty:监听对象属性的变化

vue3：proxy

##### 在es5 之前数组去重的方法

1. 使用indexOf
2. 使用双重遍历对比来实现

##### es6常用的属性

1. promise
2. 箭头函数
3. async /await
4. let const 

##### 判断数组的方法

1. es6 方法 isArray
2. constructor指向构造函数
3. object.portotype.toString.call 可以拿到字符串

##### undefined和null的区别 

1. undefiined 定义变量没赋值
2. null定义对象 为空

##### js的运行机制、时间队列

联系到Eventloop，Eventloop把异步任务分为两大类（宏任务、微任务）执行的规律微任务跟在宏任务后面执行，当前宏任务的同步任务执行完毕之后，然后到微任务队列当中看有没有可执行的微任务，如果有的话就拿到微任务到执行栈里去执行，执行完毕之后，去读取消息队列（宏任务队列）消息队列里面存的就是宏任务的信息，有宏任务的话再去执行，然后去微任务队列里找微任务，依次循环。有异步的话会交给浏览器的一些支线执行监听在什么时候应该放到执行队列中。

##### react class和hooks 区别

hooks相对于class组件更轻量化，如果是面向对象编程的话申请的内存比较多，函数式组件直接执行，

不用考虑this指向的问题，this指向出问题会导致项目的崩溃、白屏。hooks不用考虑this指向的问题。

##### js的继承方式

1. 原型链继承

   1. 缺点新实例无法像父类构造函数传参
   2. 继承单一
   3. 所有实例都会共享父类实例的属性，原型的数据是共享的一个实例更改另一个实例也会被修改

2. 借用构造函数继承

   1. 只继承了父类构造函数的属性，没有继承父类原型的属性
   2. 可以向父类实例传参

3. 组合继承（组合原型链和借用构造函数继承）(常用)

   1. 结合两种模式的优点，传参和复用

   2. 可以继承父类原型上的属性，可以传参，可复用

   3. 每个新实例引入的构造函数的属性是私有的。

       x缺点：调用了两次父类构造函数（耗内存），子类的构造函数会替代原型上的那个父类构造函数。



