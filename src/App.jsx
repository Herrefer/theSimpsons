import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button } from "react-bootstrap";
import ComponenteFrase from "./components/ComponenteFrase";

function App() {
  return (
      <main className="d-flex flex-column align-items-center">
        <div className="text-center mb-1">
          <img
            className="img-fluid simponsLogo"
            src="../assets/The_Simpsons_yellow_logo.svg"
            alt="logo The Simpsons"
          />
        </div>
        <ComponenteFrase></ComponenteFrase>
        <Button variant="warning">Generar frase</Button>
      </main>
  );
}

export default App;
