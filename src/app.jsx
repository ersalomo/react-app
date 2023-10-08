import { useState, useEffect } from 'react';
import { showFormattedDate, getInitialData } from './utils/utils';
import Form from './components/Form';
import Search from './components/Search';
import ArchivedNote from './components/ArchivedNote';
import ActiveNote from './components/ActiveNote';

export default function App(props) {
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState(getInitialData());

  const [filteredNotes, setFilteredNotes] = useState({
    activeNotes: [],
    archivedNotes: [],
  });

  useEffect(() => {
    const lowerSearch = search.toLowerCase();

    const filtered = notes.reduce(
      (result, note) => {
        const { archived, title, body } = note;
        if (
          !archived &&
          (!lowerSearch ||
            title.toLowerCase().includes(lowerSearch) ||
            body.toLowerCase().includes(lowerSearch))
        ) {
          result.activeNotes.push(note);
        } else if (archived) {
          result.archivedNotes.push(note);
        }
        return result;
      },
      { activeNotes: [], archivedNotes: [] }
    );

    setFilteredNotes(filtered);
  }, [notes, search]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setSearch(value);
  };
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleToArchiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  return (
    <div className="" id="main">
      <Form setNotes={setNotes} notes={notes} />
      <Search onChange={onChange} placeHolder="cari..." className="search" />

      <ActiveNote
        activeNotes={filteredNotes.activeNotes}
        handleDeleteNote={handleDeleteNote}
        handleToArchiveNote={handleToArchiveNote}
      />

      <ArchivedNote
        archivedNotes={filteredNotes.archivedNotes}
        handleDeleteNote={handleDeleteNote}
        handleToArchiveNote={handleToArchiveNote}
      />
    </div>
  );
}
