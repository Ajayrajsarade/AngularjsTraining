import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
// Import the CartService class

export class ProductController {
    products: any[] = [];
    cart: any[] = [];

    constructor(private ProductService: ProductService, private CartService: CartService) {}

    $onInit(): void {
        this.products = this.ProductService.getProducts();
        this.cart = this.CartService.getCart();
    }

    addToCart(product: any): void {
        this.CartService.addToCart(product);
    }
}
