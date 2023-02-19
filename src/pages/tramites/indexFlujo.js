import React from 'react'
import { ThemeContext } from './../../components/context/Provider'
import CreateFlujo from "./createFlujo"
import { Link } from "react-router-dom";


const IndexFlujo = ({idTramite}) => {
    
    const {indexFlujo, flujoindex, setModal} = React.useContext(ThemeContext)
    let idEtapa = 0;

    React.useEffect(() => {
        indexFlujo(idTramite);
    }, []) // etapasindex

    return(
    <>
        <div style={{width: "74%", float: "left"}}>
        {
            flujoindex.length != 0 ? flujoindex.map((item) => (
                //item.EtapaSiguiente !== null || (item.FinalEtapa !== "false" && idEtapa === item.IdEtapa) || (idEtapa === item.IdEtapa)?
                    <Link to="#" onClick={() => setModal({activar: true, ventana: <CreateFlujo idEtapa={item.IdEtapa} estado={item.Etapas_IdEtapa === null ? true : false}/>})} key={item.IdEtapa} style={{margin: "20px"}} className="etapas">
                        <p>ID DE LA ETAPA: {item.IdEtapa}</p>
                        <p>Id de la etapa siguiente {item.EtapaSiguiente}</p>
                        <p>{item.NombreEtapa}</p>
                        <p style={{display: "none"}}>{idEtapa = item.EtapaSiguiente}</p>
                   </Link> //: null
            )) : <p>Aun no hay etapas registradas</p>
        }
        </div>
    </>
    )
}

export default IndexFlujo;