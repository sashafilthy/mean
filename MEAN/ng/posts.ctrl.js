/**
 * Created by ifelsc on 9/16/2017.
 */
angular.module('app')
    .controller('PostsCtrl', function ($scope,PostsSvc) {
        //delete a post
        $scope.deletePost = function () {
            
            console.log("trying to delete a post");
            
        };
        
        //add a post
    $scope.addPost = function () {
        //make it so the field cannot be submitted if it is blank
        if ($scope.postBody && window.localStorage.token) {
            //save post to the API
            PostsSvc.create({
                
                body: $scope.postBody
            }).success(function (post){
                //add new posts to the top of the list
                $scope.posts.unshift(post); //To add posts normally, not from websockets
                //reset the field back to blank after submitting
                $scope.postBody = null
                console.log(window.localStorage.token);
                console.log(post._id)
                console.log(post.body);
                $scope.msg = "Success"
            })
        }
        else if(!window.localStorage.token && !$scope.postBody){
            $scope.msg = "You must log in to post!"
        }
        else if(window.localStorage.token && !$scope.postBody){
            $scope.msg = "Please fill out the body!"
        }
        else {
            $scope.msg = "You must log in to post!"
        }
    };

    //set the content of the posts
    PostsSvc.fetch().success(function (posts){
        $scope.posts = posts
    })
//when the websocket listens to a new post event, post that even into the page
       //$scope.$on('ws:new_post', function (_,post){
         //   $scope.$apply(function(){
           //     $scope.posts.unshift(post)
            //})
        //})
        

});