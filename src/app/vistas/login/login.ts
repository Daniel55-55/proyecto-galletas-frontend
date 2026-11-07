import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    ReactiveFormsModule,
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
  formulario: FormGroup;
  mensajeError = '';
  cargando = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  ingresar() {
    if (this.formulario.invalid) {
      return;
    }

    this.cargando = true;
    this.mensajeError = '';

    const { usuario, contrasena } = this.formulario.value;

    this.loginService.login(usuario, contrasena).subscribe({
      next: (respuesta) => {
        this.cargando = false;
        localStorage.setItem('usuario', usuario);
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.cargando = false;
        this.mensajeError =
          error.status === 401
            ? 'Usuario o contraseña incorrectos'
            : 'No se pudo conectar con el servidor';
      }
    });
  }
}
