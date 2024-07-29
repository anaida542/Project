import {getAuthToken} from "./authentication";
import HistoryItem from "../data/models/history_item";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL

export async function getHistory(): Promise<Array<HistoryItem>> {

    try {

        const authToken = getAuthToken()
        const headers = {
            'Authorization': 'Bearer ' + authToken
        }
        const response = await axios.get(`${serverUrl}/bills`, {headers});
        return response.data.map((item: any) => {
            return new HistoryItem(item.id, item.utilityId, item.utilityName, item.creditCardNumber, item.paymentAmount, item.userId, item.date, item.address, item.personalAccount);
        })
    } catch (error) {
        console.error("Помилка запиту:", error);
        return [];
    }
}
