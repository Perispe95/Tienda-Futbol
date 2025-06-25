import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncPipe } from '@angular/common';
import { CarritoService } from '../../shared/carrito';
import { Producto } from '../../shared/carrito';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent implements OnInit {
  productos: Producto[] = [];
  visible: boolean = false;

  constructor(public carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.productos$.subscribe(p => this.productos = p);
    this.carritoService.visible$.subscribe(v => this.visible = v);
  }

  get total(): number {
    return this.productos.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }
}
