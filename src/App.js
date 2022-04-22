import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homePage/HomePage';
import WelcomePage from './pages/welcomePage/WelcomePage';

function App() {
    const [ landing, setLanding ] = useState(true);

    const landingCheck = () => {
        setLanding(false);
    }

    useEffect(() => {
        setTimeout(landingCheck, 3000);
    })

    return (
        <>{landing && <WelcomePage />}
            {!landing &&
                <>
                    <HomePage />
                    <Navbar />
                </>
            }
        </>
    );
}

export default App;
