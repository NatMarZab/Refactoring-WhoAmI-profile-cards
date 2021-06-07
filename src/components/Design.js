// //Aquí importaríamos Palette.

import Palette from "./Palette";

function Design() {
  return (
    <fieldset className="colors">
      <div className="colors__line">
        <legend className="colors__title">
          <i
            className="far fa-object-ungroup boxy js-colorea"
            aria-hidden="true"
          ></i>
          DISEÑA
        </legend>
        <i className="fas fa-chevron-up colors-up"></i>
      </div>

      <div className="colors_design">
        <h3 className="colorstitle">Colores</h3>
        <div className="palette">
          <Palette
            value="1"
            className="js-CHeckColor1"
            id="palets"
            palette1="opt1-1"
            palette2="opt1-3"
            palette3="opt1-2"
          ></Palette>
          <Palette
            value="2"
            className="js-CHeckColor2"
            id="palets1"
            palette1="opt2-1"
            palette2="opt2-2"
            palette3="opt2-3"
          ></Palette>
          <Palette
            value="3"
            className="js-CHeckColor3"
            id="palets2"
            palette1="opt3-1"
            palette2="opt3-2"
            palette3="opt3-3"
          ></Palette>

          {/* Aquí llamaríamos 3 veces a Palette con sus props
        para cada una de las opciones de palette.
        Después habría que borrar las 2 ul de abajo ("opt2color" y "opt3color").  */}
        </div>
      </div>
    </fieldset>
  );
}

export default Design;
