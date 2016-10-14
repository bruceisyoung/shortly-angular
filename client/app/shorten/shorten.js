//ToDo: figure out what $location means.
angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(data) {
    Links.addOne(data);
  };



});
