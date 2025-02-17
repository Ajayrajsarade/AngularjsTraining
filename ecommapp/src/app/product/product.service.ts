export class ProductService {
    getProducts(): any[] {
        return [
            { name: 'Monitor', price: 15000, image: 'monitor.jpg' },
            { name: 'Keyboard', price: 2000, image: 'keyboard.jpg' },
            { name: 'Laptop', price: 50000, image: 'laptop.jpg' },
            { name: 'Mouse', price: 1500, image: 'mouse.jpg' },
            { name: 'Headphones', price: 3500, image: 'headphones.jpg' },
            { name: 'Smartphone', price: 30000, image: 'smartphone.jpg' }
        ];
    }
}
