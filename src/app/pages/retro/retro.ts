import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../shared/carrito';


type CarritoProducto = {
  nombre: string;
  precio: number;
  cantidad: number;
};

@Component({
  selector: 'app-retro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './retro.html',
  styleUrls: ['./retro.css']
})
export class RetroComponent {
  productos = [
    { nombre: 'Retro Argentina 1986', precio: 34.99, imagen: 'argentinaAntigua.webp' },
    { nombre: 'Retro Francia 1998', precio: 32.99, imagen: 'franciaAntigua.jpeg' },
    { nombre: 'Retro Brasil 2002', precio: 31.50, imagen: 'brasil.jpeg' }
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
