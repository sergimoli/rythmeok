import { RythmeContext } from "../../shared/contexts/RythmeContext";
import { useContext } from "react";

import "./TicketsPage.scss";

export default function TicketsPage() {
  const { artists, waves, styles, halls, magazines, events } =
    useContext(RythmeContext);
  console.log(artists);

  return (
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

      <div className="b-ticketgallery">
        <img
          className="b-ticketgallery__img"
          src={artists[0]?.image}
          alt={artists[0]?.name}
        />
        <div>
          <div className="text2">
            <p className="b-ticketgallery__hall">{halls[10].name}</p>

            <p className="b-ticketgallery__address">{halls[0].address}</p>
          </div>
          <div className="text1">
            <h4 className="b-ticketgallery__name">{artists[0].name}</h4>
            <button className="b-ticketgallery__btn">Comprar</button>
          </div>
          <div className="nombre_columna">
            <p className="b-ticketgallery__genres">{artists[0].genres}</p>
            <div className="flex">
              
              <p className="b-ticketgallery__genres">Asistiran</p>
              <p className="b-ticketgallery__friends">amigos</p>
              <p className="b-ticketgallery__price">${events[0].price}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="b-ticketgallery">
        <img
          className="b-ticketgallery__img"
          src={artists[1]?.image}
          alt={artists[1]?.name}
        />
        <div>
          <div className="text2">
            <p className="b-ticketgallery__hall">{halls[1].name}</p>

            <p className="b-ticketgallery__address">{halls[1].address}</p>
          </div>
          <div className="text1">
            <h4 className="b-ticketgallery__name">{artists[1].name}</h4>
            <button className="b-ticketgallery__btn">Comprar</button>
          </div>
          <div className="nombre_columna">
            <p className="b-ticketgallery__genres">{artists[1].genres}</p>
            <div className="flex">
              
              <p className="b-ticketgallery__genres">Asistiran</p>
              <p className="b-ticketgallery__friends">amigos</p>
              <p className="b-ticketgallery__price">${events[1].price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
