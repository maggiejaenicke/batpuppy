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
            <p><i>You are a...</i></p>
            <h3 style={{color: '#795F80', fontSize: '24px'}}>{batpuppy}!</h3>
            <p>{batpuppyDescription}</p>
            <p style={{fontSize: '14px'}}><i>What if my batpuppy doesn't seem exactly like me? You're uniquely you! No batpuppy can match your one-of-a-kind personality : )</i></p>
            <button onClick={closeModal}>Close</button>
        </div>
    </div>
    );
}

export default Modal;