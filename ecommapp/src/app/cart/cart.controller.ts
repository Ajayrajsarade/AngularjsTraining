import { CartService } from './cart.service';  // Import the CartService class
import { AuthService } from '../auth/auth.service';
export class CartController {
    cart: any[] = [];

    constructor(private CartService: CartService, private AuthService: AuthService) {}

    $onInit(): void {
        this.cart = this.CartService.getCart();
    }

    logout(): void {
        this.AuthService.logout();
        window.location.href = '#/login';
    }
}
