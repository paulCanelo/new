import {pool} from './../config/db.js'

export const indexTramitesModel = async (req, res) => {
    const [result] = await pool.query(`SELECT * FROM tramites`);
    return result
}

export const createTramiteModel = async (data) => {
    const sql = `INSERT INTO tramites SET ?`;
    const [result] = await pool.query(sql, data);
    return result.insertId;
}

export const createEtapaModel = async (data) => {
    const sql = `INSERT INTO etapas SET ?`;
    const [result] = await pool.query(sql, data);
    return result.insertId;
}

export const indexEtapasModel = async (idTramite) => {
    const sql = `SELECT * FROM etapas WHERE idTramite = ?`;
    const [result] = await pool.query(sql, idTramite);
    return result;
}

export const indexCamposModel = async (idTramite) => {
    const sql = `SELECT * FROM campos`;
    const [result] = await pool.query(sql, idTramite);
    return result;
}

export const createCamposModel = async (data) => {
    const sql = `INSERT INTO campos SET ?`;
    const [result] = await pool.query(sql, data);
    return result;
}