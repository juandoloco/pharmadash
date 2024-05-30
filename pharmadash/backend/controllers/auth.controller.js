const pool = require('../config/db.config.js');

//funcion para validar los datos del login
const getPro = async (req, res) => {
    const { user} = req.body;

    try {
        const response = await pool.query('SELECT * FROM usuario');
        res.status(200).json(response.rows);
    } catch (error) {
        console.error("Error en la consulta a la base de datos:", error);
        res.status(500).json({ error: "Error en la consulta a la base de datos" });
    }
};

module.exports = {
    getPro
};