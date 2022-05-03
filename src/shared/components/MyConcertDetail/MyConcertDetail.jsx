import React, { useState } from "react";
import "./MyConcertDetail.scss";
import eurIcon from "../../../assets/icons/euro_symbol.svg";
import cross from "../../../assets/icons/cancel_cross.svg";
import clockIcon from "../../../assets/icons/clock.svg";
import QRCode from "react-qr-code";
import MyConcertsPage from "../../../pages/myConcertsPage/MyConcertsPage";

export default function MyConcertDetail({ event }) {
  const [ back, setBack ] = useState(false);

  return (

    <>
      {back ? (
        <MyConcertsPage />
      ) : (
        <>
          <div className="b-icon">
            <img
              className="b-icon__x"
              src={cross}
              alt="close"
              onClick={() => {
                setBack(true);
              }}
            ></img>
          </div>
          <div className="b-fullcontainer">
            <div >
              <div className="b-detail">
                <div>
                  <img
                    className="b-detail__face"
                    src={event.artist[ 0 ].image}
                    alt={event.artist[ 0 ].name}
                  />
                </div>
                <div className="b-detail__data">
                  <h4 className="b-detail__title">{event.artist[ 0 ].name}</h4>
                  <h6 className="b-detail__date">{event.date}</h6>
                  <div className="b-clock">
                    <img
                      className="b-clock__icon"
                      src={clockIcon}
                      alt="clockIcon"
                    />
                    <p className="b-timedate__time">{event.time}</p>
                  </div>


                  <div className="b-price">
                    <img
                      className="b-price__euro"
                      src={eurIcon}
                      alt="EurIcon"
                    />
                    <p className="b-price__money">{event.price}</p>
                  </div>

                </div>
              </div>
            </div>
            <div>
              <div className="b-resum">
                <h4 className="">{event.artist[ 0 ].name}</h4>
                <p className="">{event.hall[ 0 ].name}</p>
                <p className="">{event.hall[ 0 ].address}</p>
                <p className="">{event.hall[ 0 ].cp}</p>
                <p className="">{event.hall[ 0 ].city}</p>

                <div className="b-qr">
                  <QRCode value="Hola Mundo" size={100} bgColor="#282c34" fgColor="#fff" level="H" />
                </div>
              </div>
            </div>
            <div className="b-butttons">
              <button className="b-butttons__download">
                Descargar
              </button>
              <button className="b-butttons__save">Guardar en Wallet</button>
            </div>
          </div>
        </>
      )}
    </>
  );

}
