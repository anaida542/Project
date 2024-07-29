import {useLocation} from "react-router-dom";
import Utility from "../../../../data/models/utility";
import React, {ChangeEvent, useState} from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../../../../shadcn_ui/components/ui/tabs";
import UtilityItem from "../../utility_grid/utility_item";
import PayersData from "../../../../data/models/payers_data/payers_data";
import PersonalAccount from "../../../../data/models/payers_data/personal_account";
import Address from "../../../../data/models/payers_data/address";
import {useAuth} from "../../../../context/authContex";
import {saveAddress} from "../../../../api/user";

interface PayersDataForm {
    onContinueClick: (payersData: PayersData) => void;
}

function PayersDataForm({onContinueClick}: PayersDataForm) {

    const {authToken, setAuthToken, removeAuthToken} = useAuth();

    const [showApartmentInput, setShowApartmentInput] = useState(true);
    const [personalAccount, setPersonalAccount] = useState('');
    const [showPersonalAccountErrors, setShowPersonalAccountErrors] = useState(false);
    const [city, setCity] = useState('');
    const [showCityErrors, setShowCityErrors] = useState(false);
    const [street, setStreet] = useState('');
    const [showStreetErrors, setShowStreetErrors] = useState(false);
    const [house, setHouse] = useState('');
    const [showHouseErrors, setShowHouseErrors] = useState(false);
    const [apartment, setApartment] = useState<string | null>(null);
    const [saveAddressState, setSaveAddressState] = useState<boolean>(false);

    const handleShowApartmentCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setShowApartmentInput(!event.target.checked);
    };

    const handleSaveAddressCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSaveAddressState(event.target.checked);
    };

    const handlePersonalAccountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setShowPersonalAccountErrors(false)
        const input = event.target.value.replace(/\D/g, '');
        setPersonalAccount(input);
    };

    const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
        setShowCityErrors(false)
        setCity(event.target.value);
    };

    const handleStreetChange = (event: ChangeEvent<HTMLInputElement>) => {
        setShowStreetErrors(false)
        setStreet(event.target.value);
    };

    const handleHouseChange = (event: ChangeEvent<HTMLInputElement>) => {
        setShowHouseErrors(false)
        setHouse(event.target.value);
    };

    const handleApartmentChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value.replace(/\D/g, '');
        setApartment(input.length != 0 ? input : null);
    };
    const handleContinueWithPersonalAccountClick = () => {
        if (personalAccount.length != 10) {
            setShowPersonalAccountErrors(true)
        } else {
            const payersData: PayersData = new PersonalAccount(personalAccount);
            onContinueClick(payersData);
        }
    };

    const handleContinueWithAddressClick = () => {
        let hasError = false
        if (city.length == 0) {
            setShowCityErrors(true)
            hasError = true
        }
        if (street.length == 0) {
            setShowStreetErrors(true)
            hasError = true
        }
        if (house.length == 0) {
            setShowHouseErrors(true)
            hasError = true
        }
        if (!hasError) {
            const address = new Address(city, street, house, apartment);
            const payersData: PayersData = address
            if (saveAddressState && authToken != null) {
                saveAddress(address)
            }
            onContinueClick(payersData);
        }
    };

    return (
        <Tabs defaultValue="personal_account" className="w-[28rem] ">
            <TabsList className="grid w-full grid-cols-2 mb-6 rounded-md">
                <TabsTrigger className="rounded-sm" value="personal_account">За особовим рахунком</TabsTrigger>
                <TabsTrigger className="rounded-sm" value="address">За адресою</TabsTrigger>
            </TabsList>
            <TabsContent value="personal_account">
                <form>
                    <input
                        className={`${showPersonalAccountErrors ? 'border-red-600 border-4 ' : 'border'} mb-4 rounded-md border h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-500`}
                        maxLength={10}
                        pattern="[0-9]*"
                        value={personalAccount}
                        onChange={handlePersonalAccountChange}
                        id="personal_account" type="text" placeholder="Номер особового рахунку"/>
                    <button
                        className="w-full bg-blue-500 h-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleContinueWithPersonalAccountClick}>
                        Продовжити
                    </button>
                </form>
            </TabsContent>
            <TabsContent value="address">
                <form>
                    <input
                        className={`${showCityErrors ? 'border-red-600 border-4 ' : 'border'} mb-4 rounded-md border h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-500`}
                        id="city" type="text" placeholder="Населений пункт"
                        value={city} onChange={handleCityChange}/>
                    <input
                        className={`${showStreetErrors ? 'border-red-600 border-4 ' : 'border'} mb-4 rounded-md border h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-500`}
                        id="street" type="text" placeholder="Вулиця"
                    value={street} onChange={handleStreetChange}/>
                    <div className="mb-4 flex flex-row w-full space-x-4">
                        <input
                            className={`${showHouseErrors ? 'border-red-600 border-4 ' : 'border'} rounded-md border h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-500`}
                            id="house" type="text" placeholder="Будинок"
                        value={house} onChange={handleHouseChange}/>
                        {showApartmentInput && (
                            <input
                                className="rounded-md border h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-500"
                                id="apartment" type="text" placeholder="Квартира"
                            value={apartment ? apartment : ''} onChange={handleApartmentChange}/>
                        )}
                    </div>
                    <div className="flex items-center mb-4">
                        <input id="private-house-checkbox" type="checkbox" value="" onChange={handleShowApartmentCheckboxChange}
                               className="w-5 h-5 border rounded-md"/>
                        <label htmlFor="private-house-checkbox" className="ms-2 text-sm font-medium text-gray-900">
                            Приватний будинок
                        </label>
                    </div>
                    {authToken != null && (
                        <div className="flex items-center mb-4">
                            <input id="save-address-checkbox" type="checkbox" value="" onChange={handleSaveAddressCheckboxChange}
                                   className="w-5 h-5 border rounded-md"/>
                            <label htmlFor="save-address-checkbox" className="ms-2 text-sm font-medium text-gray-900">
                                Зберегти адресу
                            </label>
                        </div>
                    )}
                    <button
                        className="w-full bg-blue-500 h-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleContinueWithAddressClick}
                    >
                        Продовжити
                    </button>
                </form>
            </TabsContent>
        </Tabs>
    );
}

export default PayersDataForm;
