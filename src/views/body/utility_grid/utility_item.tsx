import React from "react";
import Region from "../../../data/models/region";
import Utility from "../../../data/models/utility";
import {AppsOutline} from "react-ionicons";
import {getFilledCategoryIcon} from "../../../data/models/category";

interface UtilityItem {
    utility: Utility;
    onClick: () => void;
}

function UtilityItem({ utility, onClick }: UtilityItem) {
    return (
        <div
            className="bg-white rounded-lg border w-full p-4 flex flex-row justify-start items-center cursor-pointer hover:border-black"
            onClick={onClick}
        >
            {getFilledCategoryIcon(utility.category)}
            <label className="ml-2 font-normal text-sm line-clamp-2 overflow-ellipsis ">{utility.name}</label>
        </div>
    );
}

export default UtilityItem;
