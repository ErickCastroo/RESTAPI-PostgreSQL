import { pool } from "../db/db.js";


//--------------------------------------------------------------------------------
//Get all users                                                                  |
//el row (filas) es un array de objetos que contiene los datos de los usuarios   |
//--------------------------------------------------------------------------------

export const obtenerUsuarios = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM usuario");
  res.json(rows);
};




//--------------------------------------------------------------------
//Create user                                                        |
//el 'retruning *' es para que devuelva los datos del usuario creado |
//--------------------------------------------------------------------

export const crearUsuario = async (req, res) => {
  const data = req.body;
    const { rows } = await pool.query(
      "INSERT INTO usuario (nombre, correo, password ) VALUES ($1,$2,$3) RETURNING *",
      [data.nombre, data.correo, data.password]
    );
    res.json(rows);
  } 





//----------------------------------------------
//Get user by id                               | 
//----------------------------------------------

export const obtenerUsuario = async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query("SELECT * FROM usuario WHERE id = $1", [
    id,
  ]);

  if (rows.length === 0) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }
  return res.json(rows[0]);
};




//------------------------------------------------------------------------
//Delete user                                                            |                 
//el 'retruning *' es para que devuelva los datos del usuario eliminado  |
//------------------------------------------------------------------------

export const borrarUsuario = async (req, res) => {
  const { id } = req.params;
  const { rows, rowCount } = await pool.query(
    "DELETE FROM usuario WHERE id = $1 RETURNING *",
    [id]
  );

  if (rowCount.length === 0) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
  return res.status(204).json({ mensaje: "Usuario eliminado correctamente" });
};






//----------------------------------------------
//Update user                                  |
//----------------------------------------------


export const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const { rows } = await pool.query(
    "UPDATE usuario SET nombre = $1, correo = $2, password = $3 WHERE id =$4 RETURNING *",
    [data.nombre, data.correo, data.password, id]
  );

  return res.json(rows[0]);
};
