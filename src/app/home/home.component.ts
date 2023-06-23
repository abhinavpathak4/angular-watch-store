import { Component, inject } from '@angular/core';
import { Watches } from '../watches';
import { WatchserviceService } from '../watchservice.service';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
//import { MatDialog } from '@angular/material/dialog';
//import { PopupAddedComponent } from '../popup-added/popup-added.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  string1 : string = 'Add To Cart';
  string2 : string  = 'Added';
  changeText : boolean = false;

  changeTextCartButton(){
    this.changeText = true;
  }

  item : string = '';
  watchesList : Watches[] = [];
  watchesService : WatchserviceService = inject(WatchserviceService);
  cartService : CartServiceService = inject(CartServiceService);

  //matDialog!: MatDialog ;
  constructor(private router:Router){
    this.watchesList = this.watchesService.getAllWatches(); 
  }

  detailsPage(brand : string){
    console.log(brand);
    this.router.navigate(['details',brand])
  }

  addToCartList(item : Watches){
    this.cartService.addToCartList(item);
  }

  // openPu(){
  //   this.matDialog.open(PopupAddedComponent,{
  //     width:"200px",
  //     height:"250px"
  //   })
  //}
}
