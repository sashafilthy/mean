/**
 * Created by ifelsc on 9/16/2017.
 */
angular.module('app')
    .service('PostsSvc', function($http){
    this.fetch = function() {
        return $http.get('http://localhost:3002/api/posts')
    };
    this.create = function(post){
        return $http.post('/api/posts', post)
    }
});