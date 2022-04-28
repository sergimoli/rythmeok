import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import WelcomePage from './pages/welcomePage/WelcomePage';
import RoutesFile from './core/RoutesFile';


function App() {
    const [ landing, setLanding ] = useState(true);

    const landingCheck = () => {
        setLanding(false);
    }

    useEffect(() => {
        setTimeout(landingCheck, 3000);
    })

    return (
        <>
            {landing ? <WelcomePage /> : <Router><RoutesFile /> <Navbar /> </Router>}
        </>
    );
}

export default App;
