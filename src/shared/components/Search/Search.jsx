import { useContext } from "react";
import { RythmeContext } from "../../contexts/RythmeContext";
import "./Search.scss";

export default function Search() {
    const { onSearch } = useContext(RythmeContext);

    return (
        <form className="search-container">
            <input className="search-container__input" onChange={onSearch} placeholder="Busca tu artista, revista, sala favorita..."></input>
        </form>
    )
}