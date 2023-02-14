import React from 'react'
import { useParams } from "react-router-dom";
import { ThemeContext } from './../../components/context/Provider'
import Modal from "./../../components/layouts/modal"
import IndexEtapas from "./indexEtapas"
import IndexCampos from "./indexCampos"
import IndexUsuarios from "./../usuarios/index"

const View = () => {

    const {idTramite} = useParams()
    const [ventana, setVentana] = React.useState({opcion: 1, seccion: <IndexEtapas idTramite={idTramite}/>})
    const {setModal} = React.useContext(ThemeContext)


    return(
    <>
        <ul id="menu">
            <li className={ventana.opcion === 1? "active" : ""}><a onClick={() => setVentana({opcion: 1, seccion: <IndexEtapas idTramite={idTramite}/>})}><span className="icon-circle">1</span> Etapas</a></li>
            <li className={ventana.opcion === 2? "active" : ""}><a onClick={() => setVentana({opcion: 2, seccion: <IndexCampos/>})}><span className="icon-circle">2</span> Configuracion del flujo</a></li>
            <li className={ventana.opcion === 3? "active" : ""}><a onClick={() => setVentana({opcion: 3, seccion: <IndexCampos/>})}><span className="icon-circle">3</span> Formulario</a></li>
            <li className={ventana.opcion === 4? "active" : ""}><a onClick={() => setVentana({opcion: 4, seccion: <IndexUsuarios/>})}><span className="icon-circle">4</span> Responsables</a></li>
        </ul>

        <h1>Vista {idTramite}</h1>
        {ventana.seccion}
        <Modal/>

    </>
    )
}

export default View