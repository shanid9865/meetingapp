import { Component , OnInit } from '@angular/core';
import { ApiService } from "./api.service"
import { MyNewInterface } from "./my-new-interface";
import { error } from 'util';
import { Observable } from 'rxjs/Observable';
import { AnonymousSubscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent implements OnInit{
  title = 'app';
 
  url=window.location.href;
   name =test('roomname');



  
  private timerSubscription: AnonymousSubscription;
  private postsSubscription: AnonymousSubscription;
  _postsArray: MyNewInterface[];
 

  constructor(private apiService: ApiService){}

  


  getPosts(): void {
    this.apiService.getPosts().
    subscribe(
       resultArray => this._postsArray =
       resultArray,
       error => console.log("Error :: " + error ))
  }


  ngOnInit(): void{
    this.getUrlParameter("roomname");
    this.getPosts();
    this.refreshData();
  
      
  }

   getUrlParameter(name){
   
    var roomname = test("roomname");
    //var roomview = this.getUrlParameter();
    console.log("hdgcouerygpougpo"+this.name);
    console.log(roomname);
    
  }
 
   
  private refreshData(): void {
    this.postsSubscription = this.apiService.getPosts().subscribe(resultArray => {
        this._postsArray = resultArray;
        this.subscribeToData();
    });
}

private subscribeToData(): void {
    this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.refreshData());
}
}




function test(theParameter)
{
var params = window.location.search.substr(1).split('&');
for (var i= 0; i< params.length; i++)
{
var p=params[i].split('=');
  if (p[0]== theParameter)
{
   return ( decodeURIComponent(p[1]));
  }
}

return false;

}  

