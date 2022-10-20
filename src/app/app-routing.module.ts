import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginguardGuard } from './guards/loginguard.guard';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'home',component:HomeComponent,canActivate:[LoginguardGuard] },
  { path:'about',component:AboutComponent},
  { path:'', redirectTo:'home',pathMatch:"full" },
  { path:'contact',component:ContactComponent},
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path:'**',component:PagenotfoundComponent} //wildcard route only set at the end of other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
