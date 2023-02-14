import React from 'react'
import { ThemeContext } from './../../components/context/Provider'
import CreateUsuario from "./create"


const IndexEtapas = () => {
    
    const {indexUsuarios, usuariosindex, setModal} = React.useContext(ThemeContext)

    React.useEffect(() => {
        indexUsuarios();
    }, [])

    return(
    <>
        {
            usuariosindex.length != 0 ? usuariosindex.map((item) => (
               <p>{item.Nombres}</p>
            )) : <p>Aun no hay Campois registradas</p>
        }
        <button onClick={() => setModal({activar: true, ventana: <CreateUsuario/>})}>Crear usuario</button>
    </>
    )
}

export default IndexEtapas;