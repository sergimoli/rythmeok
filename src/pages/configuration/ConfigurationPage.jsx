import Navbar from "../../components/navbar/Navbar";
import "./ConfigurationPage.scss"

export default function ConfigurationPage() {
  return (
    <div className="b-section">
      <>
        <h3 className="b-title__h3">PERSONAL</h3>
        <button className="b-btn">
          Editar perfil
        </button>
        <button className="b-btn">
          Ubicación
        </button>
        <button className="b-btn">
          Sincronizar calendario
        </button>
        <button className="b-btn">
          Notificaciones
        </button>
        <button className="b-btn">
          Medios de pago
        </button>
        <button className="b-btn">
          Historial de compras
        </button>
      </>
      <div className="b-section">
        <h3 className="b-title__h3">SINCRONIZAR PREFERENCIAS</h3>
        <button className="b-btn">
          Sincroniza tu música
        </button>
        <button className="b-btn">
          Sincroniza tus salas favoritas
        </button>
        <button className="b-btn">
          Sincroniza tus radios y podcast
        </button>
        <button className="b-btn">
          Sincroniza tus revistas
        </button>
        <button className="b-btn">
          Sincroniza tus contactos
        </button>
      </div>
      <></>
      <div className="b-section">
      <br></br>
        <button className="b-btn">
          Ayuda
        </button>
        <button className="b-btn">
          Cerrar sesión
        </button>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}