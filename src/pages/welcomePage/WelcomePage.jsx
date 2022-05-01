import Loading from "../../components/loading/Loading";
import Logo from "../../assets/images/Logo.png"
import "./WelcomePage.scss"

export default function WelcomePage() {

    return (
        <>
            <div className="b-logo">
                <img className="b-logo__img" src={Logo} alt="LogoRithme" />
            </div>

            <Loading />
        </>
    )
}