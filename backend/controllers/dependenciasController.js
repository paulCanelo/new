import {indexDependenciasModel} from './../models/dependenciasModel.js'

export const indexDependencia = async (req, res) => {
    try{
        const dependencias = await dependenciasModel();
        return res.json({
            dependencias
        })
    } catch(error){

    }
}