// import * as angular from 'angular';
// import 'angular-route';

// import { ProductController } from './app/product/product.controller';
// import { ProductService } from './app/product/product.service';
// import { AuthController } from './app/auth/auth.controller';
// import { AuthService } from './app/auth/auth.service';
// import { CartController } from './app/cart/cart.controller';
// import { CartService } from './app/cart/cart.service';

// angular.module('ecommapp', ['ngRoute'])  
// .config(['$routeProvider', ($routeProvider:any) => {
//     $routeProvider
//         .when('/login', {
//             templateUrl: 'src/app/auth/login.html',
//             controller: 'AuthController as authCtrl'
//         })
//         .when('/register', {
//             templateUrl: 'src/app/auth/register.html',
//             controller: 'AuthController as authCtrl'
//         })
//         .when('/products', {
//             templateUrl: 'src/app/product/product.html',
//             controller: 'ProductController as productCtrl',
//             resolve: {
//                 isAuthenticated: ($q: { defer: () => any; }, $location: { path: (arg0: string) => void; }, AuthService: { isAuthenticated: () => any; }) => {
//                     const deferred = $q.defer();
//                     if (AuthService.isAuthenticated()) {
//                         deferred.resolve();
//                     } else {
//                         $location.path('/login');
//                         deferred.reject();
//                     }
//                     return deferred.promise;
//                 }
//             }
//         })
//         .when('/cart', {
//             templateUrl: 'src/app/cart/cart.html',
//             controller: 'CartController as cartCtrl'
//         })
//         .otherwise({
//             redirectTo: '/login'
//         });
// }])
// .controller('ProductController', ProductController)
// .controller('AuthController', AuthController)
// .controller('CartController', CartController)
// .service('ProductService', ProductService)
// .service('AuthService', AuthService)
// .service('CartService', CartService);

import * as angular from 'angular';
import 'angular-route';

import { AuthController } from './app/auth/auth.controller';
import { AuthService } from './app/auth/auth.service';
import { ProductController } from './app/product/product.controller';
import { ProductService } from './app/product/product.service';
import { CartController } from './app/cart/cart.controller';
import { CartService } from './app/cart/cart.service';

const app = angular.module('ECommApp', ['ngRoute']);

app.controller('AuthController', AuthController);
app.service('AuthService', AuthService);

app.controller('ProductController', ProductController);
app.service('ProductService', ProductService);

app.controller('CartController', CartController);
app.service('CartService', CartService);

app.config(['$routeProvider', ($routeProvider:any) => {
        $routeProvider
            .when('/login', {
                templateUrl: 'src/app/auth/login.html',
                controller: 'AuthController',
                controllerAs: 'authCtrl'
            })
            .when('/register', {
                templateUrl: 'src/app/auth/register.html',
                controller: 'AuthController',
                controllerAs: 'authCtrl'
            })
            .when('/products', {
                templateUrl: 'src/app/product/product.html',
                controller: 'ProductController',
                controllerAs: 'productCtrl'
            })
            .when('/cart', {
                templateUrl: 'src/app/cart/cart.html',
                controller: 'CartController',
                controllerAs: 'cartCtrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }
]);

export default app;
