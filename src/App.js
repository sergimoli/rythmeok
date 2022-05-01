import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import WelcomePage from './pages/welcomePage/WelcomePage';
import RoutesFile from './core/RoutesFile';
import { JwtContext } from './shared/contexts/JwtContext';
import RythmeContextProvider from './shared/contexts/RythmeContext';

function App() {
    const [ jwt, setJwt ] = useState(localStorage.getItem('token') || null);
    const [ landing, setLanding ] = useState(true);

    const landingCheck = () => {
        setLanding(false);
    }

    useEffect(() => {
        setTimeout(landingCheck, 3000);
    })

    return (
        <>
            {landing ? <WelcomePage /> :
                <JwtContext.Provider value={{ jwt, setJwt }}>
                    <RythmeContextProvider>
                        <Router><RoutesFile /></Router>
                    </RythmeContextProvider>
                </JwtContext.Provider>
            }
        </>
    );
}

export default App;
