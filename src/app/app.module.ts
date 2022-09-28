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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigbarComponent,
    ImagebarComponent,
    CoursebarComponent,
    ActivitybarComponent,
    PlacedbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
