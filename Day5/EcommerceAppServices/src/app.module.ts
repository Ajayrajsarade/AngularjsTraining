var app = angular.module('ecommerceApp', ['ngRoute']);

app.config(function($routeProvider: { when: (arg0: string, arg1: { templateUrl: string; controller: string; }) => { (): any; new(): any; when: { (arg0: string, arg1: { templateUrl: string; controller: string; }): { (): any; new(): any; when: { (arg0: string, arg1: { templateUrl: string; controller: string; }): { (): any; new(): any; otherwise: { (arg0: { redirectTo: string; }): void; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) {
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
