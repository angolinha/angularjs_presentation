deck.on('activate', function(ev, el){
  if(ev.index == 7){
    console.clear();
    angular.bootstrap(angular.element('.myapp1'), ['myapp1']);
  }
});

angular.module('myapp1', ['ngRoute'])
  .controller('UserController', ['$scope', '$route', '$timeout', function($scope, $route) {
    $scope.username = "Homer Simpson";
  }]);
