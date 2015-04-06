deck.on('activate', function(ev, el){
  if(ev.index == 12){
    console.clear();
    angular.bootstrap(angular.element('.myapp4'), ['myapp4']);
  }
});

angular.module('myapp4', ['ngRoute'])
  .controller('App4Controller', ['$scope', '$route' , function($scope, $route) {
    $scope.workers = ['Homer','Lenny','Carl'];
  }]);