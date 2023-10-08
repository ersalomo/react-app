const Card = (props) => {
  const { children, className = '' } = props;
  return <div className={`card ${className}`}>{children}</div>;
};
const Header = (props) => {
  const { title, createdAt } = props;
  return (
    <div className="header">
      <p className="title">{title}</p>
      <p className="sub-title">{createdAt}</p>
    </div>
  );
};
const Body = (props) => {
  const { children } = props;
  return <p className="message">{children}</p>;
};
const Footer = (props) => {
  const { children } = props;
  return <div className="actions">{children}</div>;
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
