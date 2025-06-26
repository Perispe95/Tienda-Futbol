import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LigasComponent } from './pages/ligas/ligas';
import { SeleccionesComponent } from './pages/selecciones/selecciones';
import { RetroComponent } from './pages/retro/retro';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ligas', component: LigasComponent },
  { path: 'selecciones', component: SeleccionesComponent },
  { path: 'retro', component: RetroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
