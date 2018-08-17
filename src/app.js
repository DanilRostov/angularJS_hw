const app = angular.module('myApp', []);

app.controller('MainCtrl', actionsForBtns);

app.directive('container', function () {
  return {
    restrict: 'EA',
    controllerAs: 'container',
    controller: actionsForBtns
  }
});

app.directive('myButton', function () {
  return {
    restrict: 'EA',
    scope: {
      text: '@'
    },
    replace: true,
    template: '<button>{{text}}</button>',
  }
});

function actionsForBtns() {
  this.clickGreen = function () {
    alert('clickGreen');
  };
  this.click1Red = function () {
    alert('clickRed');
  };
  this.click1Blue = function () {
    alert('clickBlue');
  };
  this.click1Yellow = function () {
    alert('click1Yellow');
  };
  this.click1Grey = function () {
    alert('click1Grey');
  };
}