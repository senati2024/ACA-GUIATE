// src/app/app.component.ts
import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productData: any = {}; // Asegúrate de definir esta propiedad

  handleProductSubmitted(product: any) {
    // Lógica para manejar el producto enviado
    console.log(product);
  }
}
