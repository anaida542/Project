import axios, {Axios, HttpStatusCode} from "axios";
import CreditCard from "../data/models/credit_card";
import Address from "../data/models/payers_data/address";
import PayBillRequest from "../data/models/requests/pay_bill_request";
import {addressToString} from "../utils/string_utlis";
import {getAuthToken} from "./authentication";
import PayersData from "../data/models/payers_data/payers_data";
import PersonalAccount from "../data/models/payers_data/personal_account";

const serverUrl = process.env.REACT_APP_SERVER_URL

export async function payBill(creditCard: CreditCard, payersData: PayersData, price: number, utilityId: string) : Promise<boolean> {

    try {
        let address: Address | null = null;
        let personalAccount: PersonalAccount | null = null;

        if (payersData instanceof Address) {
            address = payersData;
        } else if (payersData instanceof PersonalAccount) {
            personalAccount = payersData;
        }
        const bill = new PayBillRequest(
            utilityId,
            creditCard.cardNumber,
            address == null ? null : addressToString(address),
            personalAccount == null ? null : personalAccount!.personalAccountNumber,
            price
        )
        const authToken = getAuthToken()
        if (authToken == null) {
            const response = await axios.post(`${serverUrl}/bills/guest`, bill );
            return response.status == HttpStatusCode.Ok
        } else {
            const headers = {
                'Authorization': 'Bearer ' + authToken
            }
            const response = await axios.post(`${serverUrl}/bills`, bill , {headers});
            return response.status == HttpStatusCode.Ok
        }
    } catch (error) {
        console.error("Помилка запиту:", error);
        return false;
    }
}

