import React from "react";
import './App.css';

/**
 * Компонент для редактирования текущей заметки.
 *
 * @param {Object} props - Пропсы компонента.
 * @param {Object} props.currentNote - Текущая заметка.
 * @param {string} props.currentNote.title - Заголовок заметки.
 * @param {string} props.currentNote.content - Содержимое заметки.
 * @param {function} props.updateNote - Функция для обновления заметки.
 * @param {string} props.updateNote.field - Поле, которое нужно обновить ('title' или 'content').
 * @param {string} props.updateNote.value - Новое значение для указанного поля.
 * @returns {JSX.Element} Компонент редактора заметок.
 */
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