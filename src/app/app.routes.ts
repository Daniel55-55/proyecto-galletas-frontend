import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';
import { Login } from './vistas/login/login';
import { Registro } from './vistas/registro/registro';
import { GalletasTodas } from './vistas/galletas-todas/galletas-todas';
import { GalletasChocolate } from './vistas/galletas-chocolate/galletas-chocolate';
import { GalletasVainilla } from './vistas/galletas-vainilla/galletas-vainilla';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'galletas-todas', component: GalletasTodas, canActivate: [authGuard] },
  { path: 'galletas-chocolate', component: GalletasChocolate, canActivate: [authGuard] },
  { path: 'galletas-vainilla', component: GalletasVainilla, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
