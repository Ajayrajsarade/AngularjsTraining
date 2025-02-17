var CartService = /** @class */ (function () {
    function CartService() {
    }
    CartService.prototype.getCart = function () {
        var cart = JSON.parse(localStorage.getItem('cart') || '[]');
        return cart;
    };
    CartService.prototype.addToCart = function (product) {
        var cart = this.getCart();
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    };
    return CartService;
}());
