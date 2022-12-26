import NoteItem from '../Note';

export default function NoteList(props) {
    const { notes, deleteNote } = props;

    const elements = notes.map(note => <NoteItem key={note.id} note={note} deleteNote={deleteNote} />)

    return (
        <ul className='notes-list'>
            {elements}
        </ul>
    )

}