import {dependenciasModel} from './../models/generalesModel.js'

export const indexDependencia = async (req, res) => {
    try{
        const dependencias = await dependenciasModel();
        return res.json({
            dependencias
        })
    } catch(error){

    }
}