import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //need to import router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { } //setting route to another page, we create an object of Route

  ngOnInit(): void {
  }

usname="admin";
userpswd="abc34";
login(){
  if(this.usname=="admin" && this.userpswd=="abc34"){
    localStorage.setItem('SessionUser','1234'); //set token
    this.router.navigateByUrl('/home'); //this specifies the route to be directed
  }
  alert('hii')
}

}
