import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component'; // Asegúrate de que estas rutas sean correctas
import { ProductFormComponent } from './app/product-form/product-form.component';
import { ProductListComponent } from './app/product-list/product-list.component';
import { FooterComponent } from './app/footer/footer.component';
import { ProductService } from './app/product.service'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductFormComponent,
    ProductListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
