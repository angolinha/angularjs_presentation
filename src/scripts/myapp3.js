deck.on('activate', function(ev, el){
  if(ev.index == 9){
    console.clear();
    angular.bootstrap(angular.element('.myapp3'), ['myapp3']);
  }
});

angular.module('myapp3', ['ngRoute'])
  .controller('UserController', ['$scope', '$route' , function($scope, $route) {
    $scope.setUsername = function(username){
      $scope.username = username ? username : "Lisa";
    }
  }]);