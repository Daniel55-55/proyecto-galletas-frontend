import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    ReactiveFormsModule,
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
  formulario: FormGroup;
  mensajeError = '';
  cargando = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.formulario = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registrar() {
    if (this.formulario.invalid) {
      return;
    }

    this.cargando = true;
    this.mensajeError = '';

    const { usuario, contrasena } = this.formulario.value;

    this.loginService.registrar(usuario, contrasena).subscribe({
      next: () => {
        this.cargando = false;
        this.snackBar.open('Usuario registrado. Ahora inicia sesión', 'Cerrar', { duration: 4000 });
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.cargando = false;
        this.mensajeError = error.error?.message ?? 'No se pudo conectar con el servidor';
      }
    });
  }
}
