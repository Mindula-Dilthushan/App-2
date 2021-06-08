import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { OrderPageComponent } from './components/order-page/order-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerPageComponent,
    ItemPageComponent,
    OrderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
