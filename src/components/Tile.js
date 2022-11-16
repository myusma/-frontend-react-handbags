import React from "react";

function Tile({image, title,parOne, parTwo, alt}) {
    return (
        <>
            <section>
                {image && <img src={image} alt={alt}/>}
                <h2>{title}</h2>
                <p>{parOne}</p>
                <p>{parTwo}</p>
            </section>

        </>

    );
}

export default Tile;