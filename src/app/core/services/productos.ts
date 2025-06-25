import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Camiseta Real Madrid 24/25', precio: 24.50, imagen: 'real-madrid.jpg' },
    { id: 2, nombre: 'Camiseta retro Argentina 86', precio: 27.50, imagen: 'argentina-86.jpg' },
    { id: 3, nombre: 'Kit infantil FC Barcelona', precio: 25.00, imagen: 'barcelona-kit.jpg' }
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  getProductoById(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }
}
