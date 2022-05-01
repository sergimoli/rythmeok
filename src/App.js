import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import WelcomePage from "./pages/welcomePage/WelcomePage";
import RoutesFile from "./core/RoutesFile";
import { JwtContext } from "./shared/contexts/JwtContext";
import { Tokenspotify } from "./shared/contexts/Tokenspotify";
import RythmeContextProvider from "./shared/contexts/RythmeContext";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token") || null);
  const [landing, setLanding] = useState(true);

  const [spoty, setSpoty] = useState(null);

  const landingCheck = () => {
    setLanding(false);
  };

  useEffect(() => {
    setTimeout(landingCheck, 3000);
  });

  return (
    <>
      {landing ? (
        <WelcomePage />
      ) : (
        <Tokenspotify.Provider value={{ spoty, setSpoty }}>
          <JwtContext.Provider value={{ jwt, setJwt }}>
            <RythmeContextProvider>
              <Router>
                <RoutesFile />
              </Router>
            </RythmeContextProvider>
          </JwtContext.Provider>
        </Tokenspotify.Provider>
      )}
    </>
  );
}

export default App;
