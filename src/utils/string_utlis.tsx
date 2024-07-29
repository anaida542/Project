import Address from "../data/models/payers_data/address";

export function addressToString(address: Address): string {
    const apartment = address.apartment == null ? "" : ", " + address.apartment
    return address.city + ", " + address.street + ", " + address.house + apartment
}

export function lastForCardDigits(card: string): string {
    if (card.length < 4) {
        return card;
    } else {
        return "**" + card.slice(-4);
    }
}
