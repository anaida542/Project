import React, {useEffect, useState} from "react"
import Address from "../../../../data/models/payers_data/address";
import {getAddressesForUser} from "../../../../api/user";
import SavedAddressItem from "./saved_address_item";

interface SavedAddressesList {
}

function SavedAddressesList() {

    const [addressList, setAddressList] = useState<Array<Address>>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const list = await getAddressesForUser();
                setAddressList(list);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="w-full h-full flex-row gap-5">
            {addressList.map((address) => (
                <>
                    <SavedAddressItem address={address}></SavedAddressItem>
                    <div className="w-full flex flex-col items-center">
                        <div className="h-[2px] w-5/6 bg-blue-100"></div>
                    </div>
                </>
            ))}
        </div>
    );
}

export default SavedAddressesList;
