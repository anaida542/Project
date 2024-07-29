import React from "react";
import SignInButton from "./signin_button";

interface SignUpButton {
    onSignUpButtonClick: () => void;
}
function SignUpButton({onSignUpButtonClick}: SignUpButton) {
  return <button
      className="text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-40 h-8 flex items-center justify-center cursor-pointer focus:outline-none focus:shadow-outline"
      type="button"
      onClick={onSignUpButtonClick}
  >
      Реєстрація
  </button>
}

export default SignUpButton;
