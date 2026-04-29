import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-product-view',
  imports: [],
  templateUrl: './product-view.html',
  styleUrl: './product-view.css',
})
export class ProductView {
  product=input<string>();
  cart=output<string>();

  AddToCart(){
    this.cart.emit(this.product()!);
  }

}
