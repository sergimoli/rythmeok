import Navbar from "../../components/navbar/Navbar";
import { RythmeContext } from "../../shared/contexts/RythmeContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./MyConcertsPage.scss";


export default function MyConcertsPage() {
  const { user, events } = useContext(RythmeContext);
  console.log("test user", user.purchases);

  return (
    <>

      <header className="head-bar">
        <p className="head-bar__p">Conciertos</p>
      </header>
      <div className="b-event">
        <NavLink to="/#" className="b-event__btn1" style={({ isActive }) => ({ "background": isActive ? "var(--button-color-3)" : "var(--button-color-1)" })}>
          Voy a ir
        </NavLink>
        <NavLink to="/#" className="b-event__btn2">Interesado</NavLink>
      </div>
      <section className="b-galleryevents">
        {events.map((event) => (
          <div key={event._id} className="b-eventgallery">
            {event.artist && (
              <>
              <div className="b-gallery">
                <img className="b-gallery__img" src={event.artist[0].image} alt={event.artist[0].name} />

                <div className="b-gallery__info">
                  <div className="b-gallery__header">
                    <h4 className="b-gallery__name">{event.artist[0].name}</h4>
                    <p className="b-gallery__date">{event.date}</p>
                    <p className="b-gallery__time">{event.time} h</p>
                    <p className="b-gallery__price">{event.price} €</p>
                  </div>
                  </div>
                </div>
                <div className="b-moreinfo">
                    <p className="b-moreinfo__genres">{event.assistants} asistentes</p>
                    {/* <p className="b-moreinfo__friends"> amigos</p> */}
                  </div>
              </>
            )}
          </div>
        ))}
      </section>
      <Navbar/>
    </>
  )
  
}


