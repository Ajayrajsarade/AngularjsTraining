// Import the CartService class
var ProductController = /** @class */ (function () {
    function ProductController(ProductService, CartService) {
        this.ProductService = ProductService;
        this.CartService = CartService;
        this.products = [];
        this.cart = [];
    }
    ProductController.prototype.$onInit = function () {
        this.products = this.ProductService.getProducts();
        this.cart = this.CartService.getCart();
    };
    ProductController.prototype.addToCart = function (product) {
        this.CartService.addToCart(product);
    };
    return ProductController;
}());
