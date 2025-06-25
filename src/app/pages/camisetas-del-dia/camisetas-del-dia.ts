import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../shared/carrito';

// Define CarritoProducto type if not imported from elsewhere
type CarritoProducto = {
  nombre: string;
  precio: number;
  cantidad: number;
};

// Define DisplayProducto type if not imported from elsewhere
type DisplayProducto = {
  nombre: string;
  precio: number;
  imagen: string;
};

@Component({
  selector: 'app-camisetas-del-dia',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './camisetas-del-dia.html',
  styleUrls: ['./camisetas-del-dia.css']
})
export class CamisetasDelDiaComponent {
  productos = [
    {
      nombre: 'Paris Saint-Germain Edición "Mundial De Clubes"',
      precio: 32.99,
      imagen: 'psg.webp'
    },
    {
      nombre: 'Camiseta Japón Edición "One Piece"',
      precio: 29.99,
      imagen: 'onepiece.webp'
    },
    {
      nombre: 'Real Madrid 25-26 Edición Modric Retirada',
      precio: 32.99,
      imagen: 'modric.webp'
    },
    {
      nombre: 'FC Barcelona 2025/26 1º Equipación',
      precio: 29.99,
      imagen: 'barcelona.webp'
    }
  ];
a: any;
   constructor(private carritoService: CarritoService) {}

  anadirAlCarrito(p: DisplayProducto) {
    const cp: CarritoProducto = {
      nombre: p.nombre,
      precio: p.precio,
      cantidad: 1
    };
    this.carritoService.añadirProducto(cp);
    this.carritoService.toggleCarrito();
  }

}
