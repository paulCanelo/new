import React from 'react'

const Create = () => {

    const [ventana, setVentana] = React.useState(1)
    return(
        <>
            <ul id="menu">
				<li><a onClick={() => setVentana(1)}><span className="icon-circle">1</span> Identificacion</a></li>
				<li><a onClick={() => setVentana(2)}><span className="icon-circle">2</span> Informacion</a></li>
				<li><a onClick={() => setVentana(3)}><span className="icon-circle">3</span> Requisitos</a></li>
				<li><a onClick={() => setVentana(4)}><span className="icon-circle">4</span> Atencion</a></li>
				<li><a onClick={() => setVentana(5)}><span className="icon-circle">5</span> Parametros</a></li>
			</ul>
			<div id="contenedor">
				<h1>Aqui el contenido de cada seccion ${ventana}</h1>
				<button class="btn">SIGUIENTE</button>
			</div>

                {
                    ventana === 1 ?
                    <div>
                        <label>Nombre del tramite</label>
                        <input placeholder='Nombre del tramite'/>
                    </div>
                    : ventana === 2?
                    <div>
                        <label>Dependencia</label>
                        <select>
                            <option>Seleccione Dependencia del tramite</option>
                        </select><br></br>
                    </div>: ventana === 3? 
                    <div>
                        <label>Descripcion</label>
                        <textarea placeholder='Descripcion del tramite'/>
                    </div> : ventana === 4?
                    <div>
                        <label>Requisitos del Tramite</label>
                        <textarea placeholder='Requisitos del tramite'/>
                    </div>:
                    <div>
                        <label>Plazo Personalizado</label>
                        <input placeholder='Plazo personalizado'/><br></br>
                    </div>

                }
                
                
                
                {/* Anadir btn de volver pero que sea opcional "analizar" */}

                


                <button onClick={() => {ventana > 4?setVentana(ventana):setVentana(ventana + 1)}}>Siguiente</button>

                {/* Verificar opcion de anadir btn de volver en esta seccion" */}

    </>
    )
}

export default Create