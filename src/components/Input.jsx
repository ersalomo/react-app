const Input = (props) => {
  const {
    type = 'text',
    placeHolder = 'enter value',
    id,
    name,
    value,
    onChange,
    className = '',
  } = props;

  return (
    <div className="input-wrapper">
      <input
        type={type}
        placeholder={placeHolder}
        id={id}
        name={name}
        className={`input ${className}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
