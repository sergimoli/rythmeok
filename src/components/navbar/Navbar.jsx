import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import ticket from "../../assets/images/events.svg";
import friends from "../../assets/images/friends.svg";
import home from "../../assets/images/home.svg";
import note from "../../assets/images/note.svg";
import config from "../../assets/images/config.svg";

export default function Navbar() {
    return (
        <nav className="nav-container">
            <div className="nav-container__links">
                <NavLink style={({ isActive }) => ({ filter: isActive ? "invert(100%) sepia(39%) saturate(3254%) hue-rotate(62deg) brightness(88%) contrast(102%)" : "none" })} to="/tickets"><img className="nav-container__links--img" src={ticket} alt="ticket" /></NavLink>
                <NavLink style={({ isActive }) => ({ filter: isActive ? "invert(100%) sepia(39%) saturate(3254%) hue-rotate(62deg) brightness(88%) contrast(102%)" : "none" })} to="/friends"><img className="nav-container__links--img" src={friends} alt="friends" /></NavLink>
                <NavLink style={({ isActive }) => ({ filter: isActive ? "invert(100%) sepia(39%) saturate(3254%) hue-rotate(62deg) brightness(88%) contrast(102%)" : "none" })} to="/home"><img className="nav-container__links--img" src={home} alt="home" /></NavLink>
                <NavLink style={({ isActive }) => ({ filter: isActive ? "invert(100%) sepia(39%) saturate(3254%) hue-rotate(62deg) brightness(88%) contrast(102%)" : "none" })} to="/concerts"><img className="nav-container__links--img" src={note} alt="note" /></NavLink>
                <NavLink style={({ isActive }) => ({ filter: isActive ? "invert(100%) sepia(39%) saturate(3254%) hue-rotate(62deg) brightness(88%) contrast(102%)" : "none" })} to="/configuration"><img className="nav-container__links--img" src={config} alt="config" /></NavLink>
            </div>
        </nav>
    )
}

