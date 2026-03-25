import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-component',
  imports: [],
  templateUrl: './product-detail-component.html',
  styleUrl: './product-detail-component.css',
})
export class ProductDetailComponent {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    const slug = this.route.snapshot.params['slug']
    console.log(slug, "SLUG")
  }
}
