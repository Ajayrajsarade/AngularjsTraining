interface User {
    username: string;
    password: string;
}

app.service('AuthService', function (this: any) { // Explicitly define 'this'
    let self = this; // Workaround for 'this' context

    self.authenticate = function (user: User): boolean {
        return user.username === 'admin' && user.password === 'password';
    };
});