import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products-service';
import { Product } from '../../models/product-interface';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-product-detail-component',
  imports: [],
  templateUrl: './product-detail-component.html',
  styleUrl: './product-detail-component.css',
})
export class ProductDetailComponent {
  private productsService = inject(ProductsService);
  product = signal<Product | null>(null);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(private route: ActivatedRoute) {
    const slug = this.route.snapshot.params['slug'];
    this.getProductBySlug(slug);
  }

  getProductBySlug(slug: string) {
    const params = new HttpParams().set('slug', slug);
    this.productsService.getProduct(params).subscribe({
      next: (response) => {
        this.product.set(response.data);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.isLoading.set(false);
        console.log(error, 'ERROR');
      },
    });
  }
}
