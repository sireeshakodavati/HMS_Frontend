import { Injectable } from '@angular/core';
import { JwtclientService } from './jwtclient.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtService: JwtclientService, private router: Router) {}

  login(username: string, password: string): void {
    this.jwtService.getDoctorGeneratedToken({ username, password }).subscribe(
      (token: string) => {
        this.jwtService.storeToken(token);
        this.router.navigate(['/doctordashboard']);
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle error appropriately, e.g., show a user-friendly error message
      }
    );
  }

  logout(): void {
    this.jwtService.clearToken();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!this.jwtService.getToken();
  }
}
