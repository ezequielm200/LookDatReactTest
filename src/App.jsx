import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [equipos, setEquipos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3050/api/equipos");
      const equipos = await response.json();
      setEquipos(equipos.equipos);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Equipos encontrados</h1>
      <div className="App">
        {equipos.map((equipos) => (
          <div className="card">
            <h3>{equipos.serie}</h3>
            <p>Ingresó al Stock con fecha {equipos.ingreso_stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
