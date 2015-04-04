var helloWorld = angular.module('helloWorld', ['ngRoute']);

helloWorld.controller('UserController', ['$scope', '$route', function($scope, $route) {
  $scope.username2 = "Homer Simpson";
}]);