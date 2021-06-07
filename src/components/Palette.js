// Variarán algunos valores (p.ej.: className, value, etc...) cuando sepamos hacerlo

function Palette(props) {
  return (
    <>
      <ul className="optionColor">
        <label htmlFor={props.id}>
          <input
            type="radio"
            value={props.value}
            className={`choosecolor ${props.className}`}
            id={props.id}
            name="palette"
          />
        </label>

        <li className={props.palette1}></li>
        <li className={props.palette2}></li>
        <li className={props.palette3}></li>
      </ul>
    </>
  );
}

export default Palette;
