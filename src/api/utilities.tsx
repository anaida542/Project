import Region from "../data/models/region";
import axios from "axios";
import Utility from "../data/models/utility";

const serverUrl = process.env.REACT_APP_SERVER_URL

export async function getUtilityListForRegion(regionId: String): Promise<Array<Utility>> {

    try {
        const response = await axios.get(`${serverUrl}/utilities/${regionId}`);

        console.log(response.data);
        const utilityList: Array<Utility> = response.data.map((item: any) => {
            return new Utility(item.id, item.regionId, item.name, item.category, item.phoneNumbers);
        });
        console.log(utilityList);

        return utilityList;
    } catch (error) {
        console.error("Помилка запиту:", error);
        return [];
    }
}
