import {
    indexUsuariosModel, 
    createUsuariosModel,
    viewUsuariosModel
} from '../models/usuariosModel.js'



export const indexUsuarios = async (req, res) => {
    try{
        const usuarios = await indexUsuariosModel();
        console.log("Lista de usuarios que esta llegando del modelo", usuarios)
        return res.json({
            usuarios
        })

    } catch(error){
        console.log("Aqui el error", error)
    }
}

export const createUsuarios = async (req, res) => {
    try{
        const {NombreTramite, IdDependencia, DescripcionTramite, RequisitosTramite, PlazoTramite} = req.body;

        const idTramite = await createUsuariosModel(req.body)
        return res.json({
            ok: "Funcionar la ruta de creacion",
            idTramite
        })
    } catch(error){
        console.log("Retornar el error", error)
    }
}

export const viewUsuarios = async (req, res) => {
    const idUsuario = req.params.idUsuario;
    try{
        const usuario = await viewUsuariosModel(idUsuario)
        return res.json({
            ok: true,
            usuario,
        })
        // Crear una funcion generica para validar que los campos esten llenos, aunque esto es generico debido a que se valida en el frontend
    } catch(error){
        console.log("Retornar el error", error)
    }
}