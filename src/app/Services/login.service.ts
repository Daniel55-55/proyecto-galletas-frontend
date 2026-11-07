import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private api = 'https://proyecto-galletas-backend-ap3b.vercel.app/api/v1';

  constructor(private http: HttpClient) {}

  login(usuario: string, contrasena: string): Observable<any> {
    return this.http.post<any>(`${this.api}/login`, { usuario, contrasena });
  }

  registrar(usuario: string, contrasena: string): Observable<any> {
    return this.http.post<any>(`${this.api}/registro`, { usuario, contrasena });
  }

  guardarSesion(usuario: string) {
    localStorage.setItem('usuario', usuario);
  }

  estaLogueado(): boolean {
    return !!localStorage.getItem('usuario');
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
  }
}
