import { Injectable } from '@angular/core';
import { Watches } from './watches';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
 
  cartWatches: Watches[] = [];
  constructor() { }

  cartList : Watches[] = [];
  total : number = 0;
  numberOfItemsInCart():number{
    return this.cartList.length;
  }
  // addToCartList(item:Watches) {
  //   if (!this.cartList.includes(item)) {
  //     item.cartAdded = !item.cartAdded;
  //     this.cartList.push(item);
  //     console.log("Item added to cart.");
  //   } else {
  //     console.log("Item already exists in cart.");
  //   }
  // }
  
  addToCartList(item: Watches) {
    item.cartAdded = !item.cartAdded;
    if (!this.cartList.includes(item)) {
      if (item.cartAdded) {
        this.cartList.push(item);
        console.log("Item added to cart.");
      }
      else if(!item.cartAdded){
        const index = this.cartList.indexOf(item);
        this.cartList.splice(index, 1);
        console.log("Item removed from cart.");
      }
    } else {
      console.log("Item already exists in cart.");
    }
    
    
  }
  
  

  getCartList():Watches[] {
    return this.cartList;
  }

  totalAmount() : number {
    this.total = 0;
    for(const watch of this.cartList){
      this.total += watch.price;
    }
    return this.total;
  }
}
