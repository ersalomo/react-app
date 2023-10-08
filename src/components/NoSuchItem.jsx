const NoSuchItem = ({ msg = 'Note is empty' }) => {
  const style = {
    maxWidth: '320px',
    display: 'flex',
    padding: '0.5rem 1.4rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 700,
    textAlign: 'center',
    textTransform: 'uppercase',
    verticalAlign: 'middle',
    alignItems: 'center',
    borderRadius: '0.5rem',
    border: '1px solid rgba(0, 0, 0, 0.25)',
    gap: '0.75rem',
    color: 'rgb(65, 63, 63)',
    backgroundColor: '#fff',
    transition: 'all 0.6s ease',
  };

  style.button = {
    '&:hover': {
      transform: 'scale(1.02)',
    },
  };

  return <p style={style}>{msg}</p>;
};

export default NoSuchItem;
