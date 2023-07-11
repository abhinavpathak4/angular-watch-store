import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path:'cart', component:CartComponent},
  { path: 'details/:model', component:DetailsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'addProduct', component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
