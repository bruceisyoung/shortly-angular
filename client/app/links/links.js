angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getAll = function() {
    Links.getAll()
      .then(function(links) {
        $scope.data['links'] = links;
      });
  };

  $scope.linkClicked = function(link) {
    Links.linkClicked(link);
  };

  $scope.getAll();
});
