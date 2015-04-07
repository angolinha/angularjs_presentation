deck.on('activate', function(ev, el){
  if(ev.index == 15){
    console.clear();
    angular.bootstrap(angular.element('.myapp7'), ['myapp7']);
  }
});

angular.module('myapp7', ['ngRoute'])
    .controller('DirectiveController', ['$scope', '$route' , function($scope, $route) {

    }])
    .directive('ngDatepicker', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
             link: function (scope, element, attrs, ngModelCtrl) {
                $(element).datepicker({
                    viewMode: 'years',
                    format: ' yyyy',
                    minViewMode: "years"
                });
            }
        };
    });