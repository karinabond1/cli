import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user/user.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public postData(user: User){
    const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
         
    //const body = {email: user.email, password: user.password};
    return this.http.post<User>('http://192.168.0.15/~user14/BOARDROOM_BOOKER/server/api/user/user/', user, {headers:myHeaders}); 
  }
}
