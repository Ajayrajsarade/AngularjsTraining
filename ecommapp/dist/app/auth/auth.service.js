var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('loggedIn') === 'true';
    };
    AuthService.prototype.login = function (username, password) {
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('loggedIn', 'true');
            return true;
        }
        return false;
    };
    AuthService.prototype.register = function (userData) {
        // You can implement a more complex registration system here.
        // For now, just storing the user in local storage.
        localStorage.setItem('user', JSON.stringify(userData));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('user');
    };
    return AuthService;
}());
