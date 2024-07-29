import React, {ChangeEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {signIn, signUp} from "../../../api/authentication";
import {useAuth} from "../../../context/authContex";

interface SignIn {

}

function SignIn({}: SignIn) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { authToken, setAuthToken, removeAuthToken } = useAuth();

    const handleSignUpButtonClick = () => {
        navigate(`/profile/signUp`, {replace: true});
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const token = await signIn(email, password);
        if (token) {
            setAuthToken(token)
            navigate(`/profile`, {replace: true});
        } else {
            console.error("Error while signingIp");
        }
    };

    return (
        <div className="w-full bg-white rounded-lg border p-8 flex flex-col justify-between">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="text-4xl text-red-500 font-extrabold w-full text-center">UP</h1>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Вхід у
                        ваш акаунт</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <div>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mb-4 rounded-md border h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-500"
                                id="email" name="email" type="email" autoComplete="email"
                                placeholder="Електронна адреса" required/>
                        </div>

                        <div>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mb-4 rounded-md border h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-500"
                                id="password" name="password" type="password" autoComplete="current-password"
                                placeholder="Пароль" required/>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 h-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                            >
                                Увійти
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-500">
                        Немає акаунту?
                        <a
                           className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
                        onClick={handleSignUpButtonClick}>Зареєструватись</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
