import Navbar from "../../components/navbar/Navbar";
import "./ConfigurationPage.scss"

export default function ConfigurationPage() {
  return (
    <div>
      <>
        <h3>PERSONAL</h3>
        <button className="">
          Editar perfil
        </button>
        <button className="">
          Ubicación
        </button>
        <button className="">
          Sincronizar calendario
        </button>
        <button className="">
          Notificaciones
        </button>
        <button className="">
          Medios de pago
        </button>
        <button className="">
          Historial de compras
        </button>
      </>
      <div>
        <h3>SINCRONIZAR PREFERENCIAS</h3>
        <button className="">
          Sincroniza tu música
        </button>
        <button className="">
          Sincroniza tus salas favoritas
        </button>
        <button className="">
          Sincroniza tus radios y podcast
        </button>
        <button className="">
          Sincroniza tus revistas
        </button>
        <button className="">
          Sincroniza tus contactos
        </button>
      </div>
      <div>
        <button className="">
          Ayuda
        </button>
        <button className="">
          Cerrar sesión
        </button>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}