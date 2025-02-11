import * as React from 'react';
import Dashboard from "./dashboard/Dashboard";
import MarketingPage from "./marketing-page/MarketingPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default function App() {
    return (<>
        <Router>
            <Routes>
                <Route path="/" element={<MarketingPage/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>
    </>);
}
