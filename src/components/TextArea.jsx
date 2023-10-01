const TextArea = (props) => {
  const {
    placeHolder = 'enter value',
    id,
    className,
    name,
    value,
    onChange,
  } = props;

  return (
    <>
      <textarea
        name={name}
        className={className}
        id={id}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        cols="40"
        rows="5"
      />
    </>
  );
};

export default TextArea;
