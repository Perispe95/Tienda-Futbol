import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (!usuarioGuardado) return alert('No hay usuarios registrados');

    const usuario = JSON.parse(usuarioGuardado);
    if (usuario.email === this.email && usuario.password === this.password) {
      localStorage.setItem('logueado', 'true');
      alert('Login correcto');
      this.router.navigate(['/home']);
    } else {
      alert('Email o contraseña incorrectos');
    }
  }
}
