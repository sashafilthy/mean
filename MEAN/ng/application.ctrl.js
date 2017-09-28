/**
 * Created by ifelsc on 9/18/2017.
 */
angular.module('app')
.controller('ApplicationCtrl', function($scope, UserSvc, $http){
    $scope.$on('login', function (_,user){
        $scope.currentUser = user
    })
    
    $http.defaults.headers.common['X-Auth'] = window.localStorage.token;
    UserSvc.getUser().then(function(res){
        $scope.currentUser = res.data;
    });

    $scope.logOut = function (){
        $scope.currentUser = ""
        UserSvc.logOut();
    }
    
    
})