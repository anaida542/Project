import React, {ChangeEvent, useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Utility from "../../../data/models/utility";
import PayersDataForm from "./payers_data/payers_data_form";
import PaymentDataForm from "./payment_data/payment_data_form";
import PayersData from "../../../data/models/payers_data/payers_data";
import CreditCard from "../../../data/models/credit_card";
import Credit_card from "../../../data/models/credit_card";
import {getUtilityListForRegion} from "../../../api/utilities";
import Region from "../../../data/models/region";
import {getRegionById} from "../../../api/region";
import UtilityItem from "../utility_grid/utility_item";
import BillDataView from "./bill_data/bill_data_view";
import SuccessView from "./success_view";
import {payBill} from "../../../api/bill";

interface PaymentBlock {

}

function PaymentBlock({}: PaymentBlock) {

    const navigate = useNavigate();

    const {regionId} = useParams()

    const location = useLocation();
    const utility: Utility = location.state.utility;
    const [region, setRegionState] = useState<Region | null>(null)
    const [payersData, setPayersData] = useState<PayersData | null>(null)
    const [paymentState, setPaymentState] = useState<PaymentState>(PaymentState.Details)

    useEffect(() => {
        async function fetchData() {
            try {
                if (regionId) {
                    const _region = await getRegionById(regionId);
                    setRegionState(_region)
                } else {
                    console.error("Region undefined");
                }
            } catch (error) {
                console.error("Error fetching region data:", error);
            }
        }

        fetchData();
    }, []);
    const goBackState = () => {
        setPaymentState((prevState) => prevState-1);
    }

    const progressState = () => {
        setPaymentState((prevState) => prevState+1);
    }

    const handlePayersDataChange = (payersData: PayersData) => {
        setPayersData(payersData)
        progressState()
    };

    const handleCreditCardDataChange = (creditCard: CreditCard) => {
        if (payersData != null) {
            payBill(creditCard, payersData, 157.31, utility.id)
        }
        progressState()
    };

    const handleGoToMainScreen = () => {
        navigate(`/`);
    };

    return (
        <div className="w-full bg-white rounded-lg border p-8 flex flex-row justify-between">
            <div className="w-2/3 flex flex-col">
                <label className="ml-2 font-semibold text-2xl line-clamp-2 mb-10">{utility.name}</label>
                {paymentState === PaymentState.Success ? (
                    <SuccessView onGoToMainScreenClick={handleGoToMainScreen}/>
                ) : <div className="flex flex-col">
                    <div className="w-full flex justify-center mb-12">
                        <div className="w-[32rem]">
                            <div className="overflow-hidden rounded-full bg-gray-200 ">
                                <div className={`h-2 rounded-full bg-blue-500 transition-all duration-500 ${
                                    paymentState === PaymentState.Details ? 'w-4' :
                                        paymentState === PaymentState.Bill ? 'w-1/2' :
                                            'w-full'
                                }`}></div>
                            </div>

                            <ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
                                <li className="flex items-center justify-start text-blue-600 sm:gap-1.5">
                                    <span className="hidden sm:inline"> Деталі </span>

                                    <svg
                                        className="size-6 sm:size-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                        />
                                    </svg>
                                </li>

                                <li className={`flex items-center justify-center sm:gap-1.5 transition-all duration-500 ${
                                    paymentState === PaymentState.Bill || paymentState === PaymentState.Payment ?'text-blue-600' : null
                                }`}>
                                    <span className="hidden sm:inline"> Рахунок </span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"/>
                                    </svg>

                                </li>

                                <li className={`flex items-center justify-end sm:gap-1.5 transition-all duration-500 ${
                                    paymentState === PaymentState.Payment ? 'text-blue-600' : null
                                }`}>
                                    <span className="hidden sm:inline"> Оплата </span>

                                    <svg
                                        className="size-6 sm:size-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                        />
                                    </svg>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="w-full flex justify-center pr-8">
                        {paymentState === PaymentState.Details ? (
                            <PayersDataForm onContinueClick={handlePayersDataChange}/>
                        ) : paymentState === PaymentState.Bill ? (
                            <BillDataView onContinueClick={progressState} onBackClick={goBackState}/>
                        ) : paymentState === PaymentState.Payment ? (
                            <PaymentDataForm onPayClick={handleCreditCardDataChange} onBackClick={goBackState}/>
                        ) : null}
                    </div>
                </div>
                }
            </div>
            <div className="w-1/3 flex flex-col rounded-md border bg-white p-8 pt-10 pb-4 shadow-sm">
                {region !== null ? (
                    <div className="w-full flex flex-col">
                        <div className="w-full flex justify-center mb-4">
                            <div className="rounded-xl p-4 bg-gray-50">
                                <img src={region.imageUrl} alt="Logo" className="w-12 h-14"/>
                            </div>
                        </div>
                        <label className="font-semibold text-lg line-clamp-2">Область</label>
                        <p className="text-md line-clamp-2 mb-4">{region.name}</p>
                    </div>
                ) : (<></>)}
                <label className="font-semibold text-lg line-clamp-2">Постачальник послуг</label>
                <p className="text-md line-clamp-2 mb-4">{utility.name}</p>
                <label className="font-semibold text-lg line-clamp-2">Контакти</label>
                {utility.phoneNumbers.map((phoneNumber) => (
                    <p className="text-md line-clamp-2 mb-2">{phoneNumber}</p>
                ))}
            </div>
        </div>
    );
}

enum PaymentState {
    Details, Bill , Payment, Success
}

export default PaymentBlock;
