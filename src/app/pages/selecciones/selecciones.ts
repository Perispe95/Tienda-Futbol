import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../shared/carrito';


type CarritoProducto = {
  nombre: string;
  precio: number;
  cantidad: number;
};

@Component({
  selector: 'app-selecciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selecciones.html',
  styleUrls: ['./selecciones.css']
})
export class SeleccionesComponent {
  productos = [
    { nombre: 'España Euro 2024', precio: 29.99, imagen: 'espana.jpg' },
    { nombre: 'Argentina Campeón del Mundo 2022', precio: 32.99, imagen: 'argentina.png' },
    { nombre: 'Francia Euro 2024', precio: 30.50, imagen: 'francia.jpeg' }
  ];

  constructor(private carritoService: CarritoService) {}

  anadirAlCarrito(producto: { nombre: string; precio: number; }) {
    const p: CarritoProducto = {
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1
    };
    this.carritoService.añadirProducto(p);
    this.carritoService.toggleCarrito();
  }

}
