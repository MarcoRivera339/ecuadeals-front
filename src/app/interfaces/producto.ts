export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  precioAnterior?: number;
  imagen: string;
  categoria: string;
  stock: number;
  destacado?: boolean;
}
