import Navbar from "../../components/navbar/Navbar";
import { RythmeContext } from "../../shared/contexts/RythmeContext";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MyConcertsPage.scss";

export default function MyConcertsPage() {
  const { events } = useContext(RythmeContext);

  return (
    <>

      <header className="head-bar">
        <p className="head-bar__p">Conciertos</p>
      </header>
      <div className="b-event">
        <NavLink to="/#" className="b-event__btn" style={({ isActive }) => ({ "background": isActive ? "var(--button-color-3)" : "var(--button-color-1)" })}>
          Voy a ir
        </NavLink>
        <NavLink to="/#" className="b-event__btn">Interesado</NavLink>
      </div>
      <section className="b-galleryevents">
        {events.map((event) => (
          <div key={event._id} className="b-eventgallery">
            {event.artist && event.artist[0] && (
              <>
                <img className="b-eventgallery__img" src={event.artist[0].image} alt={event.artist[0].name} />

                <div className="b-eventgallery__info">
                  <div className="b-eventgallery__header">
                    <h4 className="b-eventgallery__name">{event.artist[0].name}</h4>
                    <p className="b-eventgallery__price">{event.hall[0].date}</p>
                    <p className="b-eventgallery__price">{event.price}</p>
                  </div>
                  <div className="b-eventgallery__moreinfo">
                    <p className="b-eventgallery__genres">{event.assistants}</p>
                    <p className="b-eventgallery__friends">amigos</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </section>
    </>
  )
  
}


