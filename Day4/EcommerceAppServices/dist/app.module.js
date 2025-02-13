
var app = angular.module('ecommerceApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'view/login.html',
        controller: 'LoginController'
    })
        .when('/products', {
        templateUrl: 'view/product.html',
        controller: 'ProductController'
    })
        .otherwise({
        redirectTo: '/'
    });
});
