// Variarán algunos valores (p.ej.: className, value, etc...) cuando sepamos hacerlo

function Palette(props) {
  return (
    <label htmlFor={props.id}>
      <input
        type="radio"
        value={props.value}
        className={`choosecolor ${props.className}`}
        id={props.id}
        name="palette"
      />
    </label>
  );
}

export default Palette;
