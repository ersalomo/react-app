import Input from './Input';

const Search = (props) => {
  const {
    type = 'text',
    placeHolder = 'enter value',
    id,
    name,
    value,
    onChange,
    className = '',
  } = props;
  return <Input {...props} />;
};

export default Search;
