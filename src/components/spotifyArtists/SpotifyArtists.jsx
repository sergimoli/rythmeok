import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Tokenspotify } from "../../shared/contexts/Tokenspotify";
import "./SpotifyArtists.scss";
import imageArtist from "../../assets/images/imageArtist.jpg";
import checkIcon from "../../assets/icons/checkGreen.png";
const baseURL = process.env.REACT_APP_BACK_URL;

export default function SpotifyArtists({ artista }) {
  //const CLIENT_ID = "5c612d5225894ac99b4a7f9e5316aea3"; //original Sergi
  const CLIENT_ID = "78f40f4bcaab4b3e8ca6990708d8ad37"; // from Sara!
  const REDIRECT_URI = "http://localhost:3000/configuration";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [ token, setToken ] = useState("");
  // const [searchKey, setSearchKey] = useState("");
  // const [searchKey, setSearchKey] = useState("Ed Sheeran");
  const [ searchKey, setSearchKey ] = useState(artista);
  const [ artists, setArtists ] = useState([]);
  const [ profile, setProfile ] = useState(null);
  const [ profileName, setProfileName ] = useState(null);
  const [ showData, setShowData ] = useState(false);

  const { spoty, setSpoty } = useContext(Tokenspotify);

  useEffect(() => {
    const hash = window.location.hash;
    //let token2 = window.localStorage.getItem("token");
    let token = spoty;
    console.log("token:", token);

    console.log("artist:", { artista });
    console.log("artist2:", artista);

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[ 1 ];

      window.location.hash = "";
      //window.localStorage.setItem("token", token2); smo
      //smo instead of saving in localstorage save in global variables
      setSpoty(token);
    }

    setToken(token);
  }, []);

  useEffect(() => {
    if (token) {
      axios.defaults.baseURL = "https://api.spotify.com/v1";
      console.log(token);
      axios.defaults.headers[ "Authorization" ] = `Bearer ${token}`;
      axios.defaults.headers[ "Content-Type" ] = "application/json";
      const getCurrentUserProfile = () => axios.get("/me");

      console.log("artista found:", artista);

      const fetchData = async () => {
        try {
          const { data } = await getCurrentUserProfile();
          setProfile(data);
          console.log("the profile is:", data.display_name);
          setProfileName(data.display_name);
          ///////////////setSearchKey("Ed Sheeran");
          console.log("the text to look for iss:", searchKey);
          // setShowData(true);
          searchArtists();
        } catch (e) {
          console.error(e);
        }
      };

      fetchData();
    }
  }, [ token ]);

  const logout = () => {
    setToken("");
    // window.localStorage.removeItem("token");
    setSpoty(null);
  };

  const searchArtists = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
    setShowData(true);
    // console.log("the data of artist is: ", data);
  };

  const renderArtists = () => {
    console.log("artist info:", artists);
    return (
      <div className="b-containartist">
        {artists.map((artist) => (
          <div className="b-boxartist" key={artist.id}>
            {artist.images.length ? (
              <img
                className="b-boxartist__img"
                width={"100%"}
                src={artist.images[ 0 ].url}
                alt=""
              />
            ) : (
              <img
                className="b-boxartist__img"
                src={imageArtist}
                alt="imageArtist"
              />
            )}
            <div className="b-boxartist__cont">
              <div className="b-boxartist__infoArtist">
                <h2 className="b-boxartist__name">{artist.name}</h2>
                <p className="b-boxartist__followers">
                  {artist.followers.total} seguidores
                </p>
              </div>
            </div>
            <div className="b-boxartist__checkdiv">
              <img
                className="b-boxartist__checkicon"
                src={checkIcon}
                alt="checkIcon"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <div className="App-header">
        {!token ? (
          <>
            <p>
              Para poder acceder a Spotify tienes que loggearte antes que nada.
            </p>
            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
              Login to Spotify
            </a>
          </>
        ) : (
          <>
            <h3 className="b-spotyartist__name">¡Hola {profileName}!</h3>
            <p className="b-spotyartist__text">
              Próximamente irás al concierto de {searchKey}. ¿Quieres
              sincronizar con artistas similares?
            </p>
            <button className="b-logout__btn" onClick={logout}>
              Logout
            </button>
            {showData && renderArtists()}
          </>
        )}
      </div>
    </div>
  );
}
