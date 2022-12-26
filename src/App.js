import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NoteList from './components/NoteList';

export default function App() {
  const [notes, setNotes] = useState([]);

  const getAllNotes = () => {
    fetch("http://localhost:7777/notes")
      .then(response => response.json())
      .then((notes) => {
        setNotes(notes)
      })
  }

  useEffect(() => {
    getAllNotes()
  }, [])

  const addNote = (note) => {
    fetch("http://localhost:7777/notes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    }).then(() => getAllNotes())
  }

  const deleteNote = (id) => {
    fetch(`http://localhost:7777/notes/${id}`, {
      method: 'DELETE',
    }).then(() => getAllNotes())
  }


  return (
    <div className="App">
      <Header getAllNotes={getAllNotes} />
      <NoteList notes={notes} deleteNote={deleteNote} />
      <Form addNote={addNote} />
    </div>
  )



}