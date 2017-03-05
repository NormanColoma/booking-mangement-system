export interface Booking {
    hotel: String;
    price: Number;
    user: {
        name: String;
        email: String;
    };
    description: String;
}