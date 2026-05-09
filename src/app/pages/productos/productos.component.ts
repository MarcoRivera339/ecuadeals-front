import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Café de altura',
      descripcion: 'Aroma intenso y sabor equilibrado.',
      precio: 12.99,
      precioAnterior: 15.50,
      imagen: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop',
      categoria: 'Alimentos',
      stock: 30
    },
    {
      id: 2,
      nombre: 'Chocolate artesanal',
      descripcion: 'Hecho con cacao ecuatoriano seleccionado.',
      precio: 8.50,
      precioAnterior: 10.00,
      imagen: 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1200&auto=format&fit=crop',
      categoria: 'Alimentos',
      stock: 20
    },
    {
      id: 3,
      nombre: 'Bufanda andina',
      descripcion: 'Diseño tradicional con estilo moderno.',
      precio: 15.00,
      precioAnterior: 18.00,
      imagen: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1200&auto=format&fit=crop',
      categoria: 'Moda',
      stock: 15
    },
    {
      id: 4,
      nombre: 'Sombrero artesanal',
      descripcion: 'Ideal para un look auténtico y elegante.',
      precio: 22.00,
      precioAnterior: 25.00,
      imagen: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
      categoria: 'Moda',
      stock: 12
    },
    {
      id: 5,
      nombre: 'Mermelada casera',
      descripcion: 'Elaborada con frutas ecuatorianas.',
      precio: 6.75,
      precioAnterior: 8.00,
      imagen: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=1200&auto=format&fit=crop',
      categoria: 'Alimentos',
      stock: 18
    },
    {
      id: 6,
      nombre: 'Pulsera artesanal',
      descripcion: 'Accesorio con identidad cultural ecuatoriana.',
      precio: 9.90,
      precioAnterior: 12.00,
      imagen: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop',
      categoria: 'Accesorios',
      stock: 25
    }
  ];

  agregarAlCarrito(producto: Producto): void {
    console.log('Producto agregado al carrito:', producto);
    alert('Agregado al carrito: ' + producto.nombre);
  }
}
