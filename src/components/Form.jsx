import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Alert from './Alert';
import TextArea from './TextArea';
import { toTitleCase } from '../utils/utils';

const MAX_LENGTH_TITLE = 50;

const Form = (props) => {
  const { type, children, notes, setNotes } = props;

  const [form, setForm] = useState({ title: '', body: '' });
  const [countLengthTitle, setCountLengthTitle] = useState(0);
  const [errMsgs, setErrMsgs] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      if (value.length > MAX_LENGTH_TITLE) {
        setErrMsgs([`The field ${name} max length is ${MAX_LENGTH_TITLE}`]);
        return;
      }
      setCountLengthTitle(value.length);
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    const errors = [];
    for (const [key, value] of Object.entries(form)) {
      if (!value.length) {
        errors.push(`The field ${key} is required`);
      }
    }

    if (errors.length) {
      setErrMsgs(errors);
      return;
    }

    const note = {
      id: +new Date(),
      ...form,
      title: toTitleCase(form.title),
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setForm({ title: '', body: '' });
    setNotes([...notes, note]);
    setErrMsgs([]);
    setCountLengthTitle(0);
  };
  return (
    <div className="form-container">
      {errMsgs.length > 0 &&
        errMsgs.map((msg, i) => {
          return <Alert key={i} message={msg} />;
        })}
      <form action="" className="form">
        <div className="form-group">
          <label htmlFor="title">
            Title
            <Input
              id="title"
              onChange={onChange}
              name="title"
              value={form.title}
            />
            <span>
              {`tersedia ${
                MAX_LENGTH_TITLE - countLengthTitle
              } panjang maximal ${MAX_LENGTH_TITLE}`}
            </span>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="body">
            Body
            <TextArea
              id="body"
              onChange={onChange}
              name="body"
              className=""
              value={form.body}
            />
          </label>
        </div>

        <Button
          txt="simpan"
          type="submit"
          className="form-submit-btn"
          onClick={handleAddNote}
        />
      </form>
    </div>
  );
};

export default Form;
