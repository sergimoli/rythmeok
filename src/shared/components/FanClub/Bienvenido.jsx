import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import "./Bienvenido.scss";
import iconUser from '../../../assets/images/account_circle_full_FILL0_wght400_GRAD0_opsz48.svg';
import iconZero from '../../../assets/images/exposure_zero_FILL0_wght400_GRAD0_opsz48.svg';
import iconChat from '../../../assets/images/chat_bubble_FILL0_wght400_GRAD0_opsz48.svg';
import iconGroup from '../../../assets/images/group_add_FILL0_wght400_GRAD0_opsz48.svg';

export default function Bienvenido() {
  return (
      <>
      <header className="b-head-bar">Fan Club</header>
    <h1 className='b-line'>¡Bienvenido!</h1>
    <div className='b-circle'>
   
        <div className='b-circle__2'>
        <a href='#' ><img className='b-circle__iconZero' src={iconZero} alt='0'/></a>
        <a href='#' ><img className='b-circle__iconChat' src={iconChat} alt='chat'/></a>
        </div>
        <div className='b-circle__1'>
        <a href='#' ><img className='b-circle__iconUser' src={iconUser} alt='usuario'/></a>
        </div>
        <div className='b-circle__3'>
        <a href='#' ><img className='b-circle__iconZero' src={iconZero} alt='0'/></a>
        <a href='#' ><img className='b-circle__iconGroup' src={iconGroup} alt='grupo'/></a>
        </div>
        </div>
    <ul className='b-list'>
       <li className='b-list__text'><a href='/#'>Perfil</a></li>
        <li className='b-list__text'><a href='/#'>Fan Store</a></li>
        <li className='b-list__text'><a href='/#'>Tours & Tickets</a></li>
        <li className='b-list__text'><a href='/#'>Fan Wall</a></li>
        <li className='b-list__text'><a href='/#'>Amigos y mensajes</a></li>
    </ul>
    <Navbar/>
    </>
  )
}
