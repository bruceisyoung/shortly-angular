//ToDo: figure out what $location means.
angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
  var isValidUrl = function(url) {
    return url.match(rValidUrl);
  }; 
  $scope.link = {};

  $scope.addLink = function() {
    $scope.isValid = '';
    if (isValidUrl($scope.newLink)) {
      $scope.link = $scope.newLink;
      Links.addOne({ url: $scope.link });
    } else {
      $scope.isValid = 'invalid URL';
    }
  };

  $scope.checkUrl = function() {
    if (!isValidUrl($scope.newLink)) {
      $scope.isValid = 'invalid URL';
    } else {
      $scope.isValid = '';
    }
  };
});



