import * as React from 'react';
import Dashboard from "./dashboard/Dashboard";
import MarketingPage from "./marketing-page/MarketingPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignInPage from "./auth/signin/SignInPage";
import SignUpPage from "./auth/signup/SignUpPage";
import ForgotPassword from "./auth/forgot-password/ForgotPassword";

export default function App() {
    return (<>
        <Router>
            <Routes>
                <Route path="/" element={<MarketingPage/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/sign-in" element={<SignInPage/>}/>
                <Route path="/sign-up" element={<SignUpPage/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
            </Routes>
        </Router>
    </>);
}
