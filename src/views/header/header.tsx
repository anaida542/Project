import SignInButton from "./signin_button";
import SignUpButton from "./signup_button";
import Region from "../../data/models/region";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/authContex";
import ProfileButton from "./profile_button";

function Header() {
    const navigate = useNavigate();
    const { authToken, setAuthToken, removeAuthToken } = useAuth();

    const handleSignInButtonClick = () => {
        navigate(`/profile/signIn`);
    };

    const handleSignUpButtonClick = () => {
        navigate(`/profile/signUp`);
    };

    const handleProfileButtonClick = () => {
        navigate(`/profile`);
    };

    const handleOnLogoClick = () => {
        navigate(`/`);
    };

    return (
        <div className="flex flex-row px-64 justify-between py-2 items-center">
            <h1 className="text-4xl text-red-500 font-extrabold" onClick={handleOnLogoClick}>UP</h1>
            <div className="flex flex-row justify-start">
                {authToken == null ? (
                    <div className="flex flex-row">
                        <SignInButton onSignInButtonClick={handleSignInButtonClick} />
                        <div className="w-4"></div>
                        <SignUpButton onSignUpButtonClick={handleSignUpButtonClick} />
                    </div>
                ) : (
                    <ProfileButton onProfileButtonClick={handleProfileButtonClick} />
                )}
            </div>
        </div>
    );
}

export default Header;
