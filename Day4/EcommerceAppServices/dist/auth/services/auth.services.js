"use strict";
app.service('AuthService', function () {
    var self = this; // Workaround for 'this' context
    self.authenticate = function (user) {
        return user.username === 'admin' && user.password === 'password';
    };
});
