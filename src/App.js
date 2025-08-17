import React, {lazy, Suspense} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from "./components/Header";

const AIMHubLazy  = lazy(() => import("./components/AIMHubApp"));
const FTLazy = lazy(() => import("./components/FTApp"));

const HostDashboard = () => {
    <div styles={{ padding: "20px" }}>
        <h1>Host Dashboard</h1>
        <p>This is the host dashboard where you can manage your micro frontends.</p>    
    </div>;
}

const App = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
            <Route path="/aimhub/*" element={<AIMHubLazy />} />
            <Route path="/ft/*" element={<FTLazy />} />
            <Route path="/dashboard" element={<HostDashboard />} />
            <Route path="/" element={<Navigate to="/aimhub" replace />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;