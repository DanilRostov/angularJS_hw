const app = angular.module('myApp', []);

app.controller('MainCtrl', actionsForBtns);
app.controller('titleCtrl', function() {
  this.text = 'Please pick your favourite calour';
})

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
  this.clickGreen = function (id) {
    document.getElementById(id).style.background = 'lightgreen';
  };
  this.clickRed = function (id) {
    document.getElementById(id).style.background = 'red';
  };
  this.clickBlue = function (id) {
    document.getElementById(id).style.background = 'blue';
  };
  this.click1Yellow = function (id) {
    document.getElementById(id).style.background = 'yellow';
  };
  this.click1Grey = function (id) {
    document.getElementById(id).style.background = 'grey';
  };
}