import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChecktokenService {

  constructor() { }
  gettoken(){
    return !!localStorage.getItem("SessionUser");
  }
}
