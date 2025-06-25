import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService, Producto } from '../../shared/carrito';


type CarritoProducto = {
  nombre: string;
  precio: number;
  cantidad: number;
};

@Component({
  selector: 'app-top-ventas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-ventas.html',
  styleUrls: ['./top-ventas.css']
})
export class TopVentasComponent {
  productos = [
    {
      nombre: 'Edición Especial Cristiano Ronaldo (cr7)',
      precioOriginal: 32.99,
      precio: 27.99,
      imagen: 'ronaldo.webp'
    },
    {
      nombre: 'Kroos Limited Edition',
      precioOriginal: null,
      precio: 32.99,
      imagen: 'kroos.webp'
    },
    {
      nombre: 'FC Barcelona 2024/25 2º Equipación (barça)',
      precioOriginal: null,
      precio: 29.99,
      imagen: 'barcelona2.png'
    },
    {
      nombre: 'Bayer Leverkusen Edición ganador de la Bundesliga',
      precioOriginal: null,
      precio: 32.99,
      imagen: 'Bayer.webp'
    }
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
