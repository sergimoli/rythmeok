import React from "react";
import "./SynchroStream.scss";
import { useState } from "react";
import SynchroProcess1 from "../synchroProcess1/SynchroProcess1";
import Navbar from "../navbar/Navbar";

export default function SynchroStream() {
  const [ syncro, setSyncro ] = useState(false);
  return (
    <>
      {syncro ? (
        <SynchroProcess1></SynchroProcess1>
      ) : (
        <>
          <header className="head-bar">
              <p className="head-bar__p">Configuración</p>
            </header>
          <div className="b-contSyncro" id="syncro">
            <div className="col" id="Img">
              <h1 className="b-contSyncro__title">Sincroniza tu música y tus plataformas</h1>
              <div className="b-contSyncro__1">
                <div className="b-contSyncro__divlogo">
                <img 
                  className="b-contSyncro__logo"
                  onClick={() => setSyncro(true)}
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225154/RITHMEOK/streams/Spotify_rfkqoy.svg"
                  alt="spotify logo"
                  
                />
                </div>
                <div className="b-contSyncro__divlogo">
                <img
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225154/RITHMEOK/streams/Appl_yv2xdk.svg"
                  alt="apple logo"
                  className="b-contSyncro__logo"
                />
                </div>
              </div>
              <div className="b-contSyncro__1">
              <div className="b-contSyncro__divlogo">
                <img
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225154/RITHMEOK/streams/deezer_rxztjg.svg"
                  alt="deezer logo"
                  className="b-contSyncro__logo"
                />
                </div>
                <div className="b-contSyncro__divlogo">
                <img
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225154/RITHMEOK/streams/Tidal_dlndsd.svg"
                  alt="Tidal logo"
                  className="b-contSyncro__logo"
                />
                </div>
              </div>
              <div className="b-contSyncro__1">
              <div className="b-contSyncro__divlogo">
                <img
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225156/RITHMEOK/streams/youtube_o2yksi.svg"
                  alt="youtube logo"
                  className="b-contSyncro__logo"
                />
                </div>
                <div className="b-contSyncro__divlogo">
                <img
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225154/RITHMEOK/streams/googleplay_zgvapf.svg"
                  alt="google play logo"
                  className="b-contSyncro__logo"
                />
                </div>
              </div>
              <div className="b-contSyncro__1">
              <div className="b-contSyncro__divlogo">
                <img
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225156/RITHMEOK/streams/amazonmusic_cfwpwq.svg"
                  alt="amazon logo"
                  className="b-contSyncro__logo"
                />
                </div>
                <div className="b-contSyncro__divlogo">
                <img
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225154/RITHMEOK/streams/soundcloud_hbb8gn.svg"
                  alt="sound cloud logo"
                  className="b-contSyncro__logo"
                />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Navbar />
    </>
  );
}
