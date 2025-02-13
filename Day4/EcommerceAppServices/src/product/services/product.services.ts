app.service('ProductService', function (this: any) { // Explicitly define 'this'
    let self = this; // Workaround for 'this' context

    self.getProducts = function () {
        return [
            { name: 'Laptop', price: 800 },
            { name: 'Phone', price: 500 },
            { name: 'Tablet', price: 300 }
        ];
    };
});