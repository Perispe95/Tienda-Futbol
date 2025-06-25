import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.css']
})
export class ServiciosComponent {
  servicios = [
    { icono: '⏰', titulo: 'Atención 24/7', descripcion: 'Siempre disponibles para ti.' },
    { icono: '💳', titulo: 'Pago Seguro', descripcion: 'Tus datos protegidos en todo momento.' },
    { icono: '✈️', titulo: 'Envíos Internacionales', descripcion: 'Llega a cualquier parte del mundo.' },
    { icono: '🏅', titulo: 'Calidad Garantizada', descripcion: 'Réplicas de máxima calidad G5.' },
    { icono: '💸', titulo: 'Precios Bajos', descripcion: 'Los mejores precios del mercado.' }
  ];
}
