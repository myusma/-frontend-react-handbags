import React from "react";

function Button({click, children, disabled,}) {

    return (
        <button disabled={disabled} onClick={click}>{children}</button>


    );

}

export default Button;