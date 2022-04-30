import Navbar from "../../components/navbar/Navbar";
import "./ConfigurationPage.scss";
import "../../components/synchroStream/SynchroStream";
import SynchroStream from "../../components/synchroStream/SynchroStream";
import { useContext, useState } from "react";
import { JwtContext } from "../../shared/contexts/JwtContext";
import { useNavigate } from "react-router-dom";

export default function ConfigurationPage() {
  const [ buy, setBuy ] = useState(false);
  const { jwt, setJwt } = useContext(JwtContext);
  let navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setJwt(null);
    navigate("/");
  }

  return (
    <>
      {buy && jwt ? (
        <SynchroStream></SynchroStream>
      ) : (
        <>
          <header className="head-bar">
            <p className="head-bar__p">Configuration</p>
          </header>
          <section className="config-container">
            <div className="b-section">
              <h3 className="b-section__title">PERSONAL</h3>
              <button className="b-section__btn">Editar perfil</button>
              <button className="b-section__btn">Ubicación</button>
              <button className="b-section__btn">Sincronizar calendario</button>
              <button className="b-section__btn">Notificaciones</button>
              <button className="b-section__btn">Medios de pago</button>
              <button className="b-section__btn">Historial de compras</button>
            </div>
            <div className="b-section">
              <h3 className="b-section__title">SINCRONIZAR PREFERENCIAS</h3>
              <button className="b-section__btn" onClick={() => setBuy(true)}>
                Sincroniza tu música
                {/* <SynchroStream></SynchroStream> */}
              </button>
              <button className="b-section__btn">
                Sincroniza tus salas favoritas
              </button>
              <button className="b-section__btn">
                Sincroniza tus radios y podcast
              </button>
              <button className="b-section__btn">
                Sincroniza tus revistas
              </button>
              <button className="b-section__btn">
                Sincroniza tus contactos
              </button>
            </div>
            <div className="b-section b-section--bottom">
              <button className="b-section__btn">Ayuda</button>
              <button onClick={signOut} className="b-section__btn">Cerrar sesión</button>
            </div>
            <Navbar />
          </section>
        </>
      )}
    </>
  );
}
