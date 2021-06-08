import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerPageComponent} from "./components/customer-page/customer-page.component";
import {ItemPageComponent} from "./components/item-page/item-page.component";
import {OrderPageComponent} from "./components/order-page/order-page.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";

const routes: Routes = [
  // {path:'',component:CustomerPageComponent},

  {
    path:'', redirectTo:'/customer', pathMatch:'full'
  },
  {
    path:'customer', component:CustomerPageComponent
  },
  {
    path:'item', component:ItemPageComponent
  },
  {
    path:'order', component:OrderPageComponent
  },
  {
    path: '**', component:NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
