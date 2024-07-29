import React, {useEffect, useState} from "react";
import Region from "../../../data/models/region";
import RegionItem from "./region_item";
import {getRegionList} from "../../../api/region";

interface RegionGrid {
  onRegionClick: (region: Region) => void;
}

function RegionGrid({ onRegionClick }: RegionGrid) {

    const [regionList, setRegionList] = useState<Array<Region>>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const regionList = await getRegionList();
                setRegionList(regionList);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);
  return (
      <div className="w-full grid grid-cols-4 gap-5">
        {regionList.map((region) => (
            <RegionItem
                key={region.id}
                region={region}
                onClick={() => onRegionClick(region)}
            />
        ))}
      </div>
  );
}

export default RegionGrid;
