import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ChecktokenService } from '../services/services/checktoken.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {
  constructor(private authguardservice:ChecktokenService,private router:Router){}
  canActivate():boolean{
    if(!this.authguardservice.gettoken()){
      this.router.navigateByUrl("/about");
    }
    return this.authguardservice.gettoken();
  }
  }
  

