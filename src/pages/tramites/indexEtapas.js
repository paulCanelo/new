import React from 'react'
import { ThemeContext } from './../../components/context/Provider'
import CreateEtapa from "./createEtapas"

const IndexEtapas = ({idTramite}) => {
    
    const {indexEtapas, etapasindex, setModal} = React.useContext(ThemeContext)

    React.useEffect(() => {
        indexEtapas(idTramite);
    }, []) // etapasindex

    return(
    <>
        {
            etapasindex.length != 0 ? etapasindex.map((item) => (
               <p>{item.NombreEtapa}</p>
            )) : <p>Aun no hay etapas registradas</p>
        }
        <button onClick={() => setModal({activar: true, ventana: <CreateEtapa idTramite={idTramite}/>})} className="btn">Crear Etapas</button>
    </>
    )
}

export default IndexEtapas;