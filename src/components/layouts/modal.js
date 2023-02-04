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
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={false} animationInDuration={600} animationOutDuration={600} className="fixed">
            <Animated animationIn="flipInX" animationOut="flipOutX" isVisible={false} animationInDuration={600} animationOutDuration={600} className="ventana clearfix">
                <h1>Mi ventana</h1>
                {Tipo()}
                <Create/>
                <button onClick={() => setModal(false)}>Cerrar</button>
            </Animated>
        </Animated>
    )
}

export default Modal;