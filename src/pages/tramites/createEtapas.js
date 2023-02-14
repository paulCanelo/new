import React from 'react'
import { useForm } from "react-hook-form";
import { ThemeContext } from './../../components/context/Provider'


const CreateEtapa = ({idTramite}) => {

    const {register, handleSubmit } = useForm();
    const {createEtapas} = React.useContext(ThemeContext)

    return(
        <>
            <form onSubmit={handleSubmit(createEtapas)} autoComplete="off" noValidate>
                {
                    <div>
                        <input type="text" {...register("idTramite", {required: true})}/>
                        <label>NombreEtapa</label>
                        <input type="text" placeholder="NombreEtapa" id="NombreEtapa" {...register("NombreEtapa", {required: true})}/>

                        <label>DuracionEtapa</label>
                        <input type="text" placeholder="DuracionEtapa" id="DuracionEtapa" {...register("DuracionEtapa", {required: true})}/>

                        <label>InicialEtapa</label>
                        <input type="text" placeholder="InicialEtapa" id="InicialEtapa" {...register("InicialEtapa", {required: true})}/>

                        <label>FinalEtapa</label>
                        <input type="text" placeholder="FinalEtapa" id="FinalEtapa" {...register("FinalEtapa", {required: true})}/>

                        <label>Decision</label>
                        <input type="text" placeholder="Decision" id="Decision" {...register("Decision", {required: true})}/>

                        <label>TituloDesicion</label>
                        <input type="text" placeholder="TituloDesicion" id="TituloDesicion" {...register("TituloDesicion", {required: true})}/>

                        <label>DescripcionDesicion</label>
                        <input type="text" placeholder="DescripcionDesicion" id="DescripcionDesicion" {...register("DescripcionDesicion", {required: true})}/>
                        <button className="btn">Crear Etapa</button>
                    </div>                
                }
            </form>
            
    </>
    )
}

export default CreateEtapa