import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header';
import { NavbarCategoriasComponent } from '../../shared/navbar/navbar';
import { ProductoDetalle } from '../producto-detalle/producto-detalle';
import { CamisetasDelDiaComponent } from '../camisetas-del-dia/camisetas-del-dia';
import { TopVentasComponent } from '../top-ventas/top-ventas';


type DropdownKey = 'ligas' | 'selecciones' | 'retro';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NavbarCategoriasComponent,ProductoDetalle,CamisetasDelDiaComponent,TopVentasComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  dropdowns: Record<DropdownKey, boolean> = {
    ligas: false,
    selecciones: false,
    retro: false
  };

  camisetasDelDia = [
    { nombre: 'Paris Saint-Germain Edición "Mundial De Clubes"', precio: 32.99, imagen: 'psg-mundial.jpg' },
    { nombre: 'Camiseta Japón Edición "One Piece"', precio: 29.99, imagen: 'japon-onepiece.jpg' },
    { nombre: 'Real Madrid 25-26 Edición Modric Retirada', precio: 32.99, imagen: 'realmodric.jpg' },
    { nombre: 'FC Barcelona 2025/26 1º Equipación', precio: 29.99, imagen: 'barcelona-25.jpg' }
  ];

  topVentas = [
    { nombre: 'Edición Especial Cristiano Ronaldo (cr7)', precioOriginal: 32.99, precio: 27.99, imagen: 'cr7-edicion.jpg' },
    { nombre: 'Kroos Limited Edition', precioOriginal: null, precio: 32.99, imagen: 'kroos.jpg' },
    { nombre: 'FC Barcelona 2024/25 2º Equipación (barça)', precioOriginal: null, precio: 29.99, imagen: 'barca-2a.jpg' },
    { nombre: 'Bayer Leverkusen Edición ganador de la Bundesliga', precioOriginal: null, precio: 32.99, imagen: 'leverkusen.jpg' }
  ];

  paginaActual = 1;

  toggleDropdown(nombre: DropdownKey) {
    this.dropdowns[nombre] = !this.dropdowns[nombre];
  }

}
