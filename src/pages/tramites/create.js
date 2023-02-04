import React from 'react'

const Create = () => {
    return(
        <>
            <ul>
                <li>1 Identificacion</li>
                <li>2 Informacion</li>
                <li>3 Requisitos</li>
                <li>4 Atencion</li>
                <li>5 Parametros</li>
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

export default Create