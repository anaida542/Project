import React from "react";
import HistoryItemData  from "../../../../data/models/history_item";
import {epochToDateString} from "../../../../utils/data_utils";
import {addressToString, lastForCardDigits} from "../../../../utils/string_utlis";
import Address from "../../../../data/models/payers_data/address";

interface SavedAddressItem {
    address: Address;
}

function SavedAddressItem({ address }: SavedAddressItem) {
    return (
        <div className="w-full p-6 flex flex-col ">
            <label className="font-semibold text-lg text-black line-clamp-2 overflow-ellipsis">{addressToString(address)}</label>
        </div>
    );
}

export default SavedAddressItem;
