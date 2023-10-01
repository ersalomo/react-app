const Button = (props) => {
  const {
    type = 'button',
    name,
    children,
    txt,
    onClick,
    className = '',
  } = props;
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {txt || children}
    </button>
  );
};

export default Button;
