import React from "react";
import './index.css';

function Button(props){

    const { name, onClick, meuNomeVermelho } = props 

    return(

        <button onClick={onClick}>{name + meuNomeVermelho}</button>
    )

}

export default Button;