import Card from './Card';
import Button from './Button';
import Title from './Title';
import { showFormattedDate, getInitialData } from '../utils/utils';

const ActiveNote = (props) => {
  const { activeNotes, handleToArchiveNote, handleDeleteNote } = props;

  return (
    <>
      <Title title="Catatan Aktif" />
      <div className="active-notes-list" id="">
        {activeNotes.length ? (
          activeNotes.map((note) => {
            const { id, title, body, createdAt } = note;
            return (
              <Card key={id}>
                <Card.Header
                  title={title}
                  createdAt={showFormattedDate(createdAt)}
                />
                <Card.Body>{body}</Card.Body>
                <Card.Footer>
                  <Button
                    onClick={() => handleToArchiveNote(id)}
                    className="btn btn-archived"
                    txt="Arsipkan"
                  />
                  <Button
                    onClick={() => handleDeleteNote(id)}
                    className="btn btn-delete"
                    txt="Delete"
                  />
                </Card.Footer>
              </Card>
            );
          })
        ) : (
          <p className="">Tidak ada cacatan</p>
        )}
      </div>
    </>
  );
};

export default ActiveNote;
