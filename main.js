var express = require('express');
var app = express();
const path = require('path');
app.use('/static',express.static(path.join(__dirname,'public')));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});// 显示html页面

var server = app.listen(8080, function () {
   var host = server.address().address;
   var port = server.address().port;
  //  服务器IP地址为127.0.0.1 端口为8888
   console.log( "server is running"+host+port);
 });

