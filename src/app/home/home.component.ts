import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // angular pipes
  username="john";
  today=Date.now();
  money=3000;

  @Input()datafromparent:string="";

  @Output()event=new EventEmitter();
  parentdata(){
    this.event.emit("data from child to parent");
  }
}
