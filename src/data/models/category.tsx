import {
    Flame, Flash, Home, Thermometer, Water,
} from "react-ionicons";
import React from "react";

export enum Category {
    Electricity = "Electricity", Water = "Water", Gas = "Gas", Heating = "Heating", Other = "Other"
}

export function getFilledCategoryIcon(category: Category) {
    switch (category) {
        case Category.Electricity:
            return <div
                className="bg-yellow-400 rounded-md flex justify-center items-center min-w-10 min-h-10 opacity-70">
                <Flash
                    color={'#ffffff'}
                       height="1.8rem"
                       width="1.8rem"
                />
            </div>;
        case Category.Water:
            return <div
                className="bg-blue-400 rounded-md flex justify-center items-center min-w-10 min-h-10 opacity-70">
                <Water
                    color={'#ffffff'}
                    height="1.8rem"
                    width="1.8rem"
                />
            </div>;
        case Category.Gas:
            return <div
                className="bg-orange-600 rounded-md flex justify-center items-center min-w-10 min-h-10 opacity-70">
                <Flame
                    color={'#ffffff'}
                    height="1.8rem"
                    width="1.8rem"
                />
            </div>;
        case Category.Heating:
            return <div
                className="bg-amber-500 rounded-md flex justify-center items-center min-w-10 min-h-10 opacity-70">
                <Thermometer
                    color={'#ffffff'}
                    height="1.8rem"
                    width="1.8rem"
                />
            </div>;
        case Category.Other:
            return <div
                className="bg-green-800 rounded-md flex justify-center items-center min-w-10 min-h-10 opacity-70">
                <Home
                    color={'#ffffff'}
                    height="1.8rem"
                    width="1.8rem"
                />
            </div>;
        default:
            return <div
                className="bg-green-800 rounded-md flex justify-center items-center min-w-10 min-h-10 opacity-80">
                <Home
                    color={'#ffffff'}
                    height="1.8rem"
                    width="1.8rem"
                />
            </div>;
    }
}
