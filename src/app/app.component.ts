import { Component } from '@angular/core';

// grid tile
export interface tile{
  color:string,
  rows:number,
  cols:number,
  text:string
}

@Component({
  selector: 'common',
  templateUrl: './app.component.html',
  // template:`<h1>hello</h1>
  // <p>how are you</p>`,
  styleUrls: ['./app.component.css']
})
 

export class AppComponent {
  title = 'app1';
          //ngFor EGS
  arr1=["name","place","age","gender"];

  products =[        //json format ie key value pair
    {
      'pname':'soap',
      'pqty':'3',
      'pprice':'10'
    },
    {
      'pname':'brush',
      'pqty':'2',
      'pprice':'5'
    },
    {
      'pname':'shampoo',
      'pqty':'5',
      'pprice':'60'
    }
  ];
            //ngIf
  // isAuthenticated=true;
  isAuthenticated=false;  //can be true or false and accordingly display will be processed in html
              //ngSwitch
              // item is switch condition and p1,p2,p3 are cases
  // item="p2";
  // item="p1";
  item="p3";

               //TEMPLATES AND ngIf
  var1=true;

  color="blue";

  isboolean=true ;
  // isboolean=false ;


                        //ONE WAY EVENT BINDING
  bclick(){
    alert("button clicked");
  }

  display(a:any){
     console.log(a);
  }
                     //TWO WAY BINDING
username="";
colour="";

//CUSTOM ANGULAR PIPES
kids=["nitin","rohan","kaushik","sidharth"];
nos=[4,2,7,8];
uname="@#$h@i s#@*&wet%ha@";

childname="data from parent to home child";
mesg="";
data_parent(event:any){
  // console.log(event);
  // alert(event);
  this.mesg=event;
}

// grid tiles 
tiles:tile[]=[
  {text:'one',rows:1,cols:3,color:'lightpink'},
  {text:'two',rows:2,cols:1,color:'lightblue'},
  {text:'three',rows:1,cols:1,color:'green'},
  {text:'four',rows:1,cols:2,color:'brown'},
];
}

             