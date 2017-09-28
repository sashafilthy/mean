/**
 * Created by ifelsc on 9/14/2017.
 */
var Post = require('../../models/post');
var router = require('express').Router();
//var websockets = require('../../websockets')

//get the posts from the database
router.get('/', function (req,res,next){
    Post.find()
        //sort them newest on the top
        .sort('-date')
        .exec(function (err, posts) {
            if (err) { return next(err) }
            res.json(posts)
        })
});

//post new posts to the database
router.post('/', function (req,res,next){
    //create the object
    var post = new Post({body: req.body.body});
    post.username =  req.auth.username;
    
    //save it to the db
    post.save(function (err, post) {
        if (err) {
            return next(err)
        }
        //websockets.broadcast("new_post", post);
        res.status(201).json(post)
    })
});


module.exports = router;