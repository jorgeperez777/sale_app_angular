import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { ProductDetailComponent } from './pages/product-detail-component/product-detail-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:slug', component: ProductDetailComponent },
  { path: '**', redirectTo: '' }
];
