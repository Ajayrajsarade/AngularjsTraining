"use strict";
var app = angular.module('ecommerceApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    })
        .when('/products', {
        templateUrl: 'views/product.html',
        controller: 'ProductController'
    })
        .when('/shoppingcart', {
        templateUrl: 'views/shoppingcart.html',
        controller: 'ShoppingCartController'
    })
        .otherwise({
        redirectTo: '/'
    });
});
