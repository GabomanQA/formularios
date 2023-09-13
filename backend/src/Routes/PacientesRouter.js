const { Router } = require("express");
const {
  httpGetPacientes,
  httpGetPacientesByIdPaciente,
  httpUpdateUsuarioModifico
} = require("../controllers/PacientesController");
const PacientesRouter = Router();

// GET expedientes/
// Se obtienen todos los expedientes
PacientesRouter.get("/", httpGetPacientes);
PacientesRouter.get("/:idpaciente", httpGetPacientesByIdPaciente);
PacientesRouter.put("/", httpUpdateUsuarioModifico);

// PacientesRouter.get("/:expid", httpGetPacienteById)

module.exports = PacientesRouter;