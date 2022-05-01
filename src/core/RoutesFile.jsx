import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage"
import FanClubPage from "../pages/fanClubPage/FanClubPage";
import TicketsPage from "../pages/ticketsPage/TicketsPage";
import ConfigurationPage from "../pages/configuration/ConfigurationPage";
import MyConcertsPage from "../pages/myConcertsPage/MyConcertsPage";
import FriendsPage from "../pages/friendsPage/FriendsPage";
import RequireAuth from "../shared/components/RequireAuth/RequireAuth";
import { useContext } from "react";
import { JwtContext } from "../shared/contexts/JwtContext";
import "./RouteFiles.scss";
import Logo from "../assets/images/Logo.png";

export default function RoutesFile() {
    const { jwt } = useContext(JwtContext);

    return (
        <>
            {!jwt &&
                <nav className='register-nav'>
                    <img className="register-nav__logo" src={Logo} alt="rythmelogo" />
                    <NavLink className="register-nav__b-btn" to="/register">Register</NavLink>
                    <NavLink className="register-nav__b-btn" to="/login">Login</NavLink>
                </nav>
            }
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />

                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="/home" element={<RequireAuth> <HomePage /></RequireAuth>} />
                <Route path="/fanclub" element={<RequireAuth><FanClubPage /></RequireAuth>} />
                <Route path="/tickets" element={<RequireAuth><TicketsPage /></RequireAuth>} />
                <Route path="/configuration" element={<RequireAuth><ConfigurationPage /></RequireAuth>} />
                <Route path="/concerts" element={<RequireAuth><MyConcertsPage /></RequireAuth>} />
                <Route path="/friends" element={<RequireAuth><FriendsPage /></RequireAuth>} />
            </Routes>
        </>
    )
}
