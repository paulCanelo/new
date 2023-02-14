import React from 'react'
import { ThemeContext } from './../../components/context/Provider'


const Modal = () => {
    const {modal, setModal, tipo} = React.useContext(ThemeContext)

    return(
        <div className="fixed clearfix" style={{display: modal.activar === true?"block":"none"}}>
            <div className="ventana clearfix">
                {modal.ventana}
                {/* Quitar esta opcion o ver la forma de hacerlo generico para todos los formularios que utilicen la modal  */}
                <button onClick={() => setModal({activar: false})}>Cerrar</button>
            </div>
        </div>
    )
}

export default Modal;