import React from 'react'
import { useForm } from "react-hook-form";
import { ThemeContext } from './../../components/context/Provider'


const CreateFlujo = ({idEtapa, estado}) => {

    const {register, handleSubmit } = useForm();
    const {createFlujo} = React.useContext(ThemeContext)

    return(
        <>
            <form onSubmit={handleSubmit(createFlujo)} autoComplete="off" noValidate>
                {
                    <div>
                        <input type="hidden" value={idEtapa} {...register("Etapas_IdEtapa", {required: true})}/>
                        <input type="hidden" value={estado} {...register("estado", {required: true})}/>

                        <label>Etapa Siguiente</label>
                        <input type="text" placeholder="EtapaSiguiente" id="EtapaSiguiente" {...register("EtapaSiguiente", {required: true})}/>

                        <button className="btn">Guardar Cambios</button>
                    </div>                
                }
            </form>
            
    </>
    )
}

export default CreateFlujo