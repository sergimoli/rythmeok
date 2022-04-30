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
        <a href='#' ><img className='b-img1' src={iconUser} alt='usuario' /></a>
        <a href='#' ><img className='b-img2' src={iconZero} alt='0' /></a>
        <a href='#' ><img className='b-img3' src={iconChat} alt='chat' /></a>
        <a href='#' ><img className='b-img4' src={iconZero} alt='0' /></a>
        <a href='#' ><img className='b-img5' src={iconGroup} alt='grupo' /></a>
      </div>
      <ul className='b-list'>
        <li><a href='/#'>Perfil</a></li>
        <li><a href='/#'>Fan Store</a></li>
        <li><a href='/#'>Tours & Tickets</a></li>
        <li><a href='/#'>Fan Wall</a></li>
        <li><a href='/#'>Amigos y mensajes</a></li>
      </ul>
      <Navbar />
    </>
  )
}
