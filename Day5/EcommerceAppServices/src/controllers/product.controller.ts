app.controller('ProductController', function($scope, $location) {
    $scope.products = [
        { name: 'Laptop', price: 800 },
        { name: 'Phone', price: 500 },
        { name: 'Tablet', price: 300 }
    ];

    $scope.cart = [];

    $scope.addToCart = function(product: { name: string; }) {
        $scope.cart.push(product);
        alert(product.name + " added to cart!");
    };

    $scope.goToCart = function() {
        $location.path('/shoppingcart');
    };
});
