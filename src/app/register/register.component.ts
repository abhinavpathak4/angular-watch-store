import { Component } from '@angular/core';
import { UserRegister } from '../user-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users: UserRegister[]  = [];

  notify : boolean = false;

  addUser(data: UserRegister) {
    console.log(data);
    
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
    
    this.users.push(data);
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  notifyMethod(){
    this.notify = true;
    console.log("user added")
  }
}
