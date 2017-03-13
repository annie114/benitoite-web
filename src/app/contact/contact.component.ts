import { Component, OnInit } from '@angular/core';
import {User} from "./user.interface";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    public user : User;
  constructor() { }

  onSubmit(formData) {
    console.log(formData);
  }
  ngOnInit() {
    this.user = {
      firstName:"",
      lastName:"",
     email:'',
   subject:'',
   message:'',
    };
  }

  save(model:User,isValid:boolean){
    console.log(model,isValid);
  }

}
