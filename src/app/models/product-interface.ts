export interface ProductResponse {
  data: Product[];
}
export interface Product {
  name: string;
  slug: string;
  url_image: string;
}

export interface ProductResponseInfo {
  data: Product;
}
