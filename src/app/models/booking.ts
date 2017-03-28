export interface Booking {
    id: Number;
    hotel: String;
    price: Number;
    user: {
        name: String;
        email: String;
    };
    description: String;
}