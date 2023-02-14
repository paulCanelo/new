import React from 'react'
import { useForm } from "react-hook-form";
import { ThemeContext } from './../../components/context/Provider'

const CreateUsuario = () => {

    const {register, handleSubmit } = useForm();
    const {createUsuario} = React.useContext(ThemeContext)

    return(
    <>
        <form onSubmit={handleSubmit(createUsuario)} autoComplete="off" noValidate>
            {
                <div>
                    <label>NumeroDocumento</label>
                    <input type="text" placeholder="NumeroDocumento" id="NumeroDocumento" {...register("NumeroDocumento", {required: true})}/>

                    <label>TipoDocumento</label>
                    <input type="text" placeholder="TipoDocumento" id="TipoDocumento" {...register("TipoDocumento", {required: true})}/>

                    <label>Nombres</label>
                    <input type="text" placeholder="Nombres" id="Nombres" {...register("Nombres", {required: true})}/>

                    <label>Apellidos</label>
                    <input type="text" placeholder="Apellidos" id="Apellidos" {...register("Apellidos", {required: true})}/>

                    <label>Correo </label>
                    <input type="text" placeholder="Correo " id="Correo " {...register("Correo ", {required: true})}/>

                    <label>Password</label>
                    <input type="text" placeholder="Password" id="Password" {...register("Password", {required: true})}/>

                    <button className="btn">Crear usuario</button>
                </div>                
            }
        </form>
            
    </>
    )
}

export default CreateUsuario