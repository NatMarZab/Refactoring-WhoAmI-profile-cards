// //Aquí importaríamos Palette.

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
          {/* Aquí llamaríamos 3 veces a Palette con sus props
        para cada una de las opciones de palette.
        Después habría que borrar las 2 ul de abajo ("opt2color" y "opt3color").  */}

          <ul className="opt2color">
            <label for="palets1">
              <input
                type="radio"
                value="2"
                className="choosecolor js-CHeckColor2"
                id="palets1"
                name="palette"
              />
            </label>
            <li className="opt2-1"></li>
            <li className="opt2-2"></li>
            <li className="opt2-3"></li>
          </ul>
          <ul className="opt3color">
            <label for="palets2">
              <input
                type="radio"
                value="3"
                className="choosecolor js-CHeckColor3"
                id="palets2"
                name="palette"
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
