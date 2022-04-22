import "./HomePage.scss"

export default function HomePage(){
    return(
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
        <div className="b-gallery">
            <h3 className="b-gallery__title">Artistas</h3>
            <img  className="b-gallery__img" src="https://yt3.ggpht.com/ytc/AKedOLRKvtuCmv6V7rYJ8__0TF4-faKrerx7i-gZbbgd=s900-c-k-c0x00ffffff-no-rj" alt="/" />
        </div>
        <div className="b-gallery">
            <h3 className="b-gallery__title">Estilos</h3>
            <img  className="b-gallery__img" src="https://yt3.ggpht.com/ytc/AKedOLRKvtuCmv6V7rYJ8__0TF4-faKrerx7i-gZbbgd=s900-c-k-c0x00ffffff-no-rj" alt="/" />
        </div>
        <div className="b-gallery">
            <h3 className="b-gallery__title">Salas</h3>
            <img  className="b-gallery__img" src="https://yt3.ggpht.com/ytc/AKedOLRKvtuCmv6V7rYJ8__0TF4-faKrerx7i-gZbbgd=s900-c-k-c0x00ffffff-no-rj" alt="/" />
        </div>
        <div className="b-gallery">
            <h3 className="b-gallery__title">Ondas</h3>
            <img  className="b-gallery__img" src="https://yt3.ggpht.com/ytc/AKedOLRKvtuCmv6V7rYJ8__0TF4-faKrerx7i-gZbbgd=s900-c-k-c0x00ffffff-no-rj" alt="/" />
        </div>
        <div className="b-gallery">
            <h3 className="b-gallery__title">Revistas</h3>
            <img  className="b-gallery__img" src="https://yt3.ggpht.com/ytc/AKedOLRKvtuCmv6V7rYJ8__0TF4-faKrerx7i-gZbbgd=s900-c-k-c0x00ffffff-no-rj" alt="/" />
        </div>
        
        </>
        


    )
}