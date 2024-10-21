import React, { useState } from 'react';
import './NoteBook.css';

function NoteBook({ id, title, content, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(id, editedTitle, editedContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(title);
    setEditedContent(content);
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{content}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </>
      )}
    </div>
  );
}

function Notebook() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([
      ...notes,
      { id: Date.now(), title: 'New Note', content: '' }
    ]);
  };

  const editNote = (id, title, content) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, title, content } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="notebook">
      <h1>My Notebook</h1>
      <button className='add' onClick={addNote}>Add Note</button>
      <div className="notes-list">
        {notes.map((note) => (
          <NoteBook
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            onEdit={editNote}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default Notebook;  
