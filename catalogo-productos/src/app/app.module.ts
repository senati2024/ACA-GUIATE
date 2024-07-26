import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; // Asegúrate de que estas rutas sean correctas
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { ProductService } from './product.service'; 

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
