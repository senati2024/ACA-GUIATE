import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.services';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  product: Product = {
    idProducto: 0,
    NombreProducto: '',
    idMarca: 0,
    idCategoria: 0,
    imagen: '',
    PrecioVenta: 0
  };

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.productService.createProduct(this.product).subscribe(
      () => this.router.navigate(['/productos']),
      error => console.error('Error creating product', error)
    );
  }
}
