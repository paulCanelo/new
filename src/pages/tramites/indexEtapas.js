import React from 'react'
import { ThemeContext } from './../../components/context/Provider'
import CreateEtapa from "./createEtapas"
import IndexFlujo from "./indexFlujo"

const IndexEtapas = ({idTramite}) => {
    
    const {indexEtapas, etapasindex, setModal} = React.useContext(ThemeContext)

    React.useEffect(() => {
        indexEtapas(idTramite);
    }, []) // etapasindex

    return(
    <>
        <div style={{width: "26%", float: "left"}}>
        {
            etapasindex.length != 0 ? etapasindex.map((item) => (
                <div className='etapas'>
                    <p>{item.NombreEtapa} - {item.IdEtapa}</p>
               </div>
            )) : <p>Aun no hay etapas registradas</p>
        }
        <button onClick={() => setModal({activar: true, ventana: <CreateEtapa idTramite={idTramite}/>})} className="btn">Crear Etapas</button>
        </div>
        <IndexFlujo idTramite={idTramite}/>
    </>
    )
}

export default IndexEtapas;