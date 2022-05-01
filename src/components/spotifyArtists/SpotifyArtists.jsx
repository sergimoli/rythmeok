import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Tokenspotify } from "../../shared/contexts/Tokenspotify";

export default function SpotifyArtists() {
  const CLIENT_ID = "5c612d5225894ac99b4a7f9e5316aea3"; //original Sergi
  // const CLIENT_ID = "78f40f4bcaab4b3e8ca6990708d8ad37";
  const REDIRECT_URI = "http://localhost:3000/configuration";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  // const [searchKey, setSearchKey] = useState("");
  const [searchKey, setSearchKey] = useState("Ed Sheeran");
  const [artists, setArtists] = useState([]);
  const [profile, setProfile] = useState(null);
  const [profileName, setProfileName] = useState(null);
  const [showData, setShowData] = useState(false);

  const { spoty, setSpoty } = useContext(Tokenspotify);

  useEffect(() => {
    const hash = window.location.hash;
    //let token2 = window.localStorage.getItem("token");
    let token = spoty;
    console.log("token:", token);

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

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
      axios.defaults.headers["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers["Content-Type"] = "application/json";
      const getCurrentUserProfile = () => axios.get("/me");

      const fetchData = async () => {
        try {
          const { data } = await getCurrentUserProfile();
          setProfile(data);
          console.log("the profile is:", data.display_name);
          setProfileName(data.display_name);
          setSearchKey("Ed Sheeran");
          console.log("the text to look for iss:", searchKey);
          // setShowData(true);
          searchArtists();
        } catch (e) {
          console.error(e);
        }
      };

      fetchData();
    }
  }, [token]);

  const logout = () => {
    setToken("");
    // window.localStorage.removeItem("token");
    setSpoty(null);
  };

  const searchArtists = async () => {
    console.log("sergiiii!!!");
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
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"100%"} src={artist.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <div className="App">
      <div className="App-header">
        {profileName && <h3>¡Hola {profileName}!</h3>}
        <p>
          proximamente irás al concierto de {searchKey}. ¿Quieres sincronizar
          con artistas similares?
        </p>

        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
        {showData && renderArtists()}
      </div>
    </div>
  );
}
