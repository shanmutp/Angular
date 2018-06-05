import { Component, OnInit } from '@angular/core';
import {Mobile} from './mobile'
@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.css']
})
export class AddMobileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  brand : string[]= ['none','Samsung','Nokia','Apple'];
  model  = new Mobile(123,this.brand[0],10000,false); 
  submitStatus: boolean = false;
  onSubmit(): void{
      this.submitStatus=true;
      console.log("Form submitted***********");
  }
  get printModel() { return JSON.stringify(this.model); }

}
