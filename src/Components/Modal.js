import './quiz.css';
import React from "react";
import outcomeCrosswalk from "./outcomeCrosswalk.json";

function Modal({ outcomeString, closeModal }) {
    const getResultFromCrosswalk = (outcomeString) => {
        const trimmedOutcomeString = outcomeString.slice(0, -1);
        for (const key in outcomeCrosswalk) {
            if (key === trimmedOutcomeString) {
                return outcomeCrosswalk[key];
            }
        }
            return "No match found";
    };


    return (
    <div className="modal">
        <div className="modalContent">
            <p>You are a...</p>
            <h3>{getResultFromCrosswalk(outcomeString)}</h3>
            <button onClick={closeModal}>Close</button>
        </div>
    </div>
    );
}

export default Modal;