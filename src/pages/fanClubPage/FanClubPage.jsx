import Navbar from "../../components/navbar/Navbar";
import "./FanClubPage.scss";
import logoRithm from '../../assets/images/rithmeFanclubOk3@3x.png';
import Register from "../../shared/components/FanClub/Register/Register";
import { useContext, useState } from "react";
import { RythmeContext } from "../../shared/contexts/RythmeContext";
import Bienvenido from "../../shared/components/FanClub/Bienvenido";
import { Link } from "react-router-dom";


export default function FanClubPage() {
  const [ register, setRegister ] = useState(false)
  const { user } = useContext(RythmeContext);

  return (
    <>
      {user.role === "vip" || user.role === "admin" ? <Bienvenido /> : <>
        {register ? <Register /> : (
          <>
            <header className="head-bar">
              <p className="head-bar__p">Fan Club</p>
            </header>
            <div className="config-navbar">
              <div className="b-main">
                <img className="b-main__logo" src={logoRithm} alt="logo Fan Club" />
                <h3 className="b-main__logo__h3">Bienvenido al club donde vivirás tu música.</h3>
                <p className="b-main__logo__p">RYTHME te ofrecerá aquí todo un mundo de experiencias exclusivas para apasionados de la musica tan exigentes como tú</p>
                <p className="b-main__logo__p">¿Te unes?</p>
                <button className="b-btn__logo" onClick={() => setRegister(true)}>Quiero unirme ahora</button>
                <Link className='b-link_register' to='/home'>Más tarde</Link>
              </div>
            </div>
            <Navbar />
          </>
        )}</>}

    </>
  )
}

