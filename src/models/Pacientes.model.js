const sql = require("mssql");
require("dotenv").config();

const CONNECTION_STRING =
  "Server=" +
  process.env.DB_HOST +
  ";Database=" +
  process.env.DB_SCHEMA +
  ";User Id=" +
  process.env.DB_USER +
  ";Password=" +
  process.env.DB_PSW +
  ";Encrypt=false";


  
async function getPacientes() {
  try {
    const pool = await sql.connect(CONNECTION_STRING);
    const result = await pool.query("select * from pacientes;");
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function getPacientesByIdPaciente(idPaciente) {
  try {
    const pool = await sql.connect(CONNECTION_STRING);

    const result = await pool
      .request()
      .input("id_paciente", sql.Numeric, idPaciente)
      .query("select * from pacientes where IdPaciente = @id_paciente;");

    return result;
  } catch (error) {
    console.error(error);
  }
}

async function updateUsuarioModifico(idPaciente, Paterno, materno, nombre, vigencia, FechaNacimiento, Escuela, Sexo, Telefonos, EstadoCivil, Tipo, SeguridadSocial, AfiliacionSS) {
  try {
    const pool = await sql.connect(CONNECTION_STRING);
    const result = await pool
      .request()
      .input("id_paciente_input", sql.Numeric, idPaciente)
      .input("Paterno_input", sql.VarChar, Paterno)
      .input("materno_input", sql.VarChar, materno)
      .input("nombre_input", sql.VarChar, nombre)
      .input("Vigencia_input", sql.VarChar, vigencia)
      .input("FechaNacimiento_input", sql.VarChar, FechaNacimiento)
      .input("Escuela_input", sql.VarChar, Escuela)
      .input("Sexo_input", sql.VarChar, Sexo)
      .input("Telefonos_input", sql.VarChar, Telefonos)
      .input("EstadoCivil_input", sql.VarChar, EstadoCivil)
      .input("Tipo_input", sql.VarChar, Tipo)
      .input("SeguridadSocial_input", sql.VarChar, SeguridadSocial)
      .input("AfiliacionSS_input", sql.VarChar, AfiliacionSS)
      

      // @id_paciente_input, @Paciente_input,@Paterno_input,@materno_input, @nombre_input, @Vigencia_input, @FechaNacimiento_input, @Escuela_input, @Sexo_input, @Telefonos_input, adoCivil_input, @Tipo_input, @SeguridadSocial_input, @AfiliacionSS_input


      .query("update pacientes set UsuarioModifico = @usuario_input where IdPaciente = @id_paciente_input and Estatus =  @estatus_input;");

    return result;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getPacientes,
  getPacientesByIdPaciente,
  updateUsuarioModifico
};