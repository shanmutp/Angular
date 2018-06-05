import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {Router} from '@angular/router';
import {DisplayUserComponent} from '../display-user/display-user.component';
import {DataServiceService} from '../data-service/data-service.service';
@Component( {
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']   
} )
export class AddUserComponent implements OnInit {

    constructor(private router: Router,private userDataService:DataServiceService) {
        
        console.log("constructor invoked ******");
    }

    ngOnInit() {
        console.log("init invoked ******");
        this.model = new User( "abc@ripples.com", "pass", "pass" );
        
    }
    public model:User;
    submitStatus: boolean = false;
    onSubmit(): void {       
        this.userDataService.userStorage=this.model;
        this.submitStatus = true;
        console.log( "Form submitted***********" );
        console.log( this.printModel );
        
       this.router.navigate(['UserDetail']);
    }
    get printModel() { return JSON.stringify( this.model ); }


}
