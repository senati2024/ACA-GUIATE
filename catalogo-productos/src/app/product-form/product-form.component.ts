// src/app/product-form/product-form.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  @Output() productSubmitted = new EventEmitter<any>();

  product = {
    name: '',
    // otros campos del producto
  };

  submitForm() {
    // Lógica para manejar el envío del formulario
    this.productSubmitted.emit(this.product);
  }
}
