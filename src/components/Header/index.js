export default function Header(props) {
    const { getAllNotes } = props;

    return (
        <header>
            <h1>Notes</h1>
            <div className='update-btn' onClick={() => getAllNotes()}>
                <img src="https://cdn-icons-png.flaticon.com/512/21/21100.png" alt='update button' />
            </div>
        </header>

    )

}