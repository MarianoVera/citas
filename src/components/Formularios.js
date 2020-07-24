import React, { Fragment } from "react";

const Formulario = () => {
  return (
    <Fragment>
      <h2>Cita</h2>

      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de Mascota"
        />
      </form>
    </Fragment>
  );
};

export default Formulario;
