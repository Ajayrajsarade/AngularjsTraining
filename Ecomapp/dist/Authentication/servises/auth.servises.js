
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.users = JSON.parse(localStorage.getItem("users") || "[]");
    }
    // login(email: string, password: string): any {
    //     return this.users.some(u => u.email === email && u.password === password) || null;
    // }
    AuthService.prototype.login = function (email, password) {
        var user = this.users.find(function (u) { return u.email === email && u.password === password; });
        return user || null;
    };
    AuthService.prototype.register = function (user) {
        if (!user.name || !user.email || !user.password) {
            return "All fields are required!";
        }
        if (this.users.some(function (u) { return u.email === user.email; })) {
            return "User already exists! Please login.";
        }
        user.id = Date.now();
        user.cart = [];
        this.users.push(user);
        localStorage.setItem("users", JSON.stringify(this.users));
        return "Registration successful!";
    };
    return AuthService;
}());

angular.module('ecomApp').service('AuthService', AuthService);
