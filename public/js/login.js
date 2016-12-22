/**
 * Created by geoffbrown1 on 2/17/16.
 */
var app = angular.module('login', ['ngStorage']);
app.config(['$localStorageProvider',
    function ($localStorageProvider) {
        $localStorageProvider.setKeyPrefix('');
    }]);
app.controller('MainController', ['$timeout', '$localStorage', 'userService', '$http', function ($timeout, $localStorage, userService, $http) {
    // controller data and functions
    var vm = this;

    vm.login = function(user) {
        $http({
            method: 'POST',
            url: '/user/login',
            data: user
        })
            .then(
                function(success) {
                    $localStorage.user = success.data;
                },
                function(error) {
                    console.log(error);
                });
    };

    vm.create = function(user) {
        $http({
            method: 'POST',
            url: '/user/create',
            data: user
        })
            .then(
                function(success) {
                    $localStorage.user = success.data;
                },
                function(error) {
                    console.log(error);
                });
    };

}]);


