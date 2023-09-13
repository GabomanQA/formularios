import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import NativeSelect from '@mui/material/NativeSelect';
import { DataGrid } from "@mui/x-data-grid";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from "axios";

  const Controlado = () => {
    const [title, setTitle] = useState('Todo 01')
    const [descripcion,setDescripcion] = useState('Descripción')
    const [idpaciente, setIdPaciente] = useState("");
    const [estado,setEstado] = useState('Pendiente');
    const [tipo,setTipo] = useState('1');
    const [rfcV,setRfc] = useState(' RFC');
    const [Paterno,setPaterno] = useState('1');
    const [Materno,setMaterno] = useState('1');
    const [Nombre,setNombre] = useState('1');
    const [fnac,setFnac] = useState('1');
    const [escuela,setEscuela] = useState('1');
    const [sexo,setSexo] = useState('M');
    const [edociv,setEdociv] = useState('1');
    const [telefonos,setTelefonos] = useState('1');
    const [afilia,setAfilia] = useState('1');
    const [count, setCount] = useState(0);
    const [rows, setRows] = useState({});
    
  
    const columns = [
      { field: "IdPaciente", headerName: "IdPaciente", width: 90 },
      { field: "Paterno",  headerName: "Apellido Paterno", width: 250, editable: true, },
      { field: "Materno",  headerName: "Apellido Materno", width: 250, editable: true, },
      { field: "Nombre", headerName: "Nombres", width: 250, editable: true,  }
    ];
  
        const handleSubmit = (e) => {
      e.preventDefault();
      
    };

    const getPacientesBtn = async () => {
      const response = await axios.get("http://localhost:3080/v1/pacientes");
      const data = response.data.recordset.map((row, index) => {
        
        return {
          IdPaciente: row.IdPaciente,
          Paterno: row.Paterno,
          Materno: row.Materno,
          Nombre: row.Nombre
        };
      });
      console.log(data);
      setRows(data);
    };
  
    const updatePacienteBtn = async () => {
      const inputValue = {
        IdPaciente: row.IdPaciente,
          Paterno: row.Paterno,
          Materno: row.Materno,
          Nombre: row.Nombre
      }
      const response = await axios.put("http://localhost:3080/v1/expedientes", inputValue)
    }
  
    return (
      <Box sx={{
        width: '60%',
        height: '60%',
        boxShadow: 3,  
        m: 2 
      }}>
      <FormGroup>
               
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">  Tipo </InputLabel>
         <Select
                  labelId="Tipo"
                  id="tipo"
                  value={tipo}
                  label="Tipo de Paciente"     
                  onChange={event => {setTipo(event.target.value)}}                             >
                  <MenuItem value={1}>Estudiante de CU</MenuItem>
                  <MenuItem value={2}>Estudiante de PM</MenuItem>
                  <MenuItem value={3}>Empleado</MenuItem>
                  <MenuItem value={4}>Aspirante a empleo</MenuItem>
                  <MenuItem value={5}>Posgrado</MenuItem>
                  <MenuItem value={6}>Otro</MenuItem>
                  <MenuItem value={8}>Intercambio</MenuItem>
                  <MenuItem value={12}>Familiar de empleado</MenuItem>
                </Select>
      </FormControl>
       <TextField required id="RFC" label="R.F.C." defaultValue="" value={rfcV} onChange={event => {setRfc(event.target.value)}} />
      <TextField required id="paterno" label="APELLIDO PATERNO" defaultValue="" value={Paterno} onChange={event => {setPaterno(event.target.value)}} />
      <TextField required id="materno" label="APELLIDO MATERNO" defaultValue="" value={Materno}  onChange={event => {setMaterno(event.target.value)}}/>
      <TextField required id="nombre" label="NOMBRES" defaultValue="" value={Nombre}  onChange={event => {setNombre(event.target.value)}}/>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Fecha de Nacimento" 
        onChange={event => {setFnac(event.target.value)}} 
        slotProps={{ textField: { size: 'small' } }}
         />
      </DemoContainer>
    </LocalizationProvider>
    <Select
                  labelId="Escuela"
                  id="Escuela"
                  value={escuela}
                  label="escuela"   onChange={event => {setEscuela(event.target.value)}}    > 
          <MenuItem value={1}>Facultad de Arquitectura</MenuItem>
          <MenuItem value={2}>Facultad de Artes y Diseño</MenuItem>
          <MenuItem value={3}>Facultad de Ciencias</MenuItem>
          <MenuItem value={4}>Facultad de Ciencias Políticas y Sociales</MenuItem>
          <MenuItem value={5}>Facultad de Química</MenuItem>
          <MenuItem value={6}>Facultad de Contaduría y Administración</MenuItem>
          <MenuItem value={7}>Facultad de Derecho</MenuItem>
          <MenuItem value={8}>Facultad de Economía</MenuItem>
          <MenuItem value={9}>Facultad de Enfermería y Obstetricia</MenuItem>
          <MenuItem value={10}>Facultad de Filosofía y Letras</MenuItem>
          <MenuItem value={11}>Facultad de Ingeniería</MenuItem>
          <MenuItem value={12}>Facultad de Medicina</MenuItem>
          <MenuItem value={13}>Facultad de Música</MenuItem>
          <MenuItem value={14}>Facultad de Odontología</MenuItem>
          <MenuItem value={15}>Escuela Nacional de Trabajo Social</MenuItem>
          <MenuItem value={16}>Facultad de Medicina Veterinaria y Zootecnia</MenuItem>
          <MenuItem value={17}>Escuela Nacional de Ciencias de la Tierra</MenuItem>
          <MenuItem value={18}>Centro de Enseñanza Para Extranjeros (CEPE)</MenuItem>
          <MenuItem value={19}>Facultad Psicología</MenuItem>
          <MenuItem value={21}>E.N.P. 1 "Gabino Barreda"</MenuItem>
          <MenuItem value={22}>E.N.P. 2 "Erasmo Castellanos Q."</MenuItem>
          <MenuItem value={23}>E.N.P. 3 "Justo Sierra"</MenuItem>
          <MenuItem value={24}>E.N.P. 4 "Vidal Castañeda y N"</MenuItem>
          <MenuItem value={25}>E.N.P. 5 "José Vasconcelos"</MenuItem>
          <MenuItem value={26}>E.N.P. 6 "Antonio Caso"</MenuItem>
          <MenuItem value={27}>E.N.P. 7 "Ezequiel A. Chávez"</MenuItem>
          <MenuItem value={28}>E.N.P. 8 "Miguel E. Schulz"</MenuItem>
          <MenuItem value={29}>E.N.P. 9 "Pedro de Alba"</MenuItem>
          <MenuItem value={31}>C.C.H. Plantel Azcapotzalco</MenuItem>
          <MenuItem value={32}>C.C.H. Plantel Naucalpan</MenuItem>
          <MenuItem value={33}>C.C.H. Plantel Vallejo</MenuItem>
          <MenuItem value={34}>C.C.H. Plantel Oriente</MenuItem>
          <MenuItem value={35}>C.C.H. Plantel Sur</MenuItem>
          <MenuItem value={42}>Escuela Nacional de Lenguas, Lingüística  y Traducción</MenuItem>
          <MenuItem value={44}>Escuela Nacional de Artes Cinematográficas</MenuItem>
          <MenuItem value={54}>Facultad de Artes y Diseño, Sede Taxco </MenuItem>
          <MenuItem value={94}>Centro Peninsular en Hum. y Ciencias Soc. - Mérida</MenuItem>
          <MenuItem value={100}>F.E.S. Cuautitlán</MenuItem>
          <MenuItem value={200}>F.E.S. Acatlán</MenuItem>
          <MenuItem value={300}>F.E.S. Iztacala</MenuItem>
          <MenuItem value={400}>F.E.S. Aragón</MenuItem>
          <MenuItem value={500}>F.E.S. Zaragoza</MenuItem>
          <MenuItem value={600}>Escuela Nacional de Estudios Superiores - Unidad León</MenuItem>
          <MenuItem value={700}>Escuela Nacional de Estudios Superiores - Unidad Morelia</MenuItem>
          <MenuItem value={800}>Escuela Nacional de Estudios Superiores Unidad Mérida</MenuItem>
          <MenuItem value={940}>Académico</MenuItem>
          <MenuItem value={950}>Empleado                   </MenuItem>
          <MenuItem value={960}>Aspirante a Empleo                   </MenuItem>
          <MenuItem value={970}>Otros                    </MenuItem>
          <MenuItem value={1000}>Instituto de Astronomía</MenuItem>
          <MenuItem value={1003}>Instituto de Biología y Jardín Botánico</MenuItem>
          <MenuItem value={1004}>Instituto de Biotecnología</MenuItem>
          <MenuItem value={1005}>Instituto de Ciencias Nucleares</MenuItem>
          <MenuItem value={1006}>Instituto Ciencias del Mar y Limnología</MenuItem>
          <MenuItem value={1007}>Instituto de Ecología</MenuItem>
          <MenuItem value={1008}>Instituto de Física</MenuItem>
          <MenuItem value={1009}>Instituto de Geofísica</MenuItem>
          <MenuItem value={1010}>Instituto de Geografía</MenuItem>
          <MenuItem value={1011}>Instituto de Geología</MenuItem>
          <MenuItem value={1013}>Instituto en Matemáticas Aplicadas y Sistemas</MenuItem>
          <MenuItem value={1014}>Instituto de Investigaciones Antropológicas</MenuItem>
          <MenuItem value={1015}>Instituto de Investigaciones Bibliográficas</MenuItem>
          <MenuItem value={1016}>Instituto de Investigaciones Biomédicas</MenuItem>
          <MenuItem value={1017}>Instituto de Investigaciones Económicas</MenuItem>
          <MenuItem value={1018}>Instituto de Investigaciones Filosóficas</MenuItem>
          <MenuItem value={1019}>Instituto de Investigaciones Históricas</MenuItem>
          <MenuItem value={1020}>Instituto de Invstigaciones Jurídicas</MenuItem>
          <MenuItem value={1021}>Instituto de Investigaciones Sociales</MenuItem>
          <MenuItem value={1022}>Instituto de Investigaciones en Materiales</MenuItem>
          <MenuItem value={1024}>Instituto de Matemáticas</MenuItem>
          <MenuItem value={1025}>Instituto de Química </MenuItem>
          <MenuItem value={1029}>Recintos Culturales</MenuItem>
          <MenuItem value={1030}>Instituto de Fisisología Celular</MenuItem>
          <MenuItem value={1031}>Instituto de Investigaciones Filológicas</MenuItem>
          <MenuItem value={1032}>Centro de Ciencias de la Atmósfera</MenuItem>
          <MenuItem value={2000}>Instituto de Biología</MenuItem>
          <MenuItem value={5000}>Sin Escuela</MenuItem>
          <MenuItem value={7000}>Dirección General de Atención a la Salud</MenuItem>
          <MenuItem value={7001}>Dirección General de Artes Visuales</MenuItem>
          <MenuItem value={7002}>Dirección General de Asuntos Jurídicos</MenuItem>
          <MenuItem value={7003}>Dirección General de Administración Escolar</MenuItem>
          <MenuItem value={7004}>Centro Universitario de Estudios Cinematográficos</MenuItem>
          <MenuItem value={7005}>Centro Universitario de Teatro</MenuItem>
          <MenuItem value={7006}>Centro de Física Aplicada y Tecnología Avanzada</MenuItem>
          <MenuItem value={7007}>Centro de Investigaciones Interdisciplinarias en Ciencias y Humanidades</MenuItem>
          <MenuItem value={7008}>Instituto de Energías Renovables</MenuItem>
          <MenuItem value={7009}>Centro de Investigación en Energía, Temixco.</MenuItem>
          <MenuItem value={7010}>Instituto de Ingeniería</MenuItem>
          <MenuItem value={7011}>Centro de Investigaciones sobre América Latina y el Caribe</MenuItem>
          <MenuItem value={7012}>Centro de Nanociencias y Nanotecnología</MenuItem>
       </Select>
       <Select labelId="Sexo" id="sexo" value={sexo} label="Sexo"  onChange={event => {setSexo(event.target.value)}}   >
           <MenuItem value={"M"}>Masculino</MenuItem>
            <MenuItem value={"F"}>Femenino</MenuItem>
        </Select>
        <Select labelId="Estadoc" id="Edoc" value={edociv}  label="edoc" onChange={event => {setEdociv(event.target.value)}}>
            <MenuItem value={1}>Soltero (a)</MenuItem>
            <MenuItem value={2}>Casado (a)</MenuItem>
            <MenuItem value={3}>Divorciado (a)</MenuItem>
            <MenuItem value={4}>Viudo (a)</MenuItem>
            <MenuItem value={5}>Unión Libre</MenuItem>
            <MenuItem value={6}>Otro</MenuItem>
        </Select>

                <TextField required id="telefono" label="Telefonos" defaultValue="" value={telefonos}  onChange={event => {setTelefonos(event.target.value)}}/>
                <TextField required id="afilia" label="Nº de Afiliación" defaultValue="" value={afilia}  onChange={event => {setAfilia(event.target.value)}}/>
                <TextField required id="idpaciente" label="Id" defaultValue="" value={idpaciente}  onChange={event => {setIdPaciente(event.target.value)}}/>
      </FormGroup>
        <Button onClick={getPacientesBtn}>Obtener Pacientes </Button>
        
        <DataGrid 
        rows={rows} 
        columns={columns} 
        initialState={{ pagination: { paginationModel: { pageSize: 5,  }, },   }} 
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        />
        
     </Box>
      );
};

export default Controlado;