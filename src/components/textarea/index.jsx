import React from "react";
import './../../App.css';

function TextArea() {
    return (
        <div className="component">
            <h2>Textarea</h2>
            <we-textarea name={"MyTextArea"} disabled={false} placeholder={"Placeholder here..."} maxLength={10}></we-textarea>
        </div>
    );
}

export default TextArea;
