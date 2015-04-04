deck.on('activate', function(ev, el){
  if(ev.index == 7){
    console.clear();
    angular.bootstrap(angular.element('.myapp2'), ['myapp2']);
  }
});

angular.module('myapp2', ['ngRoute'])
  .controller('UserController', ['$scope', '$route', '$timeout', function($scope, $route, $timeout) {
    $timeout(function() {
      $scope.username = "Charles Montgomery Burns";
    }, 3000);
  }]);
