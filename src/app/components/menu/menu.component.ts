import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterLink,
    RouterOutlet
  ]
})
export class MenuComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  estaLogueado(): boolean {
    return this.loginService.estaLogueado();
  }

  cerrarSesion() {
    this.loginService.cerrarSesion();
    this.router.navigate(['/login']);
  }
}
