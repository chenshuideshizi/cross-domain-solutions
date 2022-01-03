
/**
 * 1. 启动 HTTP 服务
 */
 const path = require('path')
 const express=require('express');
 const app=express();
 const server = require('http').Server(app);
 
 app.use('/', express.static(__dirname + '/public'))

 
 
 // 2.监听端口
 server.listen(8002, function () {
     console.log('app run at http://127.0.0.1:8002')
 })
 
