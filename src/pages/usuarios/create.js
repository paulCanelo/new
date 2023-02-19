import React from 'react'
import { useForm } from "react-hook-form";
import { ThemeContext } from './../../components/context/Provider'

const CreateUsuario = () => {

    const {register, handleSubmit } = useForm();
    const {createUsuario} = React.useContext(ThemeContext)

    const formulario = (data) => {
        console.log("IMPRIME LA INFORMACION DEL FORMULARIO", data)
    }

    return(
    <>
        <form onSubmit={handleSubmit(createUsuario)} autoComplete="off" noValidate>
            {
                <div>
                    <label>NumeroDocumento</label>
                    <input type="text" name='NumeroDocumento' placeholder="NumeroDocumento" id="NumeroDocumento" {...register("NumeroDocumento", {required: true})}/>

                    <label>TipoDocumento</label>
                    <input type="text" name='TipoDocumento' placeholder="TipoDocumento" id="TipoDocumento" {...register("TipoDocumento", {required: true})}/>

                    <label>Nombres</label>
                    <input type="text" name='Nombres' placeholder="Nombres" id="Nombres" {...register("Nombres", {required: true})}/>

                    <label>Apellidos</label>
                    <input type="text" name='Apellidos' placeholder="Apellidos" id="Apellidos" {...register("Apellidos", {required: true})}/>

                    <label>Correo </label>
                    <input type="text" name='Correo' placeholder="Correo " id="Correo" {...register("Correo", {required: true})}/>

                    <label>Password</label>
                    <input type="text" name='Password' placeholder="Password" id="Password" {...register("Password", {required: true})}/>

                    <button className="btn">Crear usuario</button>
                </div>                
            }
        </form>
            
    </>
    )
}

export default CreateUsuario