import React, { Fragment } from "react";
import Formulario from "./components/Formularios";

function App() {
  return (
    <Fragment>
      <h1>Administrador de Citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            1 <Formulario />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
