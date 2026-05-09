import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productosDestacados: Producto[] = [
    {
      id: 1,
      nombre: 'Café de altura',
      descripcion: 'Producto ecuatoriano premium cultivado en la Sierra.',
      precio: 12.99,
      precioAnterior: 15.50,
      imagen: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop',
      categoria: 'Alimentos',
      stock: 30,
      destacado: true
    },
    {
      id: 2,
      nombre: 'Chocolate artesanal',
      descripcion: 'Elaborado con cacao ecuatoriano de alta calidad.',
      precio: 8.50,
      precioAnterior: 10.00,
      imagen: 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1200&auto=format&fit=crop',
      categoria: 'Alimentos',
      stock: 20,
      destacado: true
    },
    {
      id: 3,
      nombre: 'Bufanda andina',
      descripcion: 'Diseño moderno con identidad local y tejido suave.',
      precio: 15.00,
      precioAnterior: 18.00,
      imagen: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1200&auto=format&fit=crop',
      categoria: 'Moda',
      stock: 15,
      destacado: true
    }
  ];
}
