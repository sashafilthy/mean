/**
 * Created by ifelsc on 9/18/2017.
 */
angular.module('app')
.controller('LoginCtrl', function($scope, UserSvc, $location, $route){
    $scope.login = function (username, password){
        UserSvc.login(username, password)
            .then(function(response){
                $scope.$emit('login', response.data);
                $location.path('/')
            })
    }
});