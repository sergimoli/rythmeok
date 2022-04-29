import { RythmeContext } from "../../shared/contexts/RythmeContext";
import { useContext, useState } from "react";
import "./TicketsPage.scss";
import TicketsDetail from "../../shared/components/Tickets/TicketsDetail/TicketsDetail";

export default function TicketsPage() {
  const { artists, halls, events } = useContext(RythmeContext);
  const [buy, setBuy] = useState(false);
  const [artist , setArtist] = [];
  return (
    <>
      {buy ? (
        <TicketsDetail artist={events.artist[0]} />
      ) : (
        <>
          <header className="head-bar">
            <p className="head-bar__p">Entradas</p>
          </header>
          <div className="b-button">
            <button className="b-button__home">Conciertos</button>
            <button className="b-button__home">Amigos</button>
            <button className="b-button__home">Fan Club</button>
          </div>
          <h1 className="b-titledate">08 Noviembre 2019</h1>

          {events.map((event) => (
            <div key={event._id} className="b-ticketgallery">
              {event.artist && event.artist[0] && (
                <>
                  <img
                    className="b-ticketgallery__img"
                    src={event.artist[0].image}
                    alt={event.artist[0].name}
                  />

                  <div>
                    <div className="text2">
                      <p className="b-ticketgallery__hall">
                        {event.hall[0]?.name}
                      </p>

                      <p className="b-ticketgallery__address">
                        {event.hall[0]?.address}
                      </p>
                    </div>

                    <div className="text1">
                      <h4 className="b-ticketgallery__name">
                        {event.artist[0]?.name}
                      </h4>
                      <button
                        className="b-ticketgallery__btn"
                        onClick={() => setBuy(true)}
                      >
                        Comprar
                      </button>
                    </div>
                    <div className="nombre_columna">
                      <p className="b-ticketgallery__genres">
                        {event.artist[0]?.genres}
                      </p>
                      <div className="flex">
                        <p className="b-ticketgallery__genres">Asistiran</p>
                        <p className="b-ticketgallery__friends">amigos</p>
                        <p className="b-ticketgallery__price">
                          ${event[0]?.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
}
