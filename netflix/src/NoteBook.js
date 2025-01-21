import React, { useState } from 'react';
import './NoteBook.css';
import { getFunctions, httpsCallable } from 'firebase/functions';


function NoteBook({ id, title, content, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    onEdit(id, editedTitle, editedContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(title);
    setEditedContent(content);
  };

  // Function to handle image upload, conversion, and text extraction
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
        const base64 = await convertToBase64(file);
        const functions = getFunctions();
        const annotateImage = httpsCallable(functions, 'annotateImage');
        
        try {
            const result = await annotateImage({ imageBase64: base64 });
            console.log("Annotate Image Result:", result); // Debugging line
            
            const detectedText = result?.data?.text || 'No text found.';
            console.log("Detected Text:", detectedText); // Debugging line

            // Update the content
            setEditedContent((prevContent) => `${prevContent}\n${detectedText}`);
        } catch (error) {
            console.error("Error recognizing text:", error);
            setEditedContent((prevContent) => `${prevContent}\n[Error reading image]`);
        }
    }
};


  // Helper function to convert image file to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]); 
      reader.onerror = (error) => reject(error);
    });
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
            placeholder="Your text here"
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
      {isEditing && (
        <>
          <label htmlFor="file-upload" className="upload-label">Upload Image</label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </>
      )}
    </div>
  );
}

function Notebook() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, { id: Date.now(), title: 'New Note', content: '' }]);
  };

  const editNote = (id, title, content) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, title, content } : note)));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const copyAllNotes = () => {
    const allContent = notes.map(note => `${note.title}\n${note.content}`).join('\n\n');
    navigator.clipboard.writeText(allContent)
      .then(() => alert("All notes copied to clipboard!"))
      .catch(err => console.error("Failed to copy notes:", err));
  };

  return (
    <div className="notebook">
      <h1>My Notebook</h1>
      <button className="add" onClick={addNote}>Add Note</button>
      <button className="copy" onClick={copyAllNotes}>Copy All Notes</button>
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
