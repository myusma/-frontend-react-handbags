import React from "react";

function Product({label, imageBag, bagName, price, alt}) {
    return (
        <>
            <article>
                <span>{label}</span>
                {imageBag && <img src={imageBag} alt={alt}/>}
                <p>{bagName}</p>
                <h4>{price}</h4>

            </article>


        </>
    )

}

export default Product;