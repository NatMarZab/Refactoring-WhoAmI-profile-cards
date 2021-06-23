// //Aquí importaríamos Palette.

import Palette from "./Palette";

function Design({ palette, onChangePalette }) {
  return (
    <fieldset className="colors">
      <div className="colors_design">
        <h3 className="colorstitle">Colores</h3>
        <div className="palette">
          <Palette
            value="1"
            id="palets"
            checked={palette === "1"}
            onChange={onChangePalette}
            palette1="opt1-1"
            palette2="opt1-3"
            palette3="opt1-2"
          ></Palette>
          <Palette
            value="2"
            id="palets1"
            checked={palette === "2"}
            onChange={onChangePalette}
            palette1="opt2-1"
            palette2="opt2-2"
            palette3="opt2-3"
          ></Palette>
          <Palette
            value="3"
            id="palets2"
            checked={palette === "3"}
            onChange={onChangePalette}
            palette1="opt3-1"
            palette2="opt3-2"
            palette3="opt3-3"
          ></Palette>
        </div>
      </div>
    </fieldset>
  );
}

export default Design;
