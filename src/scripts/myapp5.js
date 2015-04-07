deck.on('activate', function(ev, el){
  if(ev.index == 15){
    console.clear();
    angular.bootstrap(angular.element('.myapp5'), ['myapp5']);
  }
});

angular.module('myapp5', ['ngRoute'])
  .controller('WorkersController', ['$scope', '$route' , function($scope, $route) {
    $scope.workers = [
        {name: "Homer", position: "Bezpečnostný technik"},
        {name: "Lenny", position: "Jadrový inžinier"},
        {name: "Carl", position: "Vedúci prevádzky"}
    ];
  }]);