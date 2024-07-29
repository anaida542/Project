import React, {useEffect, useState} from "react"
import HistoryItemData from "../../../../data/models/history_item";
import HistoryItem from "./history_item";
import {getHistory} from "../../../../api/history";

interface HistoryList {
}

function HistoryList() {

    const [historyList, setHistoryList] = useState<Array<HistoryItemData>>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const historyList = await getHistory();
                setHistoryList(historyList);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="w-full h-full flex-row gap-5">
            {historyList.map((historyItem) => (
                <>
                    <HistoryItem historyItem={historyItem}></HistoryItem>
                    <div className="w-full flex flex-col items-center">
                        <div className="h-[2px] w-5/6 bg-blue-100"></div>
                    </div>
                </>
            ))}
        </div>
    );
}

export default HistoryList;
