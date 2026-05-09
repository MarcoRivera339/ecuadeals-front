import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { LoginRequest } from '../../interfaces/auth/login-request';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoading = false;
  errorMessage = '';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit(): void {
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    const loginData: LoginRequest = {
      email: this.loginForm.value.email ?? '',
      password: this.loginForm.value.password ?? ''
    };

    this.authService.login(loginData).subscribe({
      next: (response) => {
        this.isLoading = false;

        if (response.rol === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (response.rol === 'VENDEDOR') {
          this.router.navigate(['/vendedor']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage =
          error?.error?.message || 'Credenciales incorrectas o error del servidor.';
      }
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
