import React from 'react'
import { Animated } from "react-animated-css";
import { ThemeContext } from './../../components/context/Provider'
import Create from './../../pages/tramites/create'


const Modal = () => {
    const {modal, setModal, tipo} = React.useContext(ThemeContext)

    function Tipo(){
        switch(tipo){
            default:
                return(
                    null
                );
        }
    }

    return(
        <div className="fixed clearfix" style={{display: modal === true?"block":"none"}}>
            <div className="ventana clearfix">
                <h1>Mi ventana</h1>
                {Tipo()}
                <Create/>

                {/* Quitar esta opcion o ver la forma de hacerlo generico para todos los formularios que utilicen la modal  */}
                <button onClick={() => setModal(false)}>Cerrar</button>
            </div>
        </div>
    )
}

export default Modal;