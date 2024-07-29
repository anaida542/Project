import React, {ChangeEvent, useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useAuth} from "../../../context/authContex";
import HistoryList from "./hisory/history_list";
import SavedCreditCardList from "./saved_credit_cards/saved_credit_card_list";
import SavedAddressesList from "./saved_addresses/saved_addresses_list";


interface ProfileBlock {

}

function ProfileBlock({}: ProfileBlock) {

    const navigate = useNavigate();
    const {authToken, setAuthToken, removeAuthToken} = useAuth();

    const [selectedTabState, setSelectedTabState] = useState<SelectedTab>(SelectedTab.History)

    const handleSelectedTabChange = (selectedTab: SelectedTab) => {
        setSelectedTabState(selectedTab)
    };

    const handleLogOutButton = () => {
        removeAuthToken()
        navigate(`/profile/signIn`, {replace: true});
    };

    return (
        <div className="w-full min-h-[18rem] bg-white rounded-lg border flex flex-row justify-between">
            <div className="w-1/4 min-h-[18rem] flex flex-col border-r-2 justify-between">
                <div className="flex flex-col h-full">
                    <div
                        className={` ${selectedTabState == SelectedTab.History ? 'bg-blue-600 text-white font-bold hover:bg-blue-700' : 'hover:bg-gray-200'} w-full flex flex-col rounded-tl-lg pt-4 pb-4 pl-8`}
                        onClick={() => handleSelectedTabChange(SelectedTab.History)}>
                        Історія
                    </div>
                    <div
                        className={` ${selectedTabState == SelectedTab.SavedCards ? 'bg-blue-600 text-white font-bold hover:bg-blue-700' : 'hover:bg-gray-200'}  w-full flex flex-col pt-4 pb-4 pl-8`}
                        onClick={() => handleSelectedTabChange(SelectedTab.SavedCards)}>
                        Збережені картки
                    </div>
                    <div
                        className={` ${selectedTabState == SelectedTab.SavedAddresses ? 'bg-blue-600 text-white font-bold hover:bg-blue-700' : 'hover:bg-gray-200'}  w-full flex flex-col pt-4 pb-4 pl-8`}
                        onClick={() => handleSelectedTabChange(SelectedTab.SavedAddresses)}>
                        Збережені адреси
                    </div>
                </div>
                <div className="flex flex-col">
                    <div
                        className=" hover:bg-gray-200 w-full flex flex-col pt-4 pb-4 pl-8 text-gray-500"
                        onClick={handleLogOutButton}>
                        Вийти з акаунту
                    </div>
                    <div
                        className=" hover:bg-red-600 hover:text-white w-full flex flex-col pt-4 pb-4 pl-8 rounded-bl-lg text-red-600"
                        onClick={handleLogOutButton}>
                        Видалити акаунт
                    </div>
                </div>
            </div>
            <div className="w-3/4 flex h-full">
                {selectedTabState === SelectedTab.History && <HistoryList/>}
                {selectedTabState === SelectedTab.SavedCards && <SavedCreditCardList/>}
                {selectedTabState === SelectedTab.SavedAddresses && <SavedAddressesList/>}
            </div>
        </div>
    );
}

enum SelectedTab {
    History, SavedCards, SavedAddresses
}

export default ProfileBlock;
