import { Injectable } from '@angular/core';
import { User } from '../add-user/user'
@Injectable()
export class DataServiceService {

    public userStorage: User;
    constructor() { }

}
