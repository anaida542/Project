import React from "react";

interface ProfileButton {
    onProfileButtonClick: () => void;
}
function ProfileButton({onProfileButtonClick}: ProfileButton) {
    return <button
        className="text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-48 h-8 flex items-center justify-center cursor-pointer focus:outline-none focus:shadow-outline"
        type="button"
        onClick={onProfileButtonClick}
    >
        Особистий кабінет
    </button>
}

export default ProfileButton;
