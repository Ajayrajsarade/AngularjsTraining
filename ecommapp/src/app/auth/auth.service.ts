export class AuthService {
    isLoggedIn(): boolean {
        return localStorage.getItem('loggedIn') === 'true';
    }

    login(username: string, password: string): boolean {
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('loggedIn', 'true');
            return true;
        }
        return false;
    }

    register(userData: { username: string, password: string }): void {
        // You can implement a more complex registration system here.
        // For now, just storing the user in local storage.
        localStorage.setItem('user', JSON.stringify(userData));
    }

    logout(): void {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('user');
    }
}
