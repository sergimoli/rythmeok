import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import "./Bienvenido.scss";
import IconUser from '../../../assets/images/account_circle_full_FILL0_wght400_GRAD0_opsz48.svg';
import IconZero from '../../../assets/images/exposure_zero_FILL0_wght400_GRAD0_opsz48.svg';
import IconChat from '../../../assets/images/chat_bubble_FILL0_wght400_GRAD0_opsz48.png';
import IconGroup from '../../../assets/images/group_add_FILL0_wght400_GRAD0_opsz48.svg';
import { Link } from 'react-router-dom';

export default function Bienvenido() {
  return (
    <>
      <header className="b-head-fan">Fan Club</header>
      <h1 className='b-line'>¡Bienvenido!</h1>
      <div className='b-circle'>

        <div className='b-circle__2'>
          <a href='/#' ><img className='b-circle__iconzero' src={IconZero} alt='0' /></a>
          <a href='/#' ><img className='b-circle__iconchat' src={IconChat} alt='chat' /></a>
        </div>
        <div className='b-circle__1'>
          <a href='/#' ><img className='b-circle__iconuser' src={IconUser} alt='usuario' /></a>
        </div>
        <div className='b-circle__3'>
          <a href='/#' ><img className='b-circle__iconzero' src={IconZero} alt='0' /></a>
          <a href='/#' ><img className='b-circle__icongroup' src={IconGroup} alt='grupo' /></a>
        </div>
      </div>
      <ul className='b-list'>
        <li className='b-list__text'><a href='/#'>Perfil</a></li>
        <li className='b-list__text'><a href='/#'>Fan Store</a></li>
        <li className='b-list__text'><a href='/#'>Tours & Tickets</a></li>
        <li className='b-list__text'><a href='/#'>Fan Wall</a></li>
        <li className='b-list__text'><Link to='/friends'>Amigos y mensajes</Link></li>
      </ul>
      <Navbar />
    </>
  )
}
