class HistoryItem {
    id: string;
    utilityId: string;
    utilityName: string;
    userId: string;
    creditCardNumber: string;
    address: string | null;
    date: number;
    personalAccount: string | null;
    paymentAmount: number;

    constructor(
        id: string,
        utilityId: string,
        utilityName: string,
        creditCardNumber: string,
        paymentAmount: number,
        userId: string,
        date: number,
        address: string | null,
        personalAccount: string | null,
    ) {
        this.id = id;
        this.utilityId = utilityId;
        this.utilityName = utilityName;
        this.userId = userId;
        this.creditCardNumber = creditCardNumber;
        this.address = address;
        this.date = date;
        this.personalAccount = personalAccount;
        this.paymentAmount = paymentAmount;
    }
}

export default HistoryItem;
