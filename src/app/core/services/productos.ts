import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos = [
  // Ligas
  { nombre: 'FC Barcelona 25/26', precio: 29.99, imagen: 'barcelona.webp', categoria: 'ligas' },
  { nombre: 'Real Madrid 25/26', precio: 32.99, imagen: 'madrid.webp', categoria: 'ligas' },
  { nombre: 'Atlético de Madrid 25/26', precio: 28.99, imagen: 'atleticoMadrid.png', categoria: 'ligas' },

  // Retro
  { nombre: 'Retro Argentina 1986', precio: 34.99, imagen: 'argentinaAntigua.webp', categoria: 'retro' },
  { nombre: 'Retro Francia 1998', precio: 32.99, imagen: 'franciaAntigua.jpeg', categoria: 'retro' },
  { nombre: 'Retro Brasil 2002', precio: 31.50, imagen: 'brasil.jpeg', categoria: 'retro' },

  // Selecciones
  { nombre: 'España Euro 2024', precio: 29.99, imagen: 'espana.jpg', categoria: 'selecciones' },
  { nombre: 'Argentina Campeón del Mundo 2022', precio: 32.99, imagen: 'argentina.png', categoria: 'selecciones' },
  { nombre: 'Francia Euro 2024', precio: 30.50, imagen: 'francia.jpeg', categoria: 'selecciones' },

  // Top ventas
  {
    nombre: 'Edición Especial Cristiano Ronaldo (cr7)',
    precioOriginal: 32.99,
    precio: 27.99,
    imagen: 'ronaldo.webp',
    categoria: 'top ventas'
  },
  {
    nombre: 'Kroos Limited Edition',
    precioOriginal: null,
    precio: 32.99,
    imagen: 'kroos.webp',
    categoria: 'top ventas'
  },
  {
    nombre: 'FC Barcelona 2024/25 2º Equipación (barça)',
    precioOriginal: null,
    precio: 29.99,
    imagen: 'barcelona2.png',
    categoria: 'top ventas'
  },
  {
    nombre: 'Bayer Leverkusen Edición ganador de la Bundesliga',
    precioOriginal: null,
    precio: 32.99,
    imagen: 'Bayer.webp',
    categoria: 'top ventas'
  },

  // Camisetas del día
  {
    nombre: 'Paris Saint-Germain Edición "Mundial De Clubes"',
    precio: 32.99,
    imagen: 'psg.webp',
    categoria: 'camisetas del día'
  },
  {
    nombre: 'Camiseta Japón Edición "One Piece"',
    precio: 29.99,
    imagen: 'onepiece.webp',
    categoria: 'camisetas del día'
  },
  {
    nombre: 'Real Madrid 25-26 Edición Modric Retirada',
    precio: 32.99,
    imagen: 'modric.webp',
    categoria: 'camisetas del día'
  },
  {
    nombre: 'FC Barcelona 2025/26 1º Equipación',
    precio: 29.99,
    imagen: 'barcelona.webp',
    categoria: 'camisetas del día'
  }
];

  getProductosPorCategoria(categoria: string) {
    return this.productos.filter(p => p.categoria === categoria);
  }

  buscarProductos(texto: string, categoria: string) {
    return this.getProductosPorCategoria(categoria).filter(p =>
      p.nombre.toLowerCase().includes(texto.toLowerCase())
    );
  }
}
