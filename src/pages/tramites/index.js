import React from 'react'
import Header from './../../components/layouts/header'
import Menu from './../../components/layouts/menu'
import Content from './../../components/layouts/content'
import { ThemeContext } from './../../components/context/Provider'
import { Link } from "react-router-dom"; //Outlet, Link 
import Modal from "./../../components/layouts/modal"
import Create from "./create"


const Tramites = () => {
    const {indexTramites, tramitesindex, modal, setModal} = React.useContext(ThemeContext)

    React.useEffect(() => {
        indexTramites();
    }, [])
    console.log("Aqui imprime el inicial", tramitesindex)


    return(<>
    <Header/>
    <Menu/>
    <Content/>
    
    <button onClick={() => setModal({activar: true, ventana: <Create/>})}>Crear tramite</button>
    <table>
    {
        tramitesindex.length != 0 ? 
            tramitesindex?.map((item) => (
                <tr>
                    <td><Link to={`/view/${item.IdTramite}`}>{item.NombreTramite}</Link></td>
                </tr>
            ))
        
        : <p>No hay tramites aun</p>
    }
        
    </table>
    <Modal/>
</>)
}

export default Tramites