import React from "react";
import HistoryItemData  from "../../../../data/models/history_item";
import {epochToDateString} from "../../../../utils/data_utils";
import {lastForCardDigits} from "../../../../utils/string_utlis";

interface HistoryItem {
    historyItem: HistoryItemData;
}

function HistoryItem({ historyItem }: HistoryItem) {
    return (
        <div className="w-full p-6 flex flex-col ">
            <div className="w-full flex flex-row justify-between">
                <label className="font-bold text-md text-black line-clamp-2 overflow-ellipsis">{historyItem.utilityName}</label>
                <p className="font-normal text-sm line-clamp-2 overflow-ellipsis">{epochToDateString(historyItem.date)}</p>
            </div>
            <div className="w-full flex flex-row justify-between mt-4">
                <p className="font-normal text-sm line-clamp-2 overflow-ellipsis">
                    {historyItem.personalAccount == null ? `Адреса: ${historyItem.address}` : `Особовий рахунок: ${historyItem.personalAccount}`}
                </p>
                <p className="font-normal text-sm line-clamp-2 overflow-ellipsis">Карта: {lastForCardDigits(historyItem.creditCardNumber)}</p>
                <p className="font-semibold text-md line-clamp-2 overflow-ellipsis">{historyItem.paymentAmount}₴</p>
            </div>
        </div>
    );
}

export default HistoryItem;
