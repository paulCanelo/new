import React from 'react'
export const ThemeContext = React.createContext()

const ThemeProvider = (props) => {
    const [tramites, setTramites] = React.useState([]);
    const [modal, setModal] = React.useState(false);
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
            const datos = await fetch(`${process.env.REACT_APP_URL}/tramites-index`, await request('GET', data))
            const response = await datos.json() 
            setTramites(response)
        } catch (error){
            console.log(error)
        }
    }

    return (
        <ThemeContext.Provider value={{
            indexTramites, tramites,
            modal, setModal, tipo, setTipo
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider