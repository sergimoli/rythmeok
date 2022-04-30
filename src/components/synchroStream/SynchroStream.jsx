import React from "react";
import "./SynchroStream.scss";
import { useState } from "react";
import SynchroProcess1 from "../synchroProcess1/SynchroProcess1";

export default function SynchroStream() {
  const [syncro, setSyncro] = useState(false);
  return (
    <>
      {syncro ? (
        <SynchroProcess1></SynchroProcess1>
      ) : (
        <>
          <div id="syncro">
            <div className="col" id="Img">
              <div className="row">
                <img
                  onClick={() => setSyncro(true)}
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225154/RITHMEOK/streams/Spotify_rfkqoy.svg"
                  alt="spotify logo"
                  className="image"
                />
                <img
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225154/RITHMEOK/streams/Appl_yv2xdk.svg"
                  alt="amazon logo"
                  className="image"
                />
              </div>
              <div className="row">
                <img
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225154/RITHMEOK/streams/deezer_rxztjg.svg"
                  alt="deezer logo"
                  className="image"
                />
                <img
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225154/RITHMEOK/streams/Tidal_dlndsd.svg"
                  alt="Tidal logo"
                  className="image"
                />
              </div>
              <div className="row">
                <img
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225156/RITHMEOK/streams/youtube_o2yksi.svg"
                  alt="youtube logo"
                  className="image"
                />
                <img
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225154/RITHMEOK/streams/googleplay_zgvapf.svg"
                  alt="google play logo"
                  className="image"
                />
              </div>
              <div className="row">
                <img
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225156/RITHMEOK/streams/amazonmusic_cfwpwq.svg"
                  alt="amazon logo"
                  className="image"
                />
                <img
                  src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651225154/RITHMEOK/streams/soundcloud_hbb8gn.svg"
                  alt="sound cloud logo"
                  className="image"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
