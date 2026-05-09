import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { RegisterRequest } from '../../interfaces/auth/register-request';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  registroForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    apellido: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.minLength(7)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }

    const password = this.registroForm.value.password ?? '';
    const confirmPassword = this.registroForm.value.confirmPassword ?? '';

    if (password !== confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    this.isLoading = true;

    const registerData: RegisterRequest = {
      nombre: this.registroForm.value.nombre ?? '',
      apellido: this.registroForm.value.apellido ?? '',
      email: this.registroForm.value.email ?? '',
      telefono: this.registroForm.value.telefono ?? '',
      password: password
    };

    this.authService.register(registerData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.successMessage = response.mensaje || 'Cuenta creada correctamente.';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1200);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage =
          error?.error?.message || 'No se pudo completar el registro.';
      }
    });
  }

  get nombre() {
    return this.registroForm.get('nombre');
  }

  get apellido() {
    return this.registroForm.get('apellido');
  }

  get email() {
    return this.registroForm.get('email');
  }

  get telefono() {
    return this.registroForm.get('telefono');
  }

  get password() {
    return this.registroForm.get('password');
  }

  get confirmPassword() {
    return this.registroForm.get('confirmPassword');
  }
}
