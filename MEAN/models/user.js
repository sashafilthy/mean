/**
 * Created by ifelsc on 9/18/2017.
 */
var db = require('../db');
//create the User model
var user = db.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true, select: false} //false is password isnt sent to client
})


module.exports = db.model('User', user);