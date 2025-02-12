
var app = angular.module("ecommerceApp", []);
app.controller("LoginController", function ($scope) {

    $scope.onValidate = function () {
        if ($scope.user.email === "Ajay.sarade@gmail.com" && $scope.user.password === "Ajay") {
            alert("Login successful! Welcome.");
            window.location.href = "list.html";
        } else {
           alert("Invalid email or password. Try again.");
        }
    };
});