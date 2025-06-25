import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-info.html',
  styleUrls: ['./faq-info.css']
})
export class FaqInfoComponent {
  faqs = [
    {
      icono: '📦',
      titulo: 'Tiempo de entrega',
      texto: 'Tu pedido será enviado al día siguiente. Para península, entre 6 y 14 días. Envíos internacionales entre 20 y 30 días. En épocas de alta demanda puede tardar más.'
    },
    {
      icono: '🏆',
      titulo: '¿Qué calidad tienen las camisetas?',
      texto: 'Nuestras camisetas son réplicas de calidad G5, lo más alto del mercado. Son prácticamente iguales a las que usan los jugadores.'
    },
    {
      icono: '🌍',
      titulo: '¿Envíos a todo el mundo?',
      texto: 'Sí, enviamos a cualquier parte del mundo, ¡y gratis tanto a nivel nacional como internacional!'
    }
  ];
}
