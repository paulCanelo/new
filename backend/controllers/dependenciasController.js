import {indexDependenciasModel} from './../models/dependenciasModel.js'

export const indexDependencia = async (req, res) => {
    try{
        const dependencias = await indexDependenciasModel();
        return res.json({
            dependencias
        })
    } catch(error){

    }
}

export const createDependencia = async (req, res) => {
    try{
        const dependencias = await createDependenciaModel();
        return res.json({
            dependencias
        })
    } catch(error) {
        console.log(error)
    }
}