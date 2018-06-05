import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserJson} from './user-json';

@Injectable()
export class UserJsonService {

    constructor(private http : Http){
        console.log("user Json service constructor trigerred");
    }

    getAll(): Observable<UserJson[]>{
        console.log("user Json service get all trigerred");
      let users$ = this.http
        .get("./users.json")
        .map(this.mapUsers);
        return users$;
    }

    ngOnInit() {
        console.log("user Json service ng init trigerred");
    }
    mapUsers(response:Response): UserJson[]{
            // The response of the API has a results
            // property with the actual results
            console.log("user Json service map user trigerred"+response.json());
            //return response.json().results.map(this.toUser)
            return response.json();
         }
    mapUser(response:Response): UserJson{
            // The response of the API has a results
            // property with the actual results            
            console.log("user REST service map user trigerred DATA"+response.json().data);
            console.log("user REST service map user trigerred JSON"+response.json());
            //return response.json().results.map(this.toUser)
            return toUser(response.json());
         }
      
    getRestAll(userId:string): Observable<UserJson>{
        console.log("user Rest service get all trigerred user id-->"+userId);
      let user$ = this.http.get("https://reqres.in/api/users/"+userId)
        .map(this.mapUser);
      console.log("user REST service get rest all return"+user$);
        return user$;
    }

}
    function toUser(r:any): UserJson{
        console.log('Parsed user trigerred****:', r);
       let user = <UserJson>({
         id: r.data.id,
         first_name: r.data.first_name,
       });
       console.log('Parsed user:', user);
       return user;
     }

