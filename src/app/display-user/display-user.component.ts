import { Component, OnInit, Input } from '@angular/core';
import { User } from '../add-user/user'
import { DataServiceService } from '../data-service/data-service.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component( {
    selector: 'app-display-user',
    templateUrl: './display-user.component.html',
    styleUrls: ['./display-user.component.css']    
} )
export class DisplayUserComponent implements OnInit {

    @Input() userModel: User;

    constructor(
        private router: Router, private userDataService: DataServiceService

    ) {
        this.userModel = this.userDataService.userStorage;
        console.log( JSON.stringify( this.userDataService.userStorage ) );
    }

    ngOnInit() {
    }

}
