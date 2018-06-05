import { Component, OnInit } from '@angular/core';
import { UserJson } from '../services/user-json';
import { UserJsonService } from '../services/user-json.service';

@Component({
  selector: 'app-user-rest',
  templateUrl: './user-rest.component.html',
  styleUrls: ['./user-rest.component.css']
})
export class UserRestComponent implements OnInit {
    user: UserJson;
    userId: string= "2";
    constructor(private userJsonService: UserJsonService) { }
    ngOnInit() {  
        console.log("Ng init trigerred is user REST component");
        this.userJsonService
        .getRestAll(this.userId)
        .subscribe((p) =>{ this.user = p;});
        console.log("User Array-->"+this.user);
    }

}
