const express = require("express");

//  Crear distintos Routers para distintos tipos de modelos de datos
const PacientesRouter = require("./PacientesRouter")
// const UsuariosRouter = require("./UsuariosRouter")

// Inicializar el router general
const api = express.Router()

// Agregando routers subsecuentes
// localhost:3080/v1/expedientes
api.use("/pacientes", PacientesRouter)
// localhost:3080/v1/usuarios
// api.use("/usuarios", UsuariosRouter)

module.exports = api