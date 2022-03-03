import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `product-list`, loadChildren: () =>
      import('./pages/product-list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: `product-list/:id`, loadChildren: () =>
      import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailModule)
  },
  {
    path: `product-form`, loadChildren: () =>
      import('./pages/product-form/product-form.module').then(m => m.ProductFormModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
