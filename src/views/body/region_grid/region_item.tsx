import React from "react";
import Region from "../../../data/models/region";

interface RegionItem {
    region: Region;
    onClick: () => void;
}

function RegionItem({ region, onClick }: RegionItem) {
    return (
        <div
            className="bg-white rounded-lg border w-full p-4 flex flex-row justify-start items-center cursor-pointer hover:border-black"
            onClick={onClick}
        >
            <img src={region.imageUrl} alt="Logo" className="w-8 h-10" />
            <label className="ml-2 font-normal text-sm line-clamp-2 overflow-ellipsis">{region.name}</label>
        </div>
    );
}

export default RegionItem;
