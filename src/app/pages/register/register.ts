import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  nombre = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  registrar() {
    if (!this.nombre || !this.email || !this.password) return alert('Completa todos los campos');
    
    const usuario = { nombre: this.nombre, email: this.email, password: this.password };
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert('Registrado correctamente');
    this.router.navigate(['/login']);
  }
}
