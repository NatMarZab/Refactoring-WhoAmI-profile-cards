function Input(props) {
  return (
    <>
      <label className="details__label" htmlFor={props.id}>
        {props.text}
      </label>
      <input
        className="details__input"
        id={props.id}
        type="text"
        name={props.name}
        title={props.title}
        placeholder={props.placeholder}
      />
    </>
  );
}

export default Input;
