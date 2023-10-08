import Card from './Card';
import Button from './Button';
import Title from './Title';
import NoSuchItem from './NoSuchItem';
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
                    txt="Batal"
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
          <NoSuchItem msg="Archived note is empty" />
        )}
      </div>
    </>
  );
};

export default ArhivedNote;
