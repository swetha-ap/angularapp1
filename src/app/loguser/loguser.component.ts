import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loguser',
  templateUrl: './loguser.component.html',
  styleUrls: ['./loguser.component.css']
})
export class LoguserComponent implements OnInit {

  constructor(private router:Router) { } 
  ngOnInit(): void {
  }
  uname="swetha";
  upswd="swe123";
  log(){
    if(this.uname=="swetha" && this.upswd=="swe123"){
      localStorage.setItem('SessionUser','1234'); //set token
      this.router.navigateByUrl('/home'); //this specifies the route to be directed
    }  
    else{
      alert('not logged');
    }
    }
  }

