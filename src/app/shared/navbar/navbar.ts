import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarCategoriasComponent {
  menus = {
    ligas: false,
    selecciones: false,
    retro: false,
    concepts: false,
  };

  toggleMenu(menu: 'ligas' | 'selecciones' | 'retro' | 'concepts') {
    this.menus[menu] = !this.menus[menu];
  }
}
