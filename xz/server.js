const express=require('express');
const bodyParser=require('body-parser');
//引入用户路由器
var userRouter=require('./router/user.js');
//引入商品路由器
var productRouter=require('./router/product.js');


//创建服务器
var server=express();
server.listen(8080);

//使用body-parser获取post请求数据

server.use(bodyParser.urlencoded({
	extends:false
}));


//托管静态资源
server.use(express.static('./public'));

//挂载路由器至/user下
server.use('/user',userRouter);
//挂载路由器至/product下
server.use('/product',productRouter)









