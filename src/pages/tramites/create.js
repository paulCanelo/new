import React from 'react'
import { useForm } from "react-hook-form";
import { ThemeContext } from './../../components/context/Provider'
import { useNavigate } from "react-router-dom";


const Create = () => {

    const [ventana, setVentana] = React.useState(1)
    const {register, handleSubmit } = useForm();
    const {createTramites, respuesta} = React.useContext(ThemeContext)

    const crearTramite = (data) =>{
        console.log("AQUI SE RECIBE LA INFORMACION", data)
    }

    const navigate = useNavigate()
    React.useEffect(() => {
        if(respuesta.ok === true){
            navigate(`/view/${respuesta.idTramite}`);
        }
      }, [respuesta]);

    return(
        <>
            <ul id="menu">
				<li className={ventana === 1? "active" : ""}><a onClick={() => setVentana(1)}><span className="icon-circle">1</span> Identificacion</a></li>
				<li className={ventana === 2? "active" : ""}><a onClick={() => setVentana(2)}><span className="icon-circle">2</span> Informacion</a></li>
				<li className={ventana === 3? "active" : ""}><a onClick={() => setVentana(3)}><span className="icon-circle">3</span> Requisitos</a></li>
				<li className={ventana === 4? "active" : ""}><a onClick={() => setVentana(4)}><span className="icon-circle">4</span> Atencion</a></li>
				<li className={ventana === 5? "active" : ""}><a onClick={() => setVentana(5)}><span className="icon-circle">5</span> Parametros</a></li>
			</ul>

            <form onSubmit={handleSubmit(createTramites)} autoComplete="off" noValidate>
                {
                    ventana === 1 ?
                    <div>
                        <label>Nombre del tramite</label>
                        <input type="text" placeholder="Nombre del tramite" id="NombreTramite" {...register("NombreTramite", {required: true})}/>
                    </div>
                    : ventana === 2?
                    <div>
                        <label>Dependencia</label>
                        <input type="text" placeholder="Dependencia" id="IdDependencia" {...register("IdDependencia", {required: true})}/>
                    </div>: ventana === 3? 
                    <div>
                        <label>Descripcion</label>
                        <textarea type="text" placeholder="Descripcion del tramite" id="DescripcionTramite" {...register("DescripcionTramite", {required: true})}/>
                    </div> : ventana === 4?
                    <div>
                        <label>Requisitos del Tramite</label>
                        <textarea type="text" placeholder="Requisitos del tramite" id="RequisitosTramite" {...register("RequisitosTramite", {required: true})}/>
                    </div>:
                    <div>
                        <label>Plazo Tramite</label>
                        <input type="text" placeholder="Plazo Personalizado" id="PlazoTramite" {...register("PlazoTramite", {required: true})}/>
                    </div>

                }

                <button className="btn">Crear Tramite</button>
            </form>
                
                <button className="btn" onClick={() => {ventana > 4?setVentana(ventana):setVentana(ventana + 1)}}>Siguiente</button>
                
                
                {/* Anadir btn de volver pero que sea opcional "analizar" */}

                {/* Verificar opcion de anadir btn de volver en esta seccion" */}

    </>
    )
}

export default Create