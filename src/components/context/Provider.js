import React from 'react'
export const ThemeContext = React.createContext()

const ThemeProvider = (props) => {
    const [tramites, setTramites] = React.useState([]);
    const [etapasindex, setEtapasindex] = React.useState([]);
    const [camposindex, setCamposindex] = React.useState([])
    const [usuariosindex, setUsuariosindex] = React.useState([])
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
            setTramites(response)
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

    const CreateUsuario = async (data) => {
        try {
            const datos = await fetch(`${process.env.REACT_APP_URL}/usuarios-create`, await request('POST', data))
            const response = await datos.json() 
            setModal({activa: false})
        } catch (error){
            console.log(error)
        }
    }    

    return (
        <ThemeContext.Provider value={{
            indexTramites, tramites, createTramites, respuesta,
            indexEtapas, etapasindex, createEtapas,
            indexCampos, createCampos, camposindex,
            indexUsuarios, usuariosindex,
            modal, setModal, tipo, setTipo
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider