import { useState } from "react";
import "./TicketsDetail.scss";
import playIcon from "../../../../assets/icons/play_circle.svg";
import eurIcon from "../../../../assets/icons/euro_symbol.svg";
import pinDrop from "../../../../assets/icons/pin_drop.svg";
import micIcon from "../../../../assets/icons/mic.svg";
import noteIcon from "../../../../assets/icons/music_note.svg";
import backarrow from "../../../../assets/icons/back.svg";
import clockIcon from "../../../../assets/icons/clock.svg";
import TicketBuy from "../TicketBuy/TicketBuy";
import Maps from "../../../../components/maps/Maps";
import TicketsPage from "../../../../pages/ticketsPage/TicketsPage";

export default function TicketsDetail({ event }) {
  const [ back, setBack ] = useState(false);
  const [ check, setCheck ] = useState(false);

  return (
    <section>
      <>
        {check ? <TicketBuy event={event} /> :
          <>
            {back ? <TicketsPage /> :
              <>
                <img
                  className="head-back"
                  src={backarrow}
                  alt="back"
                  onClick={() => {
                    setBack(true);
                  }}
                ></img>
                <header className="head-bar">
                  <p className="head-bar__p">Entradas</p>
                </header>
                <div className="b-galleryDetail">
                  <div className="b-cont">
                    <div>
                      <img
                        className="b-cont__img"
                        src={event.artist[ 0 ].image}
                        alt={event.artist[ 0 ].name}
                      />
                    </div>
                    <div className="b-cont__nameinfo">
                      <h4 className="b-cont__name">{event.artist[ 0 ].name}</h4>
                      <h6 className="b-cont__date">{event.date}</h6>
                      <div className="b-cont__hour">
                        <img
                          className="b-cont__clock"
                          src={clockIcon}
                          alt="clockIcon"
                        />

                        <p className="b-cont__time">{event.time}</p>
                      </div>
                      <div className="b-cont__objects">
                        <div className="b-cont__eur">
                          <img
                            className="b-cont__eurIcon"
                            src={eurIcon}
                            alt="EurIcon"
                          />
                          <p className="b-cont__price">{event.price}</p>
                        </div>
                        <div>
                          <img
                            className="b-cont__playIcon"
                            src={playIcon}
                            alt="PlayIcon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="b-btn">
                    <button className="b-btn__buy" onClick={() => setCheck(true)}>
                      Comprar
                    </button>
                    <button className="b-btn__share">Compartir</button>
                  </div>
                  <div className="b-info1">
                    <img className="b-info1__pinDrop" src={pinDrop} alt="pinDrop" />
                    <p className="b-info1__text">{event.hall[ 0 ].name}</p>
                    <p className="b-info1__text">{event.hall[ 0 ].city}</p>
                  </div>
                  <div className="b-info2">
                    <img className="b-info2__micIcon" src={micIcon} alt="micIcon" />
                    <p className="b-info2__name">{event.artist[ 0 ].name}</p>
                  </div>
                  <div className="b-info3">
                    <img
                      className="b-info3__noteIcon"
                      src={noteIcon}
                      alt="noteIcon"
                    />
                    <p className="b-info3__genres">{event.artist[ 0 ].genres}</p>
                  </div>
                  <div className="b-info4">
                    <p className="b-info4__assistants">
                      {event.assistants} asistiran
                    </p>
                    <p className="b-info4__friends">{event.assistants} Amigos</p>
                  </div>
                  <div className="b-info5">
                    <p className="b-info5__description">
                      {event.artist[ 0 ].description}
                    </p>
                    {event.artist[ 0 ].crew.map((item, i) => (
                      <p className="b-info5__description" key={i}>
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="b-map">
                    <Maps
                      lat={event.hall[ 0 ].latitude}
                      lng={event.hall[ 0 ].longitude}
                    />
                  </div>
                </div>
              </>
            }
          </>
        }
      </>
    </section>
  );
}
