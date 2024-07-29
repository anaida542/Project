import React, { useEffect, useState } from "react";
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import RegionGrid from "./region_grid/region_grid";
import Region from "../../data/models/region";
import { getRegionList } from "../../api/region";
import UtilityGrid from "./utility_grid/utility_grid";
import Utility from "../../data/models/utility";
import PaymentBlock from "./payment/payment_block";
import {resolve} from "url";

function UtilityPayBody() {
  const navigate = useNavigate();

  const handleRegionClick = (region: Region) => {
    navigate(`/${region.id}`);
  };

  const handleUtilityClick = (utility: Utility) => {
      const currentUrl = window.location.pathname;
      navigate(`${currentUrl}/${utility.id}`, { state: { utility: utility } });
  };

  return (
      <div className="flex flex-col px-64 min-h-screen h-full p-6 justify-start items-start bg-gray-100">
        <div className="w-full flex flex-row justify-between items-center">
          <label className="w-fit font-normal text-lg">
            Оплата комунальних послуг
          </label>
        </div>
        <div className="h-5"></div>
        <Routes>
          <Route path="/" element={<RegionGrid onRegionClick={handleRegionClick}/>} />
          <Route path="/:regionId" element={<UtilityGrid onUtilityClick={handleUtilityClick}/>} />
          <Route path="/:regionId/:utility" element={<PaymentBlock/>} />
        </Routes>
      </div>
  );
}

export default UtilityPayBody;
