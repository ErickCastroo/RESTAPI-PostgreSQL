import { Router } from "express";
import {
  obtenerUsuarios,
  crearUsuario,
  obtenerUsuario,
  borrarUsuario,
  actualizarUsuario,
} from "../controllers/user.controller.js";


const router = Router();

//Get all users
router.get("/usuario", obtenerUsuarios);

//___________________________________________________________________

//Get user by id
router.get("/usuario/:id", obtenerUsuario);

//___________________________________________________________________

//Create user
router.post("/usuario", crearUsuario);

//___________________________________________________________________

//Delete user
router.delete("/usuario/:id", borrarUsuario);

//___________________________________________________________________
//Update user

router.put("/usuario/:id", actualizarUsuario);




export { router };
