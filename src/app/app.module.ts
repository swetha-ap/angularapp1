import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigbarComponent } from './navigbar/navigbar.component';
import { ImagebarComponent } from './imagebar/imagebar.component';
import { CoursebarComponent } from './coursebar/coursebar.component';
import { ActivitybarComponent } from './activitybar/activitybar.component';
import { PlacedbarComponent } from './placedbar/placedbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SortPipe } from './pipes/sort'; 
import { SplChar } from './pipes/splchar';
import { ChecktokenService } from './services/services/checktoken.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
import { LoguserComponent } from './loguser/loguser.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigbarComponent,
    ImagebarComponent,
    CoursebarComponent,
    ActivitybarComponent,
    PlacedbarComponent,
    FooterComponent,
    ProductpageComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    SortPipe,
    SplChar,
    LoginComponent,
    SignupComponent,
    ReactiveformComponent,
    LoguserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularmaterialModule
  ],
  providers: [ChecktokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
