import {pool} from './../config/db.js'

export const indexDependenciasModel = async (req, res) => {
    const [result] = await pool.query(`SELECT * FROM dependencias`);
    return result
}

export const createDependenciaModel = async (req, res) => {
    const sql = `INSERT INTO "dependencias" SET ?`;
    const [result] = await pool.query(sql, data);
    return result.insertId;
}