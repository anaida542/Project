import PayersData from "./payers_data";

class PersonalAccount implements PayersData {
    personalAccountNumber: string;

    constructor(personalAccountNumber: string) {
        this.personalAccountNumber = personalAccountNumber;
    }
}

export default PersonalAccount;
