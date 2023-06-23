import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { PopupAddedComponent } from './popup-added/popup-added.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'home', component: HomeComponent},
  { path:'cart', component:CartComponent},
  { path: 'details/:model', component:DetailsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'popup' , component:PopupAddedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
