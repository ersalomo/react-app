import Card from './Card';
import Button from './Button';
import Title from './Title';
import { showFormattedDate, getInitialData } from '../utils/utils';

const ArhivedNote = (props) => {
  const { archivedNotes, handleToArchiveNote, handleDeleteNote } = props;

  return (
    <>
      <Title title="Arsip" />
      <div className="active-notes-list">
        {archivedNotes.length ? (
          archivedNotes.map((note) => {
            const { id, title, body, createdAt, archived } = note;
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

export default ArhivedNote;
