import { Component, OnInit } from '@angular/core';
import { UserJson } from '../services/user-json';
import { UserJsonService } from '../services/user-json.service';
import {ChangeDetectorRef} from '@angular/core';
@Component( {
    selector: 'app-user-json-list',
    templateUrl: './user-json-list.component.html',
    styleUrls: ['./user-json-list.component.css']    
} )
export class UserJsonListComponent implements OnInit {
    user: UserJson[] = [];
constructor(private userJsonService: UserJsonService,private ref:ChangeDetectorRef) { }
    ngOnInit() {  
        console.log("Ng init trigerred is userJSon component");
        setInterval(() => {this.userJsonService
        .getAll()
        .subscribe((p) =>{ this.user = p;this.ref.detectChanges();}),1000});
        console.log("User Array-->"+this.user);
    }

}
