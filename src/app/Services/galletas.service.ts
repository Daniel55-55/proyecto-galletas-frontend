import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GalletasService {
  private api = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) {}

  obtener(tipo: 'chocolate' | 'vainilla'): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/galletas-${tipo}`);
  }
}