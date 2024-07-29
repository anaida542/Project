import React, { useEffect, useState } from "react";
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import {resolve} from "url";
import SignIn from "./sign_in/sign_in_block";
import SignUp from "./sign_up/sign_up_block";
import ProfileBlock from "./profile/profile_block";

function ProfileBody() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col px-64 min-h-screen h-full p-6 justify-start items-start bg-gray-100">
            <div className="w-full flex flex-row justify-between items-center">
                <label className="w-fit font-normal text-lg">
                    Особистий кабінет
                </label>
            </div>
            <div className="h-5"></div>
            <Routes>
                <Route path="/signIn" element={<SignIn/>} />
                <Route path="/signUp" element={<SignUp/>} />
                <Route path="/" element={<ProfileBlock/>} />
            </Routes>
        </div>
    );
}

export default ProfileBody;
