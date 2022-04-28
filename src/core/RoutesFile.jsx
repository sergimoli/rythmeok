import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
/* import LoginPage from "../pages/LoginPage/LoginPage"; */
import FanClubPage from "../pages/fanClubPage/FanClubPage";
import TicketsPage from "../pages/ticketsPage/TicketsPage";
import ConfigurationPage from "../pages/configuration/ConfigurationPage";
import MyConcertsPage from "../pages/myConcertsPage/MyConcertsPage";
import RythmeContextProvider from '../shared/contexts/RythmeContext';

export default function RoutesFile() {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="/login" />} /> */}
            <Route path="/home" element={<RythmeContextProvider><HomePage /></RythmeContextProvider>} />
            <Route path="/register" element={<RegisterPage />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/fanclub" element={<FanClubPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/configuration" element={<ConfigurationPage />} />
            <Route path="/concerts" element={<MyConcertsPage />} />
        </Routes>
    )
}
