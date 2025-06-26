import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CarritoComponent } from './components/carrito/carrito';
import { NavbarCategoriasComponent } from './shared/navbar/navbar';
import { HeaderComponent } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { RegisterComponent } from './pages/register/register';
import { LoginComponent } from './pages/login/login';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    NavbarCategoriasComponent,
    HeaderComponent,
    Footer,
    CarritoComponent,
    RegisterComponent,
    LoginComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
