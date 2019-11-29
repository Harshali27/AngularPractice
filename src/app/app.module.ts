import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductManagementComponent } from './product-management/product-management.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductManagementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,ProductManagementComponent]
})
export class AppModule { }
