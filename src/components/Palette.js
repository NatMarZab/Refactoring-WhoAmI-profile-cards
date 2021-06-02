// Variarán algunos valores (p.ej.: className, value, etc...) cuando sepamos hacerlo

function Palette() {
  return (
    <ul className="opt1color">
      <label for="palets">
        <input
          type="radio"
          value="1"
          className="choosecolor js-CHeckColor1"
          id="palets"
          name="palette"
        />
      </label>
      <li className="opt1-1"></li>
      <li className="opt1-2"></li>
      <li className="opt1-3"></li>
    </ul>
  );
}

export default Palette;
