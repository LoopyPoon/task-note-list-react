import React from "react";
import './App.css';

function Note({ title, content, tags }) {
    return (
        <div className="note">
            <h3>{title}</h3>
            <p>{content}</p>
            <div className="tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    );
}

export default Note;
