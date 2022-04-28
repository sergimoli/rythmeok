export default function Gallery({ gallery }) {

    return (
        <div className="b-gallery__showcase">
            {gallery.map((picture) => (
                <img className="b-gallery__img" key={picture.name} src={picture.image} alt={picture.name} />
            ))}
        </div>
    )
}
