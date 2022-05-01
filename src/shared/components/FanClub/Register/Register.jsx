import { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../../components/navbar/Navbar';
import { RythmeContext } from '../../../contexts/RythmeContext';
import { API } from '../../../services/api';
import Bienvenido from '../Bienvenido';
import "./Register.scss";


export default function Register() {
    const [ welcome, setWelcome ] = useState(false);
    const { user } = useContext(RythmeContext);

    const [ datos, setDatos ] = useState({
        nombre: '',
        email: '',
        postal: '',
        tarjeta: '',
        caducidad: '',
        control: '',
        titular: '',

    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatos({
            ...datos,
            [ event.target.name ]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
    }

    const onVip = () => {
        API.put(`users/${user._id}`, { role: "vip" }).then((res) => {
            console.log("Register user as VIP");
        });
    };


    return (
        <>
            {welcome ? (
                <Bienvenido />
            ) : (
                <>
                    <header className="b-head-bar">Fan Club</header>
                    <Fragment>
                        <h3 className='b-title1'>Datos personales</h3>
                        <form className='b-title1__input' onSubmit={enviarDatos}>
                            <div>
                                <input className="b-inputs"
                                    placeholder='Nombre y apellidos'
                                    type='text'
                                    name="nombre"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div>
                                <input className="b-inputs"
                                    placeholder='Email'
                                    type='email'
                                    name='email'
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div>
                                <input className="b-inputs"
                                    placeholder='Cod. postal'
                                    type='number'
                                    name='postal'
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <h3 className='b-title1'>Pago con tarjeta</h3>
                            <div>
                                <input className="b-inputs"
                                    placeholder='Nº Tarjeta'
                                    type='number'
                                    name='tarjeta'
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div>
                                <div className='b-box'>
                                    <input className="b-inputs"
                                        placeholder='mes / año'
                                        type='number'
                                        name='caducidad'
                                        onChange={handleInputChange}
                                    ></input>
                                </div>
                                <div>
                                    <input className="b-inputs"
                                        placeholder='CVV  ?'
                                        type='number'
                                        name='control'
                                        onChange={handleInputChange}
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <input className="b-inputs"
                                    placeholder='Titular'
                                    type='text'
                                    name='titular'
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div>
                                <button onClick={() => {
                                    setWelcome(true);
                                    onVip();
                                }} className="b-btn_continue" type="submit">Continuar</button>
                            </div>
                        </form>
                        <Link className='b-link_register' to='/home'>Más tarde</Link>

                    </Fragment>
                    <Navbar />
                </>
            )}
        </>
    )
}
