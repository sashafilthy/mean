/**
 * Created by ifelsc on 9/18/2017.
 */
angular.module('app')
    .service('UserSvc', function ($http){
        var svc = this
        svc.getUser = function (){
            return $http.get('/api/users')
            }
        svc.login = function (username, password){
            return $http.post('/api/sessions', {
                username: username, password: password
            }).then(function (val){
                window.localStorage.token = val.data
                $http.defaults.headers.common['X-Auth'] = val.data
                return svc.getUser()
            })
        }
        svc.logOut = function (){
            delete window.localStorage.token;
            
        }
        svc.register = function(username, password){
            return $http.post('/api/users', {
                username: username, password: password})
                .then(function() {
                })
        }
        
});
