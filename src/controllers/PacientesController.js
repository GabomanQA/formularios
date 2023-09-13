const {
    getPacientes,
    getpacientesByIdPaciente,
    updateUsuarioModifico
  } = require("../models/Pacientes.model");
  
  async function httpGetPacientes(req, res) {
    const pacientes = await getPacientes();
    console.log(pacientes);
    res.status(200).json(pacientes);
  }
  
  async function httpGetPacientesByIdPaciente(req, res) {
    const IdPaciente = req.params.idpaciente;
    const pacientes = await getPacientesByIdPaciente(IdPaciente);
    console.log(pacientesientes);
    res.status(200).json(pacientes);
  }
  
  async function httpUpdateUsuarioModifico(req, res) {
    const input = req.body;
    const response = await updateUsuarioModifico(input.IdPaciente, 
      input.paciente, 
      input.paterno, 
      input.materno, input.nombre, 
      input.vigencia, 
      input.FechaNacimiento, 
      input.Escuela, 
      input.Sexo, 
      input.Telefonos, 
      input.EstadoCivil, 
      input.Tipo, 
      input.SeguridadSocial, 
      input.AfiliacionSS );
    console.log(response);
    res.status(200).json(response);
  }
  
  async function httpGetEscuelas(req, res) {
    const escuelasData = await getEscuelas();
    console.log(escuelasData);
    res.status(200).json(escuelasData);
  }
  
  module.exports = { httpGetPacientes, httpGetPacientesByIdPaciente, httpUpdateUsuarioModifico, httpGetEscuelas };