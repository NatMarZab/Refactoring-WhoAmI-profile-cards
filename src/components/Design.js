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
          <ul className="optionColor">
            <Palette value="1" className="js-CHeckColor1" id="palets"></Palette>
            <li className="opt1-1"></li>
            <li className="opt1-2"></li>
            <li className="opt1-3"></li>
          </ul>

          {/* Aquí llamaríamos 3 veces a Palette con sus props
        para cada una de las opciones de palette.
        Después habría que borrar las 2 ul de abajo ("opt2color" y "opt3color").  */}
          <ul className="opt1color">
            <label for="palets">
              <input
                value="1"
                className="choosecolor js-CHeckColor1"
                id="palets"
              />
            </label>
            <li className="opt1-1"></li>
            <li className="opt1-2"></li>
            <li className="opt1-3"></li>
          </ul>
          <ul className="opt2color">
            <label for="palets1">
              <input
                value="2"
                className="choosecolor js-CHeckColor2"
                id="palets1"
              />
            </label>
            <li className="opt2-1"></li>
            <li className="opt2-2"></li>
            <li className="opt2-3"></li>
          </ul>
          <ul className="opt3color">
            <label for="palets2">
              <input
                value="3"
                className="choosecolor js-CHeckColor3"
                id="palets2"
              />
            </label>
            <li className="opt3-1"></li>
            <li className="opt3-2"></li>
            <li className="opt3-3"></li>
          </ul>
        </div>
      </div>
    </fieldset>
  );
}

export default Design;
