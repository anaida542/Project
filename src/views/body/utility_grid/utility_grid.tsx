import React, {useEffect, useState} from "react";
import Region from "../../../data/models/region";
import Utility from "../../../data/models/utility";
import UtilityItem from "./utility_item";
import {getRegionList} from "../../../api/region";
import {getUtilityListForRegion} from "../../../api/utilities";
import {useParams} from "react-router-dom";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../../shadcn_ui/components/ui/select";
import {Category} from "../../../data/models/category";
import CategoryFilter from "./category_filter";
import SearchField from "./search_field";


interface UtilityGrid {
    onUtilityClick: (utility: Utility) => void;
}

function UtilityGrid({onUtilityClick}: UtilityGrid) {

    const [utilityList, setUtilityList] = useState<Array<Utility>>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [searchName, setSearchName] = useState<string>("");
    const {regionId} = useParams()

    useEffect(() => {
        async function fetchData() {
            try {
                if (regionId) {
                    const utilsList = await getUtilityListForRegion(regionId);
                    setUtilityList(utilsList);
                } else {
                    console.error("Region undefined");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    const handleCategorySelected = (category: Category | null) => {
        setSelectedCategory(category);
    };

    let filteredUtilityList = selectedCategory
        ? utilityList.filter((utility) => utility.category === selectedCategory)
        : utilityList;

    if (searchName) {
        filteredUtilityList = filteredUtilityList.filter((utility) =>
            utility.name.toLowerCase().includes(searchName.toLowerCase())
        );
    }

    const handleSearch = (searchValue: string) => {
        setSearchName(searchValue);
    };

    return (
        <>
            <div className="w-full flex justify-between mr-5 mb-5">
                <CategoryFilter onCategorySelected={handleCategorySelected }/>
                <SearchField onSearch={handleSearch}/>
            </div>

            <div className="w-full grid grid-cols-4 gap-5">
                {filteredUtilityList.map((utility) => (
                    <UtilityItem
                        key={utility.id}
                        utility={utility}
                        onClick={() => onUtilityClick(utility)}
                    />
                ))}
            </div>
        </>

    );
}

export default UtilityGrid;
