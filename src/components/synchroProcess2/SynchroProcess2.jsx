import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import SpotifyArtists from "../spotifyArtists/SpotifyArtists";

export default function SynchroProcess2({ artista }) {
  const [landing, setLanding] = useState(true);

  const landingCheck = () => {
    setLanding(false);
  };

  useEffect(() => {
    setTimeout(landingCheck, 1000);
  });

  return (
    <>
      {landing ? (
        <div className="b-main">
          <Loading></Loading>
          <h2 className="b-main__logo__h2">Sincronizando con Spotify</h2>
        </div>
      ) : (
        <SpotifyArtists artista={artista}></SpotifyArtists>
      )}
    </>
  );
}
