import {pool} from './../config/db.js'

export const indexDependenciasModel = async (req, res) => {
    const [result] = await pool.query(`SELECT * FROM tramites`);
    return result
}