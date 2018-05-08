import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import {MyNewInterface, Room} from "./my-new-interface";
@Injectable()
export class ApiService {
  

  private postsURL ="http://192.168.1.155/api/GetRoomsOnemail";
 // private roomview = "Adams@M365x275152.onmicrosoft.com";
 private roomview =  this.getUrlParameter(name);
 
  private url = "http://192.168.1.155/api/GetRoomsOnemail?roomname";
  constructor(private http: Http ) {}

  

 getPosts(): Observable<MyNewInterface[]>{
 
    return this.http
    // .get(this.postsURL)
    //.get(this.url+this.roomview)
    
.get(this.url+this.roomview)

  
     .map((response: Response)=> {
       return <MyNewInterface[]>response.json();
       
     })
     .catch(this.handleError);
 }
 
 private handleError(error: Response) {
   return Observable.throw(error.statusText);
 }


 

 getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
 var result1 = location.search;
 console.log("res1"+result1.substring(9,100));

  //return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  return result1.substring(9,100);
};


}
