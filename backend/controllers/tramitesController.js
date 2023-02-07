import {indexTramitesModel} from './../models/tramitesModel.js'



export const indexTramites = async (req, res) => {
    try{
        const tramites = await indexTramitesModel();
        return res.json({
            tramites
        })
    } catch(error){

    }
}

export const createTramites = async (req, res) => {
    try{
        const {NombreTramite, IdDependencia, DescripcionTramite, RequisitosTramite, PlazoTramite} = req.body;
        // Crear una funcion generica para validar que los campos esten llenos, aunque esto es generico debido a que se valida en el frontend
    } catch(error){
        console.log("Retornar el error")
    }
}