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