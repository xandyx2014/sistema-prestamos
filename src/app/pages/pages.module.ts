import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material.module';
import { HomeComponent } from './page/home/home.component';
import { PrestamosComponent } from './page/prestamos/prestamos.component';
import { MainMenuComponent } from './page/main-menu/main-menu.component';
import { ProductosComponent } from './page/productos/productos.component';
import { CategoriaComponent } from './page/categoria/categoria.component';
import { ClientesComponent } from './page/clientes/clientes.component';
import { PagosComponent } from './page/pagos/pagos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCategoriaComponent } from './page/categoria/component/form-categoria/form-categoria.component';
import { FormClientesComponent } from './page/clientes/component/form-clientes/form-clientes.component';
import { FormPagosComponent } from './page/pagos/component/form-pagos/form-pagos.component';
import { FormPrestamosComponent } from './page/prestamos/component/form-prestamos/form-prestamos.component';
import { FormProductosComponent } from './page/productos/component/form-productos/form-productos.component';


@NgModule({
  declarations: [
    HomeComponent,
    PrestamosComponent,
    MainMenuComponent,
    ProductosComponent,
    CategoriaComponent,
    ClientesComponent,
    PagosComponent,
    FormCategoriaComponent,
    FormClientesComponent,
    FormPagosComponent,
    FormPrestamosComponent,
    FormProductosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
