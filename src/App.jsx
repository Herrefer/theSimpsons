import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button } from "react-bootstrap";
import ComponenteFrase from "./components/ComponenteFrase";
import { useEffect, useState } from "react";
import logoSimpsons from "../assets/The_Simpsons_yellow_logo.svg"

function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async() => {
    //hacer una peticion get a la API
    const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const datos = await respuesta.json();
    console.log(datos[0]);
    setPersonaje(datos[0])
  };
  return (
    <main className="d-flex flex-column align-items-center">
      <div className="text-center mb-1">
        <img
          className="img-fluid simponsLogo"
          src={logoSimpsons}
          alt="logo The Simpsons"
        />
      </div>
      <ComponenteFrase personajeProps = {personaje}></ComponenteFrase>
      <Button variant="warning" onClick={consultarAPI} >Generar frase</Button>
    </main>
  );
}

export default App;
