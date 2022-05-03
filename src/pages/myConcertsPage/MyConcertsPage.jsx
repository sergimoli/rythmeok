import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MyConcertsPage.scss";
import axios from "axios";
import MyConcertDetail from "../../shared/components/MyConcertDetail/MyConcertDetail";
const baseURL = process.env.REACT_APP_BACK_URL;


export default function MyConcertsPage() {
  const [ user, setUser ] = useState([]);
  const userLocal = JSON.parse(localStorage.getItem('user'));
  const [viewDetail, setViewDetail] = useState(false);
  const [eventData, setEventData]= useState(null);
  

  useEffect(() => {
    if (userLocal) {
      const getUser = async () => {
        if (userLocal) {
          const res = await axios.get(baseURL + `/users/${userLocal._id}`);
          setUser(res.data);
        }
      };

      getUser();
    }
  }, []);

  console.log("usserr", user.purchases)
  return (
    <>
 {viewDetail ? (
        <MyConcertDetail event={eventData}/>
      ) : (
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
        {user.purchases &&
          <>
            {user.purchases.map((event) => (
              <div key={event._id} className="b-eventgallery">
                {event.artist && (
                  <>
                    <div className="b-galleryconcert">
                      <img className="b-galleryconcert__img" src={event.artist[ 0 ].image} alt={event.artist[ 0 ].name} />

                      <div onClick={()=> {
                               setViewDetail(true);
                               setEventData(event);
                                }} className="b-galleryconcert__info">
                        <div className="b-galleryconcert__header">
                          <h4 className="b-galleryconcert__name">{event.artist[ 0 ].name}</h4>
                          <p className="b-galleryconcert__date">{event.date}</p>
                          <p className="b-galleryconcert__time">{event.time} h</p>
                          <p className="b-galleryconcert__price">{event.price} €</p>
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
          </>
        }
      </section>
      <Navbar />
    </>
  )}
  </>
  );
}


