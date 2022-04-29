import React, {Fragment, useState} from 'react';
import Navbar from '../../../../components/navbar/Navbar';
import "./Register.scss";


export default function Register(){

    const [datos, setDatos] = useState({
        nombre:'',
        email:'',
        postal:'',
        tarjeta:'',
        caducidad:'',
        control:'',
        titular:'',

    })

    const handleInputChange= (event)=>{
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos =(event)=>{
        event.preventDefault();
    }


  return (
      <>
      <header className="head-bar">Fan Club</header>
      <Fragment>
             <h3 className='b-title1'>Datos personales</h3>
             <form className='b-title1__input' onSubmit={enviarDatos}>
                 <div>
                 <input className="b-inputs"
                 placeholder='Nombre y apellidos'
                 type='text'
                 name= "nombre"
                 onChange={handleInputChange}
                 ></input>
                 </div>
                 <div>
                 <input className="b-inputs"
                 placeholder='Email'
                 type='email'
                 name= 'email'
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
                     <button onClick="handleClick()" className="b-btn_continue" type="submit">Continuar</button>
                 </div>
             </form>
             <a className='b-link_register' href='/home'>Más tarde</a>

      </Fragment>
      <Navbar/>
      </>
  )
}