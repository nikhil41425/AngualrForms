import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  
  _Url="http://localhost:3000/register";
  constructor(private _http:HttpClient) { }
  enroll(user:User){

    return this._http.post<any>(this._Url,user);
    
  }
  

}
