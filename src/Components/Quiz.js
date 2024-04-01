import { useState } from "react";
import questions from "./questions";
import Modal from "./Modal";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [outcomeString, setOutcomeString] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setModalOpen(true);
    }
    setOutcomeString(outcomeString + selectedOption);
  };

  const handleRadioSelect = (value) => {
    const updatedOutcomeString = outcomeString.replace(selectedOption, '');
    setSelectedOption(value);
    setOutcomeString(updatedOutcomeString + value);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  let buttonText;
  if (questionIndex < questions.length - 1) {
    buttonText = "Next Question";
  } else {
    buttonText = "What am I?";
  }

  return (
    <div className="App">
      <div className="quiz">
        <div className="quizHeader">
          <b>What kind of batpuppy am I?</b><br /><br />
        </div>
        {/* <div className="question"> */}
          <div className="innerQuestion">{questions[questionIndex].name}</div>
        {/* </div> */}
        <div className="answerContainer"> {/* Set display to flex */}
          {questions[questionIndex].options.map((option, index) => (
            // <div className="answer" key={index}>
              <div className="innerAnswer">
                <input
                  type="radio"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={() => handleRadioSelect(option.value)}
                />
                <label>{option.label}</label>
                <br /><br />
              </div>
            // </div>
          ))}
        </div>
        <button className="nextButton" onClick={handleNextQuestion}>
          {buttonText}
        </button>
      </div>
      {/* Render modal conditionally */}
      {modalOpen && (
        <Modal outcomeString={outcomeString} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;