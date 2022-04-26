import axios from "axios";
const { createContext, useEffect, useState } = require("react");

export const RythmeContext = createContext();

export default function RythmeContextProvider({ children }) {
    const [ artists, setArtists ] = useState([]);
    const [ waves, setWaves ] = useState([]);
    const [ styles, setStyles ] = useState([]);
    const [ events, setEvents ] = useState([]);
    const [ halls, setHalls ] = useState([]);
    const [ magazines, setMagazines ] = useState([]);

    useEffect(() => {
        const getArtists = async () => {
            const res = await axios.get("https://estevezpereira.com/artists");
            setArtists(res.data);
        };
        getArtists();
    }, []);

    useEffect(() => {
        const getWaves = async () => {
            const res = await axios.get("https://estevezpereira.com/waves");
            setWaves(res.data);
        };
        getWaves();
    }, []);

    useEffect(() => {
        const getStyles = async () => {
            const res = await axios.get("https://estevezpereira.com/styles");
            setStyles(res.data);
        };
        getStyles();
    }, []);

    useEffect(() => {
        const getEvents = async () => {
            const res = await axios.get("https://estevezpereira.com/events");
            setEvents(res.data);
        };
        getEvents();
    }, []);

    useEffect(() => {
        const getHalls = async () => {
            const res = await axios.get("https://estevezpereira.com/halls");
            setHalls(res.data);
        };
        getHalls();
    }, []);

    useEffect(() => {
        const getMagazines = async () => {
            const res = await axios.get("https://estevezpereira.com/magazines");
            setMagazines(res.data);
        };
        getMagazines();
    }, []);


    return (
        <RythmeContext.Provider value={{ artists, waves, styles, events, halls, magazines }}>
            {children}
        </RythmeContext.Provider>
    )
}
