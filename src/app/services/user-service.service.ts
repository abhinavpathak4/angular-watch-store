
import { Injectable } from '@angular/core';
import { UserRegister } from '../interfaces/user-register';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  isAdmin: boolean = false;
  isLoggedIn: boolean = false;

    addUser(body: any) {
    return this.httpClient.post<string>("http://localhost:8080/register", body).subscribe();
  }
  // addUser(body: any): Observable<string> {
  //   return this.httpClient.post<string>("http://localhost:8080/register", body).pipe(
  //     map((response: any) => response.message)
  //   );
  // }

  getUsers(): Observable<UserRegister[]> {
    return this.httpClient.get<UserRegister[]>("http://localhost:8080/getAll");
  }
}
