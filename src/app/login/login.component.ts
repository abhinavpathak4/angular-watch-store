import { Component } from '@angular/core'
import { FormGroup ,FormControl } from '@angular/forms'
import { UserRegister } from '../user-register';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  constructor(private router: Router) {}
  users : UserRegister[]=[];
  isValid : boolean = true;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password : new FormControl('')
  });


  ngOnInit(){
    const localItem = localStorage.getItem("users");
    console.log(localItem);
    if(localItem){
      this.users = JSON.parse(localItem);
    }
  }

  

  authenticate(){
    const user = this.users.find(u => u.email == this.loginForm.value.email && u.password == this.loginForm.value.password)
    if(user){
      console.log("true");
     this.isValid = true;
     this.router.navigate(['home']);
    }
    else {
      
     
             this.isValid = false;
             console.log("false");
           }

  }


  // authenticate(){
  //   console.log(this.loginForm.value);
  //   if(this.loginForm.value.email === "abhi@gm.com" && this.loginForm.value.password === "aa"){
  //     console.log("true");
  //     this.isValid = true;
  //     this.router.navigate(['home'])
  //   }
  //   else {
  //     this.isValid = false;
  //     console.log("false");
  //   }
  // } 
}

















 // name =  new FormControl('');

  // updateName(){
  //   this.name.setValue('AbhinavPathak')
  // }


  
  // updateProfile() {
  //   this.profileForm.patchValue({
  //     firstName : 'AbhinavP',
  //     address: {
  //       street: '123 DV'
  //     }
  //   })
  //   console.log(this.profileForm.value);
  // }

  // constructor(private fb : FormBuilder){ }
  
  // profileForm = this.fb.group({
  //   firstName:['', Validators.required],
  //   lastName:[''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state:[''],
  //     zip:['']
  //   })
  // });
