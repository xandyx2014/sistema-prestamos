import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PrestamosComponent } from './page/prestamos/prestamos.component';
import { MainMenuComponent } from './page/main-menu/main-menu.component';
import { ProductosComponent } from './page/productos/productos.component';
import { CategoriaComponent } from './page/categoria/categoria.component';
import { ClientesComponent } from './page/clientes/clientes.component';
import { PagosComponent } from './page/pagos/pagos.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: '',
        component: MainMenuComponent
      },
      {
        path: 'prestamos',
        component: PrestamosComponent
      },
      {
        path: 'productos',
        component: ProductosComponent
      },
      {
        path: 'categoria',
        component: CategoriaComponent
      },
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'pagos',
        component: PagosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
