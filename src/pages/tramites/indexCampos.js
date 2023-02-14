import React from 'react'
import { ThemeContext } from './../../components/context/Provider'
import CreateCampos from "./createCampos"


const IndexEtapas = ({idTramite}) => {
    
    const {indexCampos, camposindex, setModal} = React.useContext(ThemeContext)

    React.useEffect(() => {
        indexCampos(idTramite);
    }, [camposindex])

    return(
    <>
        {
            camposindex.length != 0 ? camposindex.map((item) => (
               <p>{item.NombreCampo}</p>
            )) : <p>Aun no hay Campois registradas</p>
        }
        <button onClick={() => setModal({activar: true, ventana: <CreateCampos/>})}>Crear Campo</button>
    </>
    )
}

export default IndexEtapas;