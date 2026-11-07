import { Routes } from '@angular/router';

import { GalletasChocolate } from './vistas/galletas-chocolate/galletas-chocolate';
import { GalletasVainilla } from './vistas/galletas-vainilla/galletas-vainilla';
import { Login } from './vistas/login/login';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'galletas-chocolate',
    pathMatch: 'full'
  },
  {
    path: 'galletas-chocolate',
    component: GalletasChocolate
  },
  {
    path: 'galletas-vainilla',
    component: GalletasVainilla
  }
    {
    path: 'login',
    component: Login
  }
];
