import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
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
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  usuario = '';
  contrasena = '';
  mensajeError = '';

  constructor(private loginService: LoginService, private router: Router) {
    if (this.loginService.estaLogueado()) {
      this.router.navigate(['/galletas-todas']);
    }
  }

  ingresar() {
    this.mensajeError = '';

    if (!this.usuario.trim() || !this.contrasena) {
      return;
    }

    this.loginService.login(this.usuario, this.contrasena).subscribe({
      next: (respuesta) => {
        this.loginService.guardarSesion(respuesta.usuario);
        this.router.navigate(['/galletas-todas']);
      },
      error: (error) => {
        this.mensajeError =
          error.status === 401
            ? 'Usuario o contraseña incorrectos'
            : 'No se pudo conectar con el servidor';
      }
    });
  }
}
