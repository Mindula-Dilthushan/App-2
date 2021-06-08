import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerPageComponent} from "./components/customer-page/customer-page.component";
import {ItemPageComponent} from "./components/item-page/item-page.component";
import {OrderPageComponent} from "./components/order-page/order-page.component";

const routes: Routes = [
  {
    path:'customer', component:CustomerPageComponent
  },
  {
    path:'item', component:ItemPageComponent
  },
  {
    path:'order', component:OrderPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
