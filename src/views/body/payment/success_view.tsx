import React, { useState, useEffect } from "react";

interface SuccessViewProps {
    onGoToMainScreenClick: () => void;
}

function SuccessView({ onGoToMainScreenClick }: SuccessViewProps) {
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpinner(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleGoToMainScreenClick = () => {
        onGoToMainScreenClick();
    };

    return (
        <div className="w-full h-[20rem] flex flex-col justify-center items-center">
            {showSpinner ? (
                <div className="relative">
                    <div className="h-16 w-16 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div
                        className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-green-600">
                        <path fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                              clipRule="evenodd"/>
                    </svg>
                    <label className="font-semibold text-4xl mb-8 text-green-900">Успіх</label>
                    <button
                        className="w-40 bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleGoToMainScreenClick}
                    >
                        На головну
                    </button>
                </div>
            )}
        </div>
    );
}

export default SuccessView;
