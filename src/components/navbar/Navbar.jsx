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
                <NavLink to="/tickets"><img className="nav-container__links--img" src={ticket} alt="ticket" /></NavLink>
                <NavLink to="/friends"><img className="nav-container__links--img" src={friends} alt="friends" /></NavLink>
                <NavLink to="/home"><img className="nav-container__links--img" src={home} alt="home" /></NavLink>
                <NavLink to="/concerts"><img className="nav-container__links--img" src={note} alt="note" /></NavLink>
                <NavLink to="/configuration"><img className="nav-container__links--img" src={config} alt="config" /></NavLink>
            </div>
        </nav>
    )
}

