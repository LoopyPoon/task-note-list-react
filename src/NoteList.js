import React, { useState } from "react";
import './App.css';

function NoteList({ notes, selectNote, addNote, selectedNoteIndex, deleteNote, addTask }) {
    const [searchText, setSearchText] = useState('');
    const scrollRef = React.useRef(null);

    const scrollUp = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop -= 100;
        }
    };

    const scrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop += 100;
        }
    };

    // Фильтрация заметок на основе текста поиска
    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="note-list">
            <h3 className="h3">Notes</h3>
            <div className="button-container">
                <button className="add-note-btn" onClick={addNote}>Add note</button>
                <button className="add-task-btn" onClick={addTask}>Add task</button>
            </div>

            {/* Поле ввода для поиска */}
            <input
                type="text"
                placeholder="Search notes..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="search-input"
            />
            {notes.length > 6 && (
                <button className="scroll-button" onClick={scrollUp}>↑</button>
            )}
            <ul ref={scrollRef}>
                {filteredNotes.length > 0 ? (
                    filteredNotes.map((note, index) => (
                        <li key={index} className={index === selectedNoteIndex ? 'active' : ''}>
                            <div className="note-title" onClick={() => selectNote(index)}>
                                {note.title}
                            </div>
                            <button className="delete-note-btn"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Предотвращаем выбор заметки при нажатии на кнопку удаления
                                        deleteNote(index);
                                    }}
                            >
                                Delete
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="empty">No notes available</li>
                )}
            </ul>
            {notes.length > 6 && (
                <button className="scroll-button" onClick={scrollDown}>↓</button>
            )}
        </div>
    );
}

export default NoteList;