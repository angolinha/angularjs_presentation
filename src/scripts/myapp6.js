deck.on('activate', function(ev, el){
  if(ev.index == 16){
    console.clear();
    angular.bootstrap(angular.element('.myapp6'), ['myapp6']);
  }
});

angular.module('myapp6', ['ngRoute'])
  .controller('App6Controller', ['$scope', '$route', 'workersFactory', function($scope, $route, workersFactory)  {
    $scope.workers = workersFactory.getWorkers();
  }]).factory('workersFactory', function() {
    return {
      getWorkers: function() {
        return ["Carl", "Homer", "Lenny"];
      }
    }
  });