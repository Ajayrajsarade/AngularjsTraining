var CartController = /** @class */ (function () {
    function CartController(CartService, AuthService) {
        this.CartService = CartService;
        this.AuthService = AuthService;
        this.cart = [];
    }
    CartController.prototype.$onInit = function () {
        this.cart = this.CartService.getCart();
    };
    CartController.prototype.logout = function () {
        this.AuthService.logout();
        window.location.href = '#/login';
    };
    return CartController;
}());
