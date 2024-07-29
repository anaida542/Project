import CreditCard from "../data/models/credit_card";
import {getAuthToken} from "./authentication";
import Address from "../data/models/payers_data/address";
import axios, {HttpStatusCode} from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL

export async function getCreditCardsForUser(): Promise<Array<CreditCard>> {

    try {
        const authToken = getAuthToken()
        const headers = {
            'Authorization': 'Bearer ' + authToken
        }
        const response = await axios.get(`${serverUrl}/user/creditCard/list`, {headers});

        return response.data.map((item: any) => {
            return new CreditCard(item.cardNumber, item.ccvNumber, item.expDate, item.cardName, item.id);
        });
    } catch (error) {
        console.error("Помилка запиту:", error);
        return [];
    }
}

export async function saveCreditCard(creditCard: CreditCard): Promise<boolean> {

    try {
        const authToken = getAuthToken()
        const headers = {
            'Authorization': 'Bearer ' + authToken
        }
        const response = await axios.post(`${serverUrl}/user/creditCard`, creditCard, {headers});

        return response.status == HttpStatusCode.Ok
    } catch (error) {
        console.error("Помилка запиту:", error);
        return false;
    }
}

export async function deleteCreditCard(creditCardId: string): Promise<boolean> {

    try {
        const authToken = getAuthToken()
        const headers = {
            'Authorization': 'Bearer ' + authToken
        }
        const response = await axios.delete(`${serverUrl}/user/creditCard/${creditCardId}`, {headers});

        return response.status == HttpStatusCode.Ok
    } catch (error) {
        console.error("Помилка запиту:", error);
        return false;
    }
}

export async function getAddressesForUser(): Promise<Array<Address>> {

    try {
        const authToken = getAuthToken()
        const headers = {
            'Authorization': 'Bearer ' + authToken
        }
        const response = await axios.get(`${serverUrl}/user/address/list`, {headers});

        return response.data.map((item: any) => {
            return new Address(item.city, item.street, item.house, item.apartment, item.id);
        });
    } catch (error) {
        console.error("Помилка запиту:", error);
        return [];
    }
}

export async function saveAddress(address: Address): Promise<boolean> {

    try {
        const authToken = getAuthToken()
        const headers = {
            'Authorization': 'Bearer ' + authToken
        }
        const response = await axios.post(`${serverUrl}/user/address`, address, {headers});

        return response.status == HttpStatusCode.Ok
    } catch (error) {
        console.error("Помилка запиту:", error);
        return false;
    }
}

export async function deleteAddress(addressId: string): Promise<boolean> {

    try {
        const authToken = getAuthToken()
        const headers = {
            'Authorization': 'Bearer ' + authToken
        }
        const response = await axios.delete(`${serverUrl}/user/address/${addressId}`, {headers});

        return response.status == HttpStatusCode.Ok
    } catch (error) {
        console.error("Помилка запиту:", error);
        return false;
    }
}
