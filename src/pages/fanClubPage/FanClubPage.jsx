import "./FanClubPage.scss";
import Navbar from "../../components/navbar/Navbar";
import logoRithm from '../../assets/images/rithmeFanclubOk3@3x.png';
import Register from "../../shared/components/FanClub/Register/Register";
import Bienvenido from "../../shared/components/FanClub/Bienvenido";
import { useContext, useState } from "react";
import { RythmeContext } from "../../shared/contexts/RythmeContext";
import { Link } from "react-router-dom";


export default function FanClubPage() {
  const [ register, setRegister ] = useState(false)
  const { userLocal } = useContext(RythmeContext);

  return (
    <>
      {userLocal.role === "vip" || userLocal.role === "admin" ? <Bienvenido /> :
        <>
          {register ? <Register /> : (
            <>
              <header className="head-bar">
                <p className="head-bar__p">Fan Club</p>
              </header>
              <div className="config-navbar">
                <div className="b-main">
                  <img className="main-logo" src={logoRithm} alt="logo Fan Club" />
                  <h3 className="main-logo__h3">Bienvenido al club donde vivirás tu música.</h3>
                  <p className="main-logo__p">RYTHME te ofrecerá aquí todo un mundo de experiencias exclusivas para apasionados de la musica tan exigentes como tú</p>
                  <p className="main-logo__p">¿Te unes?</p>
                  <button className="b-btn__logo" onClick={() => setRegister(true)}>Quiero unirme ahora</button>
                  <Link className='b-link__register' to='/home'>Más tarde</Link>
                </div>
              </div>
              <Navbar />
            </>
          )}
        </>
      }
    </>
  )
}

