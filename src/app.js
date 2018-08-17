const app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.someText = 'Btn';
});

app.directive('myButton', function() {
  return {
    restrict: 'E',
    scope: {
      text: '@',
      onClick: '@onClick'
    },
    replace: true,
    template: '<button ng-click={{onClick()}}>{{text}}</button>',
    link: function (scope, element, attr) { 
      scope.click1 = function() {
        alert('hello');
      }
    }
  }
})