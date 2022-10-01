import { Component } from '@angular/core';

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
}
