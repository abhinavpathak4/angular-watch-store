import { Component, inject } from '@angular/core';
import { Watches } from '../watches';
import { WatchserviceService } from '../watchservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  watch : any;
  watchesService : WatchserviceService = inject(WatchserviceService);
  cartService : CartServiceService = inject(CartServiceService);

  model: string= "";

  constructor( private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.model = params['model'];
      console.log(this.model);
      this.watch = this.watchesService.findByModel(this.model);
      console.log(this.watch);
    });
  }
  addToCartList(item:Watches){
    this.cartService.addToCartList(item);
  }
  // constructor(){
  //   this.watch = this.watchesService.findByModel("Titan");
  //   console.log(this.watch);
  // }
  
}
