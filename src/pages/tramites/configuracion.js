import React from 'react'

const Configuracion = () => {
    return(
        <>
            <ul>
                <li>1 Etapas</li>
                <li>2 Flujo</li>
                <li>3 Formulario</li>
                <li>4 Responsables</li>
            </ul>
                <input placeholder='Nombre del tramite'/><br></br>
                
                <select>
                    <option>Seleccione Dependencia del tramite</option>
                </select><br></br>

                <textarea placeholder='Descripcion del tramite'>

                </textarea><br></br>

                <textarea placeholder='Requisitos del tramite'>

                </textarea><br></br>

                <input placeholder='Plazo personalizado'/><br></br>

                <button>Crear Tramite</button>
    </>
    )
}

export default Configuracion