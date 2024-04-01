import './quiz.css';
import React from "react";
import outcomeCrosswalk from "./outcomeCrosswalk.json";
import QuizBank from "./QuizBank.js";

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

const batpuppy = getResultFromCrosswalk(outcomeString);
const batpuppyInfo = QuizBank.find((entry) => entry.batpuppy === batpuppy);
const batpuppyDescription = batpuppyInfo ? batpuppyInfo.description : "Make sure you selected a response for each question!";

    return (
    <div className="modal">
        <div className="modalContent">
            <p>You are a...</p>
            <h3>{batpuppy}</h3>
            <p>{batpuppyDescription}</p>
            <button onClick={closeModal}>Close</button>
        </div>
    </div>
    );
}

export default Modal;