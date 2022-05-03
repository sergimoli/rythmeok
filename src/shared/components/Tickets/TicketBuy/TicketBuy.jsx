import { useContext, useState } from "react";
import "./TicketBuy.scss"
import { API } from "../../../services/api";
import { RythmeContext } from "../../../contexts/RythmeContext";
import TicketsPage from "../../../../pages/ticketsPage/TicketsPage";

export default function TicketBuy({ event }) {
    const gestion = "0.90";
    const [ price, setPrice ] = useState(event.price);
    const [ buy, setBuy ] = useState(false);
    const { userLocal } = useContext(RythmeContext);
    const [ ticket, setTicket ] = useState(1);

    function setTickets(e) {
        setPrice(e.target.value * event.price);
        setTicket(Number(e.target.value));
    }

    const onPurchase = () => {
        for (let i = 1; i <= ticket; i++) {
            API.put(`users/add-event`, { userId: userLocal._id, eventId: event._id }).then(
                (res) => {
                    console.log("Register purchase OK");
                }
            )
        }
        setBuy(true)
    }

    return (
        <>
            {buy ? <TicketsPage /> :
                <>
                    <header className="head-bar">
                        <p className="head-bar__p">Pago</p>
                    </header>
                    <div className="b-scrolldiv1">
                        <div className="b-contform">
                            <div className="b-contform__h1div">
                                <h1 className="b-contform__h1">Compra tus entradas</h1>
                            </div>
                            <div className="b-contform__inputsDiv1">
                                <h3 className="b-contform__entradash3">Entrada General: </h3>
                                <form className="b-contform__form1">
                                    <div className="b-contform__buttonline">
                                        <select className="b-contform__select" onChange={setTickets}>
                                            <option value="1">1 entrada</option>
                                            <option value="2">2 entradas</option>
                                            <option value="3">3 entradas</option>
                                            <option value="4">4 entradas</option>
                                        </select>
                                        <p className="b-contform__p1">Gastos de gestión: {gestion} €</p>
                                    </div>
                                    <p className="b-contform__p2">Total: {price + Number(gestion)}€</p>
                                    <div className="b-contform__form2">
                                        <h3 className="b-contform__buyer">Datos del comprador</h3>
                                        <input className="b-contform__inputticket" type="text" placeholder="Nombre y Apellidos" />
                                        <input className="b-contform__inputticket" type="text" placeholder="Email" />
                                        <input className="b-contform__inputticket" type="text" placeholder="cod.Postal" />
                                    </div>
                                    <div className="b-contform__form3">
                                        <h3>Pago con tarjeta</h3>
                                        <input className="b-contform__inputticket" type="text" placeholder="Nº Tarjeta" />
                                        <div className="b-contform__2inputs">
                                            <input className="b-contform__inputticket1" type="text" placeholder="Mes / año" />
                                            <input className="b-contform__inputticket1" type="text" placeholder="cvv" />
                                        </div>
                                        <input className="b-contform__inputticket" type="text" placeholder="Titular" />
                                    </div>
                                    <div className="b-contform__divbtn">
                                        <button className="b-contform__btnbuy" onClick={() => onPurchase()}>Pagar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}