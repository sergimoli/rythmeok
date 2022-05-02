import axios from "axios";
const { createContext, useEffect, useState } = require("react");
const baseURL = process.env.REACT_APP_BACK_URL;
export const RythmeContext = createContext();

export default function RythmeContextProvider({ children }) {
    const [ artists, setArtists ] = useState([]);
    const [ waves, setWaves ] = useState([]);
    const [ styles, setStyles ] = useState([]);
    const [ events, setEvents ] = useState([]);
    const [ halls, setHalls ] = useState([]);
    const [ magazines, setMagazines ] = useState([]);
    const [ user, setUser ] = useState([]);

    const [ filteredArtists, setFilteredArtists ] = useState([]);
    const [ filteredWaves, setFilteredWaves ] = useState([]);
    const [ filteredStyles, setFilteredStyles ] = useState([]);
    const [ filteredHalls, setFilteredHalls ] = useState([]);
    const [ filteredMagazines, setFilteredMagazines ] = useState([]);

    const userLocal = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {

        const getData = async (url, setData) => {
            const res = await axios.get(url);
            setData(res.data);
        };

        getData(baseURL + '/artists', setArtists);
        getData(baseURL + '/waves', setWaves);
        getData(baseURL + '/styles', setStyles);
        getData(baseURL + '/events', setEvents);
        getData(baseURL + '/halls', setHalls);
        getData(baseURL + '/magazines', setMagazines);
        getData(baseURL + '/users', setUser);

        getData(baseURL + '/artists', setFilteredArtists);
        getData(baseURL + '/waves', setFilteredWaves);
        getData(baseURL + '/styles', setFilteredStyles);
        getData(baseURL + '/halls', setFilteredHalls);
        getData(baseURL + '/magazines', setFilteredMagazines);

    }, []);

    useEffect(() => {
        if (userLocal) {
            const getUser = async () => {
                if (userLocal) {
                    const res = await axios.get(baseURL + `/users/${userLocal._id}`);
                    setUser(res.data);
                }
            };

            getUser();
        }
    }, []);

    const artistsFiltered = (filtered) => {
        const resultFiltered = filteredArtists.filter(artist => {
            if (artist.name.toLowerCase().includes(filtered.toLowerCase())) {
                return artist;
            }
            return false;
        });
        setArtists(resultFiltered);
    }

    const wavesFiltered = (filtered) => {
        const resultFiltered = filteredWaves.filter(wave => {
            if (wave.name.toLowerCase().includes(filtered.toLowerCase())) {
                return wave;
            }
            return false;
        });
        setWaves(resultFiltered);
    }

    const stylesFiltered = (filtered) => {
        const resultFiltered = filteredStyles.filter(style => {
            if (style.name.toLowerCase().includes(filtered.toLowerCase())) {
                return style;
            }
            return false;
        });
        setStyles(resultFiltered);
    }

    const hallsFiltered = (filtered) => {
        const resultFiltered = filteredHalls.filter(hall => {
            if (hall.name.toLowerCase().includes(filtered.toLowerCase())) {
                return hall;
            }
            return false;
        });
        setHalls(resultFiltered);
    }

    const magazinesFiltered = (filtered) => {
        const resultFiltered = filteredMagazines.filter(magazine => {
            if (magazine.name.toLowerCase().includes(filtered.toLowerCase())) {
                return magazine;
            }
            return false;
        });
        setMagazines(resultFiltered);
    }

    const onSearch = e => {
        artistsFiltered(e.target.value);
        wavesFiltered(e.target.value);
        stylesFiltered(e.target.value);
        hallsFiltered(e.target.value);
        magazinesFiltered(e.target.value);
    }

    return (
        <RythmeContext.Provider value={{ artists, waves, styles, events, halls, magazines, user, onSearch }}>
            {children}
        </RythmeContext.Provider>
    )
}
