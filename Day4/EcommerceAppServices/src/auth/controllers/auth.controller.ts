app.controller('LoginController', function($scope, $location, AuthService) {
    $scope.user = {};

    $scope.login = function() {
        if (AuthService.authenticate($scope.user)) {
            $location.path('/products'); // Redirect to products after login
        } else {
            $scope.errorMessage = "Invalid credentials!";
        }
    };
});
