import React from 'react'
import { useForm } from "react-hook-form";
import { ThemeContext } from './../../components/context/Provider'


const CreateCampos = () => {

    const {register, handleSubmit } = useForm();
    const {createCampos} = React.useContext(ThemeContext)

    return(
        <>
            <form onSubmit={handleSubmit(createCampos)} autoComplete="off" noValidate>
                {
                    <div>
                        <label>NombreCampo</label>
                        <input type="text" placeholder="NombreCampo" id="NombreCampo" {...register("NombreCampo", {required: true})}/>

                        <label>Tipo</label>
                        <input type="text" placeholder="Tipo" id="Tipo" {...register("Tipo", {required: true})}/>

                        <label>Obligatorio</label>
                        <input type="text" placeholder="Obligatorio" id="Obligatorio" {...register("Obligatorio", {required: true})}/>

                        <label>Descripcion</label>
                        <input type="text" placeholder="Descripcion" id="Descripcion" {...register("Descripcion", {required: true})}/>
                        <button className="btn">Crear Etapa</button>
                    </div>                
                }
            </form>
            
    </>
    )
}

export default CreateCampos