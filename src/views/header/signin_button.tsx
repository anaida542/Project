import React, {useState} from "react";
import Utility from "../../data/models/utility";

interface SignInButton {
  onSignInButtonClick: () => void;
}

function SignInButton({onSignInButtonClick}: SignInButton) {

  return <button
      className="text-sm border rounded-lg p-1 flex w-20 h-8 items-center justify-center cursor-pointer hover:border-black"
      type="button"
      onClick={onSignInButtonClick}
  >
    Увійти
  </button>
}

export default SignInButton;
