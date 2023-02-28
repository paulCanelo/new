import React from 'react'
export const ThemeContext = React.createContext()

const ThemeProvider = (props) => {
    const [tramitesindex, setTramitesindex] = React.useState([]);
    const [etapasindex, setEtapasindex] = React.useState([]);
    const [camposindex, setCamposindex] = React.useState([])
    const [usuariosindex, setUsuariosindex] = React.useState([])
    const [flujoindex, setFlujoindex] = React.useState([])
    const [modal, setModal] = React.useState({
        activar: false
    });
    const [tipo, setTipo] = React.useState();

    const request = (method, data) => {
        return {
            method,
            headers: {
                'Content-Type': 'application/json', 
                'token-login': localStorage.getItem('token-login') !== null ? localStorage.getItem('token-login') : null,
            },
            body: JSON.stringify(data),
        }
    }

    const indexTramites = async (data) => {
        try {
            const datos = await fetch(`${process.env.REACT_APP_URL}/tramite-index`, await request('GET', data))
            const response = await datos.json() 
            console.log(response)
            setTramitesindex(response.tramites)
        } catch (error){
            console.log(error)
        }
    }

    const [respuesta, setRespuesta] = React.useState({});
    const createTramites = async (data) => {
        try {
            const datos = await fetch(`${process.env.REACT_APP_URL}/tramite-create`, await request('POST', data))
            const response = await datos.json() 
            setRespuesta({
                ok: true,
                idTramite: response.idTramite
            })
        } catch (error){
            console.log(error)
        }
    }

    const indexEtapas = async (idTramite) => {
        try {
            const datos = await fetch(`${process.env.REACT_APP_URL}/etapas-index/${idTramite}`, await request('GET'))
            const response = await datos.json() 
            setEtapasindex(response.etapas)
            console.log(response)
        } catch (error){
            console.log(error)
        }
    }

    const createEtapas = async (data) => {
        try {
            const datos = await fetch(`${process.env.REACT_APP_URL}/etapas-create`, await request('POST', data))
            const response = await datos.json() 
            setModal({activa: false})
        } catch (error){
            console.log(error)
        }
    }

    const createCampos = async (data) => {
        try {
            const datos = await fetch(`${process.env.REACT_APP_URL}/campos-create`, await request('POST', data))
            const response = await datos.json() 
            setModal({activa: false})
        } catch (error){
            console.log(error)
        }
    }

    const indexCampos = async (idTramite) => {
        try {
            const datos = await fetch(`${process.env.REACT_APP_URL}/campos-index`, await request('GET'))
            const response = await datos.json() 
            setCamposindex(response.campos)
        } catch (error){
            console.log(error)
        }
    }

    const indexUsuarios = async () => {
        try {
            const datos = await fetch(`${process.env.REACT_APP_URL}/index-usuarios`, await request('GET'))
            const response = await datos.json() 
            setUsuariosindex(response.usuarios)
        } catch (error){
            console.log(error)
        }
    }

    const createUsuario = async (data) => {
        try {
            const datos = await fetch(`${process.env.REACT_APP_URL}/create-usuarios`, await request('POST', data))
            const response = await datos.json() 
            setModal({activa: false})
            console.log(response)
        } catch (error){
            console.log(error)
        }
    }    

    const indexFlujo = async (idTramite) => {
        try {
            const datos = await fetch(`${process.env.REACT_APP_URL}/flujo-index/${idTramite}`, await request('GET'))
            const response = await datos.json() 
            setModal({activa: false})
            setFlujoindex(response.flujo)
            console.log(response)
        } catch (error){
            console.log(error)
        }
    }   
    
    const createFlujo = async (data) => {
        try {
            const datos = await fetch(`${process.env.REACT_APP_URL}/flujo-create`, await request('POST', data))
            const response = await datos.json() 
            setModal({activa: false})
            console.log(response)
        } catch (error){
            console.log(error)
        }
    }   

    return (
        <ThemeContext.Provider value={{
            indexTramites, tramitesindex, createTramites, respuesta,
            indexEtapas, etapasindex, createEtapas,
            indexCampos, createCampos, camposindex,
            indexUsuarios, usuariosindex, createUsuario,
            modal, setModal, tipo, setTipo,
            indexFlujo, flujoindex, createFlujo
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider