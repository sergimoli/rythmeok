import "./FriendsPage.scss";
import ChatExample from "../../assets/images/chatexample.png";
import ChatExample1 from "../../assets/images/chatexample1.png";
import Navbar from "../../components/navbar/Navbar";
import { RythmeContext } from "../../shared/contexts/RythmeContext";
import { useContext } from "react";
import FanClubPage from "../fanClubPage/FanClubPage";


export default function FriendsPage() {
    const { userLocal } = useContext(RythmeContext);

    return (
        <>
            {userLocal.role === "vip" || userLocal.role === "admin" ?
                <>
                    <header className="head-bar">
                        <p className="head-bar__p">Amigos</p>
                    </header>
                    <section className="container-body">
                        <div className="chat-container">
                            <img className="chat-container__img" src={ChatExample} alt="chat_example" />
                            <img className="chat-container__img" src={ChatExample1} alt="chat_example1" />
                            <img className="chat-container__img" src={ChatExample} alt="chat_example" />
                            <img className="chat-container__img" src={ChatExample1} alt="chat_example1" />
                            <img className="chat-container__img" src={ChatExample} alt="chat_example" />
                            <img className="chat-container__img" src={ChatExample1} alt="chat_example1" />
                        </div>
                    </section>
                    <Navbar />
                </>
                : <FanClubPage />
            }
        </>
    )
}
