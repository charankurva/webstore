import { Component } from '@angular/core';
import { ProductView } from '../product-view/product-view';

@Component({
  selector: 'app-product-list',
  imports: [ProductView],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  Currentclasses:any= {
    ProductHeading:true
  };

  product_list:string[]= [
    "Orient electriccooler",
    "Pixel phone",
    "Parle Biscuits"
];

selectedproduct:string|undefined;
cart(x:string){
   alert(`added ${x} product to cart`);
}
}
