import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../shared/carrito';

type CarritoProducto = {
  nombre: string;
  precio: number;
  cantidad: number;
};

@Component({
  selector: 'app-ligas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ligas.html',
  styleUrls: ['./ligas.css']
})
export class LigasComponent {
  productos = [
    { nombre: 'FC Barcelona 25/26', precio: 29.99, imagen: 'barcelona.webp' },
    { nombre: 'Real Madrid 25/26', precio: 32.99, imagen: 'madrid.webp' },
    { nombre: 'Atlético de Madrid 25/26', precio: 28.99, imagen: 'atleticoMadrid.png' }
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
