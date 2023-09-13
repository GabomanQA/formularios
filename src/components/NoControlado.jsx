import { useRef, useState } from "react";

const NoControlado = () => {
  const form = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   //  console.log("me diste click")
   // console.log(form.current);
   // envia datos
    const data = new FormData(form.current);
   console.log(...data.entries());

    const {title, descripcion, estado} = Object.fromEntries([...data.entries()]);
    console.log(title, descripcion, estado);

    //valida los datos
      if (!title.trim() || !descripcion.trim() || estado.trim()) {
        return setError("LLena todos los campos");
      };

    // enviar los datos
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input 
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2" 
        name="title"
        defaultValue="texto"
      />
      <textarea 
      className="Form-control mb-2"
      placeholder="Ingrese descripción"
      name="descripcion"
      defaultValue=" descripción"
      />
      <select 
      className="form-select mb-2" 
      name="estado"
      defaultValue="otro"
      >
        <option value="Pendiente">Pendiente</option>
        <option value="Completado">Completado</option>
        <option value="otro">otro</option>
        
      </select>
      <button type="submit" className="btn btn-primary" name="btn">Procesar</button>
      {error !=="" && error }
    </form>
  );
}
export default NoControlado;