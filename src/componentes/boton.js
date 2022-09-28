import React from "react";
import '../css/boton.css'

function Boton (props){
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') 
    } 
    return (
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador'  : ''}`.trimEnd()} onClick={()=> props.manejarClick(props.children)}>
        {props.children}
        </div>
    )
}

export default Boton