import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavbarModule } from './navbar/navbar.module';
import { AppRoutingModule } from './app.routing.module';
import { BookingModule } from "./booking/booking.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    BookingModule,
    AppRoutingModule, 
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
