import { Component, OnInit ,Input} from '@angular/core';
import { User } from '../add-user/user'
import {DataServiceService} from '../data-service/data-service.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';


@Component({
  selector: 'app-display-user-service',
  templateUrl: './display-user-service.component.html',
  styleUrls: ['./display-user-service.component.css']  
})
export class DisplayUserServiceComponent implements OnInit {
    public userModel: User;
    constructor(            
           private userDataService:DataServiceService

          ) { 
        this.userModel = this.userDataService.userStorage;
        console.log(JSON.stringify(this.userDataService.userStorage));}


  ngOnInit() {
  }

}
