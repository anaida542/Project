import {Category} from "./category";

class Utility {
    id: string;
    regionId: string;
    name: string;
    category: Category;
    phoneNumbers: Array<string>;

    constructor(id: string, regionId: string, name: string, category: Category, phoneNumbers: Array<string>) {
        this.id = id;
        this.regionId = regionId;
        this.name = name;
        this.category = category;
        this.phoneNumbers = phoneNumbers;
    }
}

export default Utility;
