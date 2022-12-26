export default function NoteItem(props) {
    const { note, deleteNote } = props;

    return (
        <li className='notes-item'>
            <div className='notes-item-content'>{note.content}</div>
            <div className='delete-btn' onClick={() => deleteNote(note.id)}>
                <img src="https://cdn-icons-png.flaticon.com/512/4947/4947222.png" alt='delete button' />
            </div>
        </li>
    )

}