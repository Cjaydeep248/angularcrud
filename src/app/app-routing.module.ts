import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './template/add-product/add-product.component';
import { ViewProductComponent } from './template/view-product/view-product.component';

const routes: Routes = [
  {
    path:'addProduct',component:AddProductComponent
  },
  {
    path:'viewProduct',component:ViewProductComponent
  },
  {
    path:'edit/:data',component:AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
