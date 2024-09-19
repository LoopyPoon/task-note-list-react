import React, {useState} from "react";
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import TaskList from "./TaskList";
import './App.css';

function App() {
    const [notes, setNotes] = useState([]); // Список заметок
    const [currentNote, setCurrentNote] = useState({title: '', content: ''}); // Текущая заметка
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(null); // Выбранная заметка
    const [tasks, setTasks] = useState([]);

    // Добавить новую заметку
    const addNote = () => {
        if (currentNote.title.trim() === '' && currentNote.content.trim() === '') return;
        const newNote = {...currentNote};
        setNotes([...notes, newNote]);
        setSelectedNoteIndex(notes.length); // Выбираем последнюю добавленную
        setCurrentNote({title: '', content: ''}); // Очищаем текстареа
    };

    // Добавить новую задачу как стикер
    const addTask = () => {
        if (currentNote.content.trim() === '') return; // Проверяем, что поле не пустое
        const newTask = {content: currentNote.content, completed: false};
        setTasks([...tasks, newTask]);
        setCurrentNote({title: '', content: ''}); // Очищаем поле ввода
    };

    // Выбрать заметку для отображения
    const selectNote = (index) => {
        setSelectedNoteIndex(index);
        setCurrentNote(notes[index]);
    };

    // Обновить текст и заголовок выбранной заметки
    // const updateNote = (key, value) => {
    //     const updatedNotes = [...notes];
    //     updatedNotes[selectedNoteIndex] = {...updatedNotes[selectedNoteIndex], [key]: value};
    //     setNotes(updatedNotes);
    //     setCurrentNote({...currentNote, [key]: value});
    // };

    const updateNote = (key, value) => {
        setCurrentNote({...currentNote, [key]: value});
    }

    // Удалить заметку
    const deleteNote = (index) => {
        const updatedNotes = notes.filter((_,i) => i !== index);
        setNotes(updatedNotes);

        if (index === selectedNoteIndex) {
            setCurrentNote({title: '', content: ''});
            setSelectedNoteIndex(null);
        } else if (index < selectedNoteIndex) {
            setSelectedNoteIndex(selectedNoteIndex - 1);
        }
    };

    // Отметить задачу как выполненную/невыполненную
    const toggleTaskComplete = (index) => {
        const updatedTask = [...tasks];
        updatedTask[index].completed = !updatedTask[index].completed;
        setTasks(updatedTask);
    }

    // Удалить задачу
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="app-container">
            <div className="note-container">
                {/* Список заметок */}
                <NoteList
                    notes={notes}
                    selectNote={selectNote}
                    addNote={addNote}
                    selectNoteIndex={selectedNoteIndex}
                    deleteNote={deleteNote}
                    addTask={addTask}
                />

                {/* Текстовая облатсь для заметки */}
                <NoteEditor
                    currentNote={currentNote}
                    updateNote={updateNote}
                />
            </div>
            <div className="task-container">
                {/* Список задач */}
                <TaskList
                    tasks={tasks}
                    toggleTaskComplete={toggleTaskComplete}
                    deleteTask={deleteTask}
                />
            </div>
        </div>

    )
}

export default App;
