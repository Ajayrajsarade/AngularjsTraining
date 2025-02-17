"use strict";
app.controller('ShoppingCartController', function ($scope) {
    $scope.cart = []; // Ideally, this should be a shared service for persistence.
    $scope.removeItem = function (index) {
        $scope.cart.splice(index, 1);
    };
});
