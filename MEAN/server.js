/**
 * Created by ifelsc on 9/4/2017.
 */
var express = require('express');
var app = express();

app.use(require('./controllers'))
//call to the middleware that attaches auth object to login requests
//app.use(require('./auth'));
//call to use the static file for serving the posts file on Node 3000
//app.use(require('./controllers/static'));
//call to the APIs for get and post
//app.use('/api/posts',require('./controllers/api/posts'));
//open the server on port 3000
//call to the sessions API for login
//app.use('/api/sessions', require('./controllers/api/sessions'));
//call to the users API for login
//app.use('/api/users', require('./controllers/api/users'));

var port = process.env.PORT || 3002;
var server = app.listen(port, function(){
    console.log('Server', process.pid, 'listening on', port)
})
//require('./websockets').connect(server);