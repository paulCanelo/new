import {pool} from './../config/db.js'

export const indexTramitesModel = async (req, res) => {
    const [result] = await pool.query(`SELECT * FROM tramites`);
    return result
}