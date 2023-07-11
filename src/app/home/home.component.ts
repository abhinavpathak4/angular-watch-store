import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';
import { Products } from '../interfaces/products';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  watches: Products[] = [];
  notFound: boolean = false;
  visibility: boolean = false;

  constructor(private productService: ProductServiceService,private cartService: CartServiceService, private router: Router) { }

  ngOnInit() {
    this.watches = this.productService.watches;
  }

  detailsPage(brand: string) {
    this.router.navigate(['details', brand])
  }

  addToCartList(item: Products) {
    this.cartService.addToCartList(item);
  }
  
  filterWatches(searchQuery: string) {
    const lowerCaseQuery = searchQuery.toLowerCase();
    this.watches = this.productService.watches.filter(watch =>
      watch.model.toLowerCase().includes(lowerCaseQuery)
    );

    if (this.watches.length === 0) this.notFound = true;
    else this.notFound = false;
    this.visibility = true;
  }

  home() {
    this.watches = this.productService.watches;
    this.notFound = false;
    this.visibility = false;
  }
}
