# 每天学习了什么？

### 	4-15 ~ react+flexible适配移动端项目的配置

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

```
引入
	再次之前要执行 npm run eject

 const px2rem = require('postcss-px2rem');
 px2rem({ remUnit: 75 })
```

![](C:\Users\86152\Desktop\meiliancheng\asstes\2019030814224680.png)

![](C:\Users\86152\Desktop\meiliancheng\asstes\20190308142221137.png)

![](C:\Users\86152\Desktop\meiliancheng\asstes\20190308142358162.png)

#### 5. 引入 lib-flexible，在项目入口文件 index.js 里 引入 lib-flexible

```
import 'lib-flexible'
```

![](C:\Users\86152\Desktop\meiliancheng\asstes\20190308142625125.png)

#### 6.重新启动下项目完成配置