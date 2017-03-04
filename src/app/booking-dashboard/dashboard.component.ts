import {  Component } from '@angular/core';
import  { Booking } from '../models/booking';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: []
})

export class BookingDashboardComponent {
    title = 'Dashboard';

    onSubmitBooking(event : Booking){
        console.log(event);
    }
}