import { Component, Input, OnInit, inject } from '@angular/core';

import { Watches } from '../watches';
import { WatchserviceService } from '../watchservice.service';
import { CartServiceService } from '../cart-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartWatches: Watches[] = [];
  numberOfCartItems : number = 0;
  cartService : CartServiceService = inject(CartServiceService);
  totalCartValue : number  = 0;
  getCartItems(){
    this.cartWatches = this.cartService.getCartList();
  }
  deleteFromCart(item: Watches) {
    const index = this.cartWatches.indexOf(item);
    if (index > -1) {
      this.cartWatches.splice(index, 1);
      this.numberOfCartItems--;
      this.totalCartValue = this.cartService.totalAmount();
      console.log("Item removed from cart.");
    } else {
      console.log("Item not found in cart.");
    }
  }

  sortOptions(selectedValue: string) {
    if (selectedValue === "value1") {
      this.sortListByPriceDesc();
    } else if (selectedValue === "value2") {
      this.sortListByPrice();
    }
  }
  
  
  
  sortListByPrice() {
    this.cartWatches.sort((a, b) => a.price - b.price);
  }
  sortListByPriceDesc(){
    this.cartWatches.sort((b, a) => a.price - b.price);
  }
  
  ngOnInit() {
    this.getCartItems();
    this.totalCartValue = this.cartService.totalAmount();
    this.numberOfCartItems= this.cartService.numberOfItemsInCart();

  }
}
