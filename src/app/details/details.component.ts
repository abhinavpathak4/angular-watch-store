import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';
import { Products } from '../interfaces/products';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  watch:any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private cartService : CartServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.watch = this.productService.findByModel(params['model']);
    });
  }

  addToCartList(item: Products) {
    this.cartService.addToCartList(item);
  }
}