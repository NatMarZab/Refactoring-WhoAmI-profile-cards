// Variarán algunos valores (p.ej.: className, value, etc...) cuando sepamos hacerlo

function Palette(props) {
  return (
    <>
      <ul className="optionColor">
        <label htmlFor={props.id}>
          <input
            type="radio"
            value={props.value}
            className="choosecolor"
            id={props.id}
            name="palette"
            checked={props.checked}
            onChange={props.onChange}
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
