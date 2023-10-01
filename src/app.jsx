import { useState, useEffect } from 'react';
import { showFormattedDate, getInitialData } from './utils/utils';
import Form from './components/Form';
import Search from './components/Search';
import ArchivedNote from './components/ArchivedNote';
import ActiveNote from './components/ActiveNote';

export default function App(props) {
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState(getInitialData());
  const [activeNotes, setActiveNotes] = useState(
    notes.filter(({ archived }) => !archived)
  );
  const [archivedNotes, setArchiveNotes] = useState(
    notes.filter(({ archived }) => archived)
  );

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const active = notes.filter(
      ({ archived, title, body }) =>
        !archived &&
        (!lowerSearch ||
          title.toLowerCase().includes(lowerSearch) ||
          body.toLowerCase().includes(lowerSearch))
    );

    const archieved = notes.filter(({ archived }) => archived);

    setActiveNotes(active);
    setArchiveNotes(archieved);
  }, [notes, search]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setSearch(value);
  };
  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleToArchiveNote = (id) => {
    toogleArchived(id);
  };

  const toogleArchived = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    if (index === -1) {
      return;
    }

    const updateNotes = [...notes];
    const note = updateNotes[index];
    const newNote = { ...note, archived: !note.archived };
    updateNotes[index] = newNote;
    setNotes(updateNotes);
  };

  return (
    <div className="" id="main">
      <Form setNotes={setNotes} notes={notes} />
      <Search onChange={onChange} placeHolder="cari..." className="search" />

      <ActiveNote
        activeNotes={activeNotes}
        handleDeleteNote={handleDeleteNote}
        handleToArchiveNote={handleToArchiveNote}
      />

      <ArchivedNote
        archivedNotes={archivedNotes}
        handleDeleteNote={handleDeleteNote}
        handleToArchiveNote={handleToArchiveNote}
      />
    </div>
  );
}
