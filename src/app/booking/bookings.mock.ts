import { Booking } from '../models/booking';

export const BOOKINGS : Booking [] = [
    {
        hotel: 'Alabama Star',
        price: 350.25,
        user: {
            name: 'John',
            email: 'john@doe.com'
        },
        description: 'This customer is very important for the company'
    },
    {
        hotel: 'Reina Sofía',
        price: 350.25,
        user: {
            name: 'John',
            email: 'john@doe.com'
        },
        description: 'This is another booking'
    }
]