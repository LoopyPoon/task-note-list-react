import React from "react";
import './App.css';


function NoteEditor({ currentNote, updateNote }) {
    return (
        <div className="note-editor">
            {/* Поле для заголовка */}
            <input
                type="text"
                placeholder="Enter the note title"
                value={currentNote.title}
                onChange={(e) => updateNote('title', e.target.value)}
            />
            {/* Поле для текста заметки */}
            <textarea
                placeholder="Enter the text of the note"
                value={currentNote.content}
                onChange={(e) => updateNote('content', e.target.value)}
            />
        </div>
    );
}

export default NoteEditor;