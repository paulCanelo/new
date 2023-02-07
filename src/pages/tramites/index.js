import React from 'react'
import Header from './../../components/layouts/header'
import Menu from './../../components/layouts/menu'
import Content from './../../components/layouts/content'
import { ThemeContext } from './../../components/context/Provider'
import { Link } from "react-router-dom"; //Outlet, Link 
import Modal from "./../../components/layouts/modal"
import { Animated } from "react-animated-css";


const Tramites = () => {
    const {indexTramites, tramites, modal, setModal} = React.useContext(ThemeContext)

    React.useEffect(() => {
        indexTramites();
        console.log(tramites)
    }, [])


    return(<>
    <Header/>
    <Menu/>
    <Content/>
    
    <button onClick={() => setModal(true)}>Crear tramite</button>
    <table>
    {
        tramites.length > 0? 
            tramites.map((item) => {
                <tr>
                    <td><Link to="">{tramites.nombreTramite}</Link></td>
                </tr>
            })
        
        : <p>No hay tramites aun</p>
    }
        
    </table>
    <Modal/>
</>)
}

export default Tramites