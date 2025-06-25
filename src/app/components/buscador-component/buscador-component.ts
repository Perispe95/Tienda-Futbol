import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buscador-component.html',
  styleUrls: ['./buscador-component.css']
})
export class BuscadorComponent {
  textoBusqueda: string = '';

  @Output() buscar = new EventEmitter<string>();

  onBuscar() {
    this.buscar.emit(this.textoBusqueda.trim());
  }
}
