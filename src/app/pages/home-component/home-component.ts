import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products-service';
import { Product } from '../../models/product-interface';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home-component',
  imports: [RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  private productsService = inject(ProductsService);
  products = signal<Product[]>([]);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor() {
    this.getListProducts();
  }

  getListProducts() {
    const params = new HttpParams().set('size_items', 10).set('page', 1);
    this.productsService.getProducts(params).subscribe({
      next: (response) => {
        this.products.set(response.data);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.isLoading.set(false);
        console.log(error, 'Error');
      },
    });
  }
}
