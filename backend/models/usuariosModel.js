import {pool} from './../config/db.js'

export const indexUsuariosModel = async () => {
    const [result] = await pool.query(`SELECT * FROM usuarios`);
    return result
}

export const createUsuariosModel = async (data) => {
    const sql = `INSERT INTO usuarios SET ?`;
    const [result] = await pool.query(sql, data);
    return result.insertId;
}

export const viewUsuariosModel = async (idUsuario) => {
    const sql = `SELECT * FROM usuarios WHERE idUsuario = ?`;
    const [result] = await pool.query(sql, idUsuario);
    return result;
}
