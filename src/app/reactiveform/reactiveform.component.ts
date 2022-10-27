import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { myValidators } from '../validators/validate';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ph_pattern = '^[789][0-9]{9}$'
  loginform=new FormGroup({       //create an object of form with ip fields as parameters 
    username:new FormControl('',[Validators.required,myValidators.containSpace,myValidators.nosplchar]),
    address:new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    phone:new FormControl('',[Validators.required,Validators.pattern(this.ph_pattern)])
  });
  // get method to get form values from ip field
  get getusername(){
    return this.loginform.get('username');
  }
  get getaddress(){
    return this.loginform.get('address');
  }
  get getemail(){
    return this.loginform.get('email');
  }
  get getpassword(){
    return this.loginform.get('password');
  }
  get getphone(){
    return this.loginform.get('phone');
  }
}
