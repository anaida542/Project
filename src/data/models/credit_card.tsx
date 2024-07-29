class CreditCard {
    cardNumber: string;
    ccvNumber: string;
    expDate: string;
    cardName: string;
    id: string | null;

    constructor(cardNumber: string, ccvNumber: string, expDate: string, cardName: string, id: string | null = null) {
        this.cardNumber = cardNumber;
        this.ccvNumber = ccvNumber;
        this.expDate = expDate;
        this.cardName = cardName;
        this.id = id;
    }
}

export default CreditCard;
