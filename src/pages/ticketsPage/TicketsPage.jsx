import { RythmeContext } from "../../shared/contexts/RythmeContext";
import { useContext, useState } from "react";
import "./TicketsPage.scss";
import TicketsDetail from "../../shared/components/Tickets/TicketsDetail/TicketsDetail";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

export default function TicketsPage() {
    const { events } = useContext(RythmeContext);
    const [ check, setCheck ] = useState(false);
    const [ artist, setArtist ] = useState([]);
    const [ event, setEvent ] = useState([]);

    return (
        <>
            {check ? (
                <TicketsDetail artist={artist} event={event} />
            ) : (
                <>
                    <header className="head-bar">
                        <p className="head-bar__p">Entradas</p>
                    </header>
                    <div className="b-ticket">
                        <NavLink to="#" className="b-ticket__btn">Artistas</NavLink>
                        <NavLink to="/tickets" className="b-ticket__btn" style={({ isActive }) => ({ "background": isActive ? "var(--button-color-3)" : "var(--button-color-1)" })}>
                            Eventos
                        </NavLink>
                        <NavLink to="#" className="b-ticket__btn">Salas</NavLink>
                    </div>
                    <h1 className="b-titledate">08 Noviembre 2019</h1>
                    <section className="b-galleryticket">
                        {events.map((event) => (
                            <div key={event._id} className="b-ticketgallery">
                                {event.artist && event.artist[ 0 ] && (
                                    <>
                                        <img className="b-ticketgallery__img" src={event.artist[ 0 ].image} alt={event.artist[ 0 ].name} />

                                        <div className="b-ticketgallery__info">
                                            <div className="b-ticketgallery__header">
                                                <p className="b-ticketgallery__hall">{event.hall[ 0 ].name}</p>

                                                <p className="b-ticketgallery__address">{event.hall[ 0 ].address}</p>
                                            </div>

                                            <div className="b-ticketgallery__extrainfo">
                                                <h4 className="b-ticketgallery__name">{event.artist[ 0 ].name}</h4>
                                                <button
                                                    className="b-ticketgallery__btn"
                                                    onClick={() => {
                                                        setCheck(true);
                                                        setArtist(event.artist[ 0 ]);
                                                        setEvent(event)
                                                    }}>
                                                    Comprar
                                                </button>
                                            </div>
                                            <div className="b-ticketgallery__footer">
                                                <div className="b-genre">
                                                    {event.artist[ 0 ].genres && event.artist[ 0 ].genres.map((genre, i) => (<p key={i} className="b-ticketgallery__genres">{genre}</p>))}
                                                </div>
                                                <div className="b-ticketgallery__moreinfo">
                                                    <p className="b-ticketgallery__genres">Asistiran</p>
                                                    <p className="b-ticketgallery__friends">amigos</p>
                                                    <p className="b-ticketgallery__price">${event.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </section>
                </>
            )}
            <Navbar />
        </>
    );
}
