import {
    indexTramitesModel, 
    createTramiteModel, 
    indexEtapasModel, 
    createEtapaModel, 
    indexCamposModel, 
    createCamposModel
} from './../models/tramitesModel.js'



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

        const idTramite = await createTramiteModel(req.body)
        return res.json({
            ok: "Funcionar la ruta de creacion",
            idTramite
        })
        // Crear una funcion generica para validar que los campos esten llenos, aunque esto es generico debido a que se valida en el frontend
    } catch(error){
        console.log("Retornar el error", error)
    }
}

export const createEtapa = async (req, res) => {
    try{
        await createEtapaModel(req.body)
        return res.json({
            ok: true,
            mensaje: "Etapa creada correcramente"
        })
        // Crear una funcion generica para validar que los campos esten llenos, aunque esto es generico debido a que se valida en el frontend
    } catch(error){
        console.log("Antes imprimir el arreglo completo", req.bod)
        console.log("Retornar el error", error)
    }
}

export const indexEtapas = async (req, res) => {
    const idTramite = req.params.idTramite;
    try{
        const etapas = await indexEtapasModel(idTramite)
        return res.json({
            ok:"Funciona",
            etapas
        })
    } catch(error){
        console.log("Retornar el error", error)
    }
}

export const indexCampos = async (req, res) => {
    try{
        const campos = await indexCamposModel(req.body)
        return res.json({
            ok:"Funciona",
            campos
        })
    } catch(error){
        console.log("Retornar el error", error)
    }
}

export const createCampos = async (req, res) => {
    try{
        const {NombreTramite, IdDependencia, DescripcionTramite, RequisitosTramite, PlazoTramite} = req.body;

        await createCamposModel(req.body)
        return res.json({
            ok: "Campos creado",
        })
    } catch(error){
        console.log("Retornar el error", error)
    }
}