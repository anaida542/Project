import PayersData from "./payers_data";

class Address implements PayersData {
    city: string;
    street: string;
    house: string;
    apartment: string | null;
    id: string | null;

    constructor(city: string, street: string, house: string, apartment: string | null = null, id: string | null = null) {
        this.city = city;
        this.street = street;
        this.house = house;
        this.apartment = apartment;
        this.id = id;
    }
}

export default Address;
