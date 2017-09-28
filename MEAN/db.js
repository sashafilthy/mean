/**
 * Created by ifelsc on 9/8/2017.
 */
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/social', function(){
    console.log('mongodb connected')
})
module.exports = mongoose