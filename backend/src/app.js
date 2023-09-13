const cors = require("cors")
const helmet = require("helmet")
const express = require("express")
const path = require("path")
const api = require("./routes/api")

// Inicializar dotenv para archivos .env, los cuales te permiten alojar llaves a APIs
// No deben jamás subirse al repositorio
require("dotenv").config()

// Inicializa el objeto express que servirá para el servidor.
const app = express()

// Agregar dependencias
app.use(helmet()) // Seguridad
app.use(cors({ // Autorizador de peticiones
    origin: "http://localhost:5173"
}))
app.use(express.json()) // Permite usar objetos JSON en peticiones y respuestas
app.use(express.static(path.join(__dirname, "..", "/public"))) // Da acceso a imágenes, íconos, etc. 

// Se crea una ruta llamada API, y desde él se definen endpoints y lógica
// GET http://localhost:3080/v1/expedientes
app.use("/v1", api)

module.exports = app