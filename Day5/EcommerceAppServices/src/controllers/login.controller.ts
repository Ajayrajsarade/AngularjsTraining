app.controller('LoginController', function($scope, $location) {
    $scope.login = function() {
        if ($scope.username && $scope.password) {
            $location.path('/products');
        } else {
            alert("Invalid credentials!");
        }
    };
});
