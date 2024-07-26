import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.services';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    idProducto: 0,
    NombreProducto: '',
    idMarca: 0,
    idCategoria: 0,
    imagen: '',
    PrecioVenta: 0
  };

  isEditMode: boolean = false;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Lógica de inicialización aquí si es necesario, pero sin usar ActivatedRoute.
    // Si deseas cargar un producto por ID, podrías hacer una llamada directa
    // al servicio sin depender del enrutamiento.
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.productService.updateProduct(this.product.idProducto, this.product).subscribe(
        () => {
          // Manejo después de la actualización, sin redireccionar.
        },
        error => console.error('Error updating product', error)
      );
    } else {
      this.productService.createProduct(this.product).subscribe(
        () => {
          // Manejo después de la creación, sin redireccionar.
        },
        error => console.error('Error creating product', error)
      );
    }
  }
}
