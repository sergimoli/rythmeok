import { useContext } from "react";
import Gallery from "../../shared/components/Home/Gallery/Gallery"
import { RythmeContext } from "../../shared/contexts/RythmeContext";
import "./HomePage.scss"

export default function HomePage() {
    const { artists, waves, styles, halls, magazines } = useContext(RythmeContext);

    return (
        <>
            <header className="head-bar">
                <p className="head-bar__p">RithMe</p>
            </header>
            <div className="b-button">
                <button className="b-button__home">Conciertos</button>
                <button className="b-button__home">Amigos</button>
                <button className="b-button__home">Fan Club</button>
            </div>
            <div className="b-greet">
                <h1 className="b-greet__h1">!Hola USERNAME¡</h1>
                <h2 className="b-greet__h2">¿Que concierto te apetece?</h2>
            </div>
            <section className="gallery-container">
                <div className="b-gallery">
                    <h3 className="b-gallery__title">Artistas</h3>
                    <Gallery gallery={artists} />
                </div>
                <div className="b-gallery">
                    <h3 className="b-gallery__title">Styles</h3>
                    <Gallery gallery={styles} />
                </div>
                <div className="b-gallery">
                    <h3 className="b-gallery__title">Halls</h3>
                    <Gallery gallery={halls} />
                </div>
                <div className="b-gallery">
                    <h3 className="b-gallery__title">Waves</h3>
                    <Gallery gallery={waves} />
                </div>
                <div className="b-gallery">
                    <h3 className="b-gallery__title">Magazines</h3>
                    <Gallery gallery={magazines} />
                </div>
            </section>
        </>
    )
}