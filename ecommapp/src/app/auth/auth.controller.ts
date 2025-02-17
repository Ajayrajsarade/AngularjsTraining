import { AuthService } from './auth.service';  // Use alias instead of relative path

export class AuthController {
    username: string = '';
    password: string = '';
    errorMessage: string = '';

    constructor(private AuthService: AuthService) {}

    login(): void {
        if (this.AuthService.login(this.username, this.password)) {
            window.location.href = '#/products';
        } else {
            this.errorMessage = 'Invalid credentials';
        }
    }

    register(): void {
        const userData = { username: this.username, password: this.password };
        this.AuthService.register(userData);
        window.location.href = '#/login';
    }

    logout(): void {
        this.AuthService.logout();
        window.location.href = '#/login';
    }
}
