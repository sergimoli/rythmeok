import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../../contexts/JwtContext";
import "./Congrats.scss";

export default function Congrats() {
    const { jwt, setJwt } = useContext(JwtContext);
    let navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setJwt(null);
        navigate("/");
    }

    return (
        <section className="congrats-container">
            <header className="head-bar">
                <p className="head-bar__p">Fan Club</p>
            </header>
            <article className="congrats-article">
                <h3 className="congrats-article__title">¡Enhorabuena, se ha registrado correctamente en el servicio premium!</h3>
                <div className="box-article">
                    <h4 className="box-article__title">Tours & Tickets</h4>
                    <p className="box-article__text">Serás el primero en enterarte de las giras</p>
                </div>
                <div className="box-article">
                    <h4 className="box-article__title">Entradas aseguradas</h4>
                    <p className="box-article__text">Acceso a prioritario a entradas</p>
                </div>
                <div className="box-article">
                    <h4 className="box-article__title">Fan Store</h4>
                    <p className="box-article__text">Merchandising y eventos exclusivos</p>
                </div>
                <div className="box-article">
                    <h4 className="box-article__title">Amigos y mensajes</h4>
                    <p className="box-article__text">Porque serás de un club muy especial</p>
                </div>
                <div className="bottom-article">
                    <h2 className="bottom-article__ad">Sin publicidad</h2>
                    <p className="bottom-article__text">¡Para disfrutar de todos estos beneficios, por favor vuelve a iniciar sesión!</p>
                    <button onClick={signOut} className="bottom-article__btn">Cerrar sesión</button>
                </div>
            </article>
        </section>
    )
}
