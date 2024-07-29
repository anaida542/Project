import React, {ChangeEvent, useState} from "react";
import PayersData from "../../../../data/models/payers_data/payers_data";
import Address from "../../../../data/models/payers_data/address";
import CreditCard from "../../../../data/models/credit_card";
import PayersDataForm from "../payers_data/payers_data_form";

interface BillDataView {
    onContinueClick: () => void;
    onBackClick: () => void;
}

function BillDataView({onContinueClick, onBackClick}: BillDataView) {

    const handleContinueClick = () => {
        onContinueClick()
    };
    const handleBackClick = () => {
        onBackClick()
    };

    return (
        <div className="w-[750px] flex flex-col">
            <label className="font-semibold text-xl line-clamp-2 mb-4">Ваші рахунки:</label>
            <img src="https://abonent.logicland.com.ua/sites/default/files/invoice-1.png" alt="Bill" className="w-full mr-16 mb-4"/>
            <div className="w-full flex flex-row mb-4 items-end justify-end">
                <p className="text-lg line-clamp-2 mr-2">До сплати: </p>
                <p className="font-bold text-2xl line-clamp-2">157,31₴</p>
            </div>
            <div className="flex flex-row justify-evenly mt-4">
                <button
                    className="w-full bg-gray-300 h-12 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mr-2"
                    type="button"
                    onClick={handleBackClick}
                >
                    Назад
                </button>
                <button
                    className="w-full bg-blue-500 h-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ml-2"
                    type="button"
                    onClick={handleContinueClick}
                >
                    Продовжити
                </button>
            </div>
        </div>
    );
}

export default BillDataView;
