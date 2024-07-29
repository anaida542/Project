import React, {useEffect, useState} from "react"
import CreditCard from "../../../../data/models/credit_card";
import {getCreditCardsForUser} from "../../../../api/user";
import SavedCreditCardItem from "./saved_credit_card_item";

interface SavedCreditCardList {
}

function SavedCreditCardList() {

    const [creditCardList, setCreditCardList] = useState<Array<CreditCard>>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const list = await getCreditCardsForUser();
                setCreditCardList(list);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="w-full h-full flex-row gap-5">
            {creditCardList.map((creditCard) => (
                <>
                    <SavedCreditCardItem creditCard={creditCard}></SavedCreditCardItem>
                    <div className="w-full flex flex-col items-center">
                        <div className="h-[2px] w-5/6 bg-blue-100"></div>
                    </div>
                </>
            ))}
        </div>
    );
}

export default SavedCreditCardList;
