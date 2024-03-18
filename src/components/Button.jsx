import React from "react";

const Button = ({handleClick, classNameValue,title})=>{
   
    return (
        <div className={`${classNameValue}`}>
            <button onClick={handleClick} type="submit"> {title} </button>
        </div>
    )
}

export default Button;