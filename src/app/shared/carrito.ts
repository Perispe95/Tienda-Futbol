import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productosSubject = new BehaviorSubject<Producto[]>([]);
  productos$ = this.productosSubject.asObservable();

  private visibleSubject = new BehaviorSubject<boolean>(false);
  visible$ = this.visibleSubject.asObservable();

  toggleCarrito() {
    const actual = this.visibleSubject.getValue();
    this.visibleSubject.next(!actual);
  }

  añadirProducto(producto: Producto) {
    const productos = this.productosSubject.getValue();
    const index = productos.findIndex(p => p.nombre === producto.nombre);

    if (index !== -1) {
      productos[index].cantidad += producto.cantidad;
    } else {
      productos.push(producto);
    }

    this.productosSubject.next([...productos]);
  }

  vaciarCarrito() {
    this.productosSubject.next([]);
  }

  getTotal(): number {
    return this.productosSubject.getValue().reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  }
}
