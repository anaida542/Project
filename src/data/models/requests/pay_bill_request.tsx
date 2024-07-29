class PayBillRequest {
    utilityId: string
    creditCardNumber: string
    address: string | null
    personalAccount: string | null
    paymentAmount: number

    constructor(utilityId: string, creditCardNumber: string, address: string | null, personalAccount: string | null,  paymentAmount: number ) {
        this.utilityId = utilityId;
        this.creditCardNumber = creditCardNumber;
        this.address = address;
        this.personalAccount = personalAccount;
        this.paymentAmount = paymentAmount;
    }
}

export default PayBillRequest;
