import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router : Router){}
  detailsPage(brand : string){
    if(brand){
    console.log(brand);
    this.router.navigate(['details',brand])}
    else{
      this.router.navigate(['popup'])
    }
  }
}
