import React, { useState } from "react";
import SynchroProcess2 from "../synchroProcess2/SynchroProcess2";
import "./SynchroProcess1.scss";
import axios from "axios";
import { Link } from "react-router-dom";
const baseURL = process.env.REACT_APP_BACK_URL;

export default function SynchroProcess1() {
  const [ syncro, setSyncro ] = useState(false);
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const [ artist, setArtist ] = useState(null);

  const onSyncro = () => {
    if (userLocal) {
      const getUser = async () => {
        if (userLocal) {
          const res = await axios.get(baseURL + `/users/${userLocal._id}`);
          setArtist(res.data.purchases[ 0 ].artist[ 0 ].name);
        }
      };
      getUser();
    }
    setSyncro(true);
  };

  return (
    <>
      {syncro ? (
        <SynchroProcess2 artista={artist} />
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
            <button className="b-btn__logo" onClick={() => onSyncro()}>
              Sincronizar con Spotify
            </button>
            <Link className="b-link_register" to="/home">
              Más tarde
            </Link>
          </div>
        </>
      )}
    </>
  );
}
