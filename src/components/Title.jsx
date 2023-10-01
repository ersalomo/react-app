const Title = (props) => {
  const { title, children } = props;
  return (
    <div className="eight">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
