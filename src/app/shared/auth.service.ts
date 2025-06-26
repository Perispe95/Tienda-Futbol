import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly KEY = 'usuarioLogueado';

  login(email: string, password: string): boolean {
    const user = localStorage.getItem(email);
    if (!user) return false;

    const data = JSON.parse(user);
    if (data.password === password) {
      localStorage.setItem(this.KEY, email);
      return true;
    }

    return false;
  }

  register(email: string, password: string): boolean {
    if (localStorage.getItem(email)) return false;

    localStorage.setItem(email, JSON.stringify({ email, password }));
    localStorage.setItem(this.KEY, email);
    return true;
  }

  logout() {
    localStorage.removeItem(this.KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.KEY);
  }

  getUserEmail(): string | null {
    return localStorage.getItem(this.KEY);
  }
}
