import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
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

}
