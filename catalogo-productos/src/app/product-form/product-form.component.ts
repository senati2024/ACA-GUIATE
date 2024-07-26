import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.services';
import { Product } from '../models/product.model';
import { Router, ActivatedRoute } from '@angular/router';

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
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (id) {
        this.isEditMode = true;
        this.productService.getProductById(id).subscribe(
          (product: Product) => this.product = product,
          error => console.error('Error fetching product', error)
        );
      }
    });
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.productService.updateProduct(this.product.idProducto, this.product).subscribe(
        () => this.router.navigate(['/productos']),
        error => console.error('Error updating product', error)
      );
    } else {
      this.productService.createProduct(this.product).subscribe(
        () => this.router.navigate(['/productos']),
        error => console.error('Error creating product', error)
      );
    }
  }
}
