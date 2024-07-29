import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './views/header/header';
import UtilityPayBody from "./views/body/utility_pay_body";
import ProfileBody from "./views/body/profile_body";
import {AuthProvider} from "./context/authContex";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Header/>
                <Routes>
                    <Route path="/*" element={<UtilityPayBody/>}/>
                    <Route path="/profile/*" element={<ProfileBody/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
