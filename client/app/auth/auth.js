// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.isValid = '';

  $scope.signin = function () {
    if ($scope.isValidUsername()) {
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          $scope.isValid = 'Invalid Username or Password';
          console.error(error);
        });
    } else {
      $scope.isValid = 'Invalid Username or Password';
    }

  };

  $scope.signup = function () {
    if ($scope.isValidUsername() && $scope.isValidPassword()) {
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      $scope.isValid = 'Invalid Username or Password';
    }
  };

  $scope.isValidUsername = function() {
    return !$scope.user.username.match(/\W/);
  };

  $scope.isValidPassword = function() {
    return !$scope.user.password.match(/\W/);
  };
});