import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './registro.html',
  styleUrl: '../login/login.css'
})
export class Registro {
  usuario = '';
  contrasena = '';
  mensajeError = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  registrar() {
    if (this.usuario.trim().length < 4) {
      this.mensajeError = 'El usuario debe tener mínimo 4 caracteres';
      return;
    }
    if (this.usuario.includes(' ')) {
      this.mensajeError = 'El usuario no puede tener espacios';
      return;
    }
    if (this.contrasena.length < 6) {
      this.mensajeError = 'La contraseña debe tener mínimo 6 caracteres';
      return;
    }
    if (!/[a-zA-Z]/.test(this.contrasena) || !/[0-9]/.test(this.contrasena)) {
      this.mensajeError = 'La contraseña debe tener al menos una letra y un número';
      return;
    }

    this.loginService.registrar(this.usuario, this.contrasena).subscribe({
      next: () => {
        this.snackBar.open('Usuario registrado. Ahora inicia sesión', 'Cerrar', { duration: 4000 });
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.mensajeError = error.error?.message ?? 'No se pudo conectar con el servidor';
      }
    });
  }
}
