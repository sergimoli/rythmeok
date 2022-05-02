import React, { useState } from "react";
import SynchroProcess2 from "../synchroProcess2/SynchroProcess2";
import "./SynchroProcess1.scss";

export default function SynchroProcess1() {
  const [syncro, setSyncro] = useState(false);
  return (
    <>
      {syncro ? (
        <SynchroProcess2></SynchroProcess2>
      ) : (
        <>
          <div className="b-main">
            <img
              className="b-main__logo"
              src={
                "https://res.cloudinary.com/dahswyr0k/image/upload/v1651237909/RITHMEOK/streams/SpotifyLogoToSyncronize_xg2nn7.svg"
              }
              alt="Spotify logo"
            />
            <h2 className="b-main__logo__h2">
              ¿Quieres sincronizar tus preferencias musicales con Spotify?
            </h2>
            <button className="b-btn__logo" onClick={() => setSyncro(true)}>
              Sincronizar con Spotify
            </button>
            <a className="b-link_register" href="/home">
              Más tarde
            </a>
          </div>
        </>
      )}
    </>
  );
}
