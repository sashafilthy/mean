/**
 * Created by ifelsc on 9/4/2017.
 */
var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Server Up and Running on" );
    response.end();
}).listen(3000);