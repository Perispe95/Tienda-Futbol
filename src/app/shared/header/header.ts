import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../carrito';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  nombreUsuario: string | null = null;  // <-- Declara la variable

  logueado = localStorage.getItem('logueado') === 'true';

  constructor(public carritoService: CarritoService) {
    this.nombreUsuario = localStorage.getItem('nombreUsuario');  // <-- Asignación correcta
  }

  toggleCarrito() {
    this.carritoService.toggleCarrito();
  }

  logout() {
    localStorage.removeItem('logueado');
    localStorage.removeItem('nombreUsuario'); 
    alert('Sesión cerrada');
    window.location.reload();
  }
}