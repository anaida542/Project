import axios from "axios";
import Region from "../data/models/region";

const serverUrl = process.env.REACT_APP_SERVER_URL

export async function getRegionList(): Promise<Array<Region>> {

  try {
    const response = await axios.get(`${serverUrl}/regions`);

    console.log(response.data);
    const regionList: Array<Region> = response.data.map((item: any) => {
      return new Region(item.id, item.name, item.imageUrl);
    });
    console.log(regionList);

    return regionList;
  } catch (error) {
    console.error("Помилка запиту:", error);
    return [];
  }
}

export async function getRegionById(id: String): Promise<Region | null> {

  try {
    const response = await axios.get(`${serverUrl}/regions/${id}`);

    console.log(response.data);
    const region:Region = new Region(response.data.id, response.data.name, response.data.imageUrl);
    console.log(region);

    return region;
  } catch (error) {
    console.error("Помилка запиту:", error);
    return null;
  }
}
