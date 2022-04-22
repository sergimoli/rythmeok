import './Navbar.scss';
import ticket from "../../assets/images/events.svg";
import friends from "../../assets/images/friends.svg";
import home from "../../assets/images/home.svg";
import note from "../../assets/images/note.svg";
import config from "../../assets/images/config.svg";


export default function Navbar() {
    return (
        <nav className="nav-container">
            <div className="nav-container__links">
                <img className="nav-container__links--img" src={ticket} alt="ticket" />
                <img className="nav-container__links--img" src={friends} alt="friends" />
                <img className="nav-container__links--img" src={home} alt="home" />
                <img className="nav-container__links--img" src={note} alt="note" />
                <img className="nav-container__links--img" src={config} alt="config" />
            </div>
        </nav>
    )
}