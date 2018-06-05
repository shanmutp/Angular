import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mobile World';
  country: string= "US";
  isLoggedIn: boolean = false;
  numbers= [1,2,3,4,5,6,7,8];
  students: any[]=[{"ID":"100","Name":"Raj"},{"ID":"101","Name":"Ray"},{"ID":"102","Name":"Ram"}];
  
}
