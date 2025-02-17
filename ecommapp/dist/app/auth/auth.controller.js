var AuthController = /** @class */ (function () {
    function AuthController(AuthService) {
        this.AuthService = AuthService;
        this.username = '';
        this.password = '';
        this.errorMessage = '';
    }
    AuthController.prototype.login = function () {
        if (this.AuthService.login(this.username, this.password)) {
            window.location.href = '#/products';
        }
        else {
            this.errorMessage = 'Invalid credentials';
        }
    };
    AuthController.prototype.register = function () {
        var userData = { username: this.username, password: this.password };
        this.AuthService.register(userData);
        window.location.href = '#/login';
    };
    AuthController.prototype.logout = function () {
        this.AuthService.logout();
        window.location.href = '#/login';
    };
    return AuthController;
}());
