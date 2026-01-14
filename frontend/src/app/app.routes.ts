import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { Reservations } from './pages/reservations/reservations';
import { Tourist } from './pages/tourist/tourist';
import { Partner } from './pages/partner/partner';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'dashboard', component: Dashboard },
  { path: 'reservations', component: Reservations },
  { path: 'user/tourist/profile', component: Tourist },
  { path: 'user/partener/profilepartner', component: Partner },
  { path: 'reservations', component: Reservations },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
