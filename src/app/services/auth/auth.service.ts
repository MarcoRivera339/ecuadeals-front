import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { LoginRequest } from '../../interfaces/auth/login-request';
import { LoginResponse } from '../../interfaces/auth/login-response';
import { RegisterRequest } from '../../interfaces/auth/register-request';
import { RegisterResponse } from '../../interfaces/auth/register-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/auth';

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl + '/login', data).pipe(
      map((response: LoginResponse) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('rol', response.rol);
        localStorage.setItem('usuario', JSON.stringify(response));
        return response;
      })
    );
  }

  register(data: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.apiUrl + '/register', data).pipe(
      map((response: RegisterResponse) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('rol', response.rol);
          localStorage.setItem('usuario', JSON.stringify(response));
        }
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('usuario');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRol(): string | null {
    return localStorage.getItem('rol');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
