interface PageFormat {
  name: string;
  icon: string;
  image?: string;
  url: string;
}
export const URL_PAGE: PageFormat[] = [
  {
    name: 'Prestamos',
    icon: 'assignment',
    url: '/pages/prestamos',
    image: 'assets/prestamo.jpg'
  },
  {
    name: 'Productos',
    icon: 'all_inbox',
    url: '/pages/productos',
    image: 'assets/producto.png'
  },
  {
    name: 'Categoria',
    icon: 'book',
    url: '/pages/categoria',
    image: 'assets/categoria.jpg'
  },
  {
    name: 'Clientes',
    icon: 'assignment_ind',
    url: '/pages/clientes',
    image: 'assets/clientes.jpg'
  },
  {
    name: 'Pagos',
    icon: 'store',
    url: '/pages/pagos',
    image: 'assets/pagos.jpg'
  }
];
