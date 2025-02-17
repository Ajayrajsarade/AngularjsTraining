export class CartService {
    getCart(): any[] {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        return cart;
    }

    addToCart(product: any): void {
        let cart = this.getCart();
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}
