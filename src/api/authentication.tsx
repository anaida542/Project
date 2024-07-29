import axios from "axios";
import AuthRequest from "../data/models/requests/auth_request";

const serverUrl = process.env.REACT_APP_SERVER_URL

const getAuthToken = () => {
    return localStorage.getItem('authToken');
};

async function signUp(email: string, password: string): Promise<string | null> {

    try {
        const authRequest = new AuthRequest(email,password);
        const response = await axios.post(`${serverUrl}/authentication/signUp`, authRequest);

        console.log(response.data);
        const token = response.data;
        return token;
    } catch (error) {
        console.error("Помилка запиту:", error);
        return null;
    }
}

async function signIn(email: string, password: string): Promise<string | null> {

    try {
        const authRequest = new AuthRequest(email,password);
        const response = await axios.post(`${serverUrl}/authentication/signIn`, authRequest);

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Помилка запиту:", error);
        return null;
    }
}


export {signUp, signIn, getAuthToken}
