import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookingFormComponent } from './booking-form.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        BookingFormComponent
    ],
    exports: [
        BookingFormComponent
    ]
})

export class BookingFormModule{}