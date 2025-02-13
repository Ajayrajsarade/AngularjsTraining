"use strict";
app.controller('ProductController', function ($scope, ProductService) {
    $scope.products = ProductService.getProducts();
});
