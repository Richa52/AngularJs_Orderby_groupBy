var app = angular.module('myApp', ['angular.filter']);
app.controller('myCtrl', ['$scope', function($scope) {
  $scope.ourGrouper = 'color';
  $scope.cars = [{
    "carid": 1,
    "DueDate": "08/22/2017",
    "carname": 'camry',
     "docketNumber": "0000.7090000",
    "color": 'red'
  }, {
    "carid": 2,
    "DueDate":"08/24/2017",
    "carname": 'mustang',
     "docketNumber": "0000.8090000",
    "color": 'red'
  }, {
    "carid": 3,
    "DueDate": "07/22/2016",
    "carname": 'landcruiser',
     "docketNumber": "2569.9090000",
    "color": 'yellow'
  }, {
    "carid": 4,
    "DueDate": "06/22/2015",
    "carname": 'focus',
     "docketNumber": "1526.7090000",
    "color": 'blue'
  }, {
    "carid": 5,
    "DueDate": "09/30/2017",
    "carname": 'civic',
     "docketNumber": "4895.7090000",
    "color": 'blue'
  }];
}]);
