import React, { useState } from "react";
import SynchroProcess2 from "../synchroProcess2/SynchroProcess2";

export default function SynchroProcess1() {
  const [syncro, setSyncro] = useState(false);
  return (
    <>
      {syncro ? (
        <SynchroProcess2></SynchroProcess2>
      ) : (
        <>
          <div>
            <img
              src="https://res.cloudinary.com/dahswyr0k/image/upload/v1651237909/RITHMEOK/streams/SpotifyLogoToSyncronize_xg2nn7.svg"
              alt="spotify logo"
            />
          </div>
          <div>
            QUIERES SINCRONIZAR TUS PREFERERNCIAS MUSICALES CON SPOTIFY?
          </div>
          <div>
            <button className="" onClick={() => setSyncro(true)}>
              Sincronizar con Spotify
            </button>
          </div>
          <div>Más tarde</div>
        </>
      )}
    </>
  );
}
