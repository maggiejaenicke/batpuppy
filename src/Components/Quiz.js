import { useState } from "react"
// const [activeQuestion, setActiveQuestion] = useState(0)
// const [selectedAnswer, setSelectedAnswer] = useState('')

// const onClickNext = () => {
//   setActiveQuestion((prev) => prev + 1)
// }

function App() {
  const hello = 1;
  const [question1, setQuestion1] = useState("0")

  const onOptionChange1 = e => {
    setQuestion1(e.target.value)
  }
  const [question2, setQuestion2] = useState("0")

  const onOptionChange2 = e => {
    setQuestion2(e.target.value)
  }

  const [question3, setQuestion3] = useState("0")

  const onOptionChange3 = e => {
    setQuestion3(e.target.value)
  }

  const [question4, setQuestion4] = useState("0")

  const onOptionChange4 = e => {
    setQuestion4(e.target.value)
  }

  const [question5, setQuestion5] = useState("0")

  const onOptionChange5 = e => {
    setQuestion5(e.target.value)
  }

  const total = question1 + question2 + question3 + question4 + question5
  let typeOfBat;
  if (total === 2 || total === 4 || total === 6) {
    typeOfBat = 'Fruit Bat'
  }
  if (total === 3 || total === 5) {
    typeOfBat = 'Vampire Bat'
  }

  return (
<div className="App">
  <div class="quiz">
    <div class="quizHeader">
      <strong> What kind of batpuppy am I?</strong><br></br><br></br>
    </div>
    {hello === 1 && 
    <div class="question">
      <div class="innerQuestion">
        Do you prefer spending time alone or with others?
      </div>
    </div>}

    <div class="answer">
        <div class="innerAnswer">
                <input
                    type="radio"
                    name="question1"
                    value="A"
                    id="Introvert"
                    checked={question1 === "A"}
                    onChange={onOptionChange1}
                />
              
                <label htmlFor="Introvert">Alone     </label>
                <input
                    type="radio"
                    name="question1"
                    value="B"
                    id="Extrovert"
                    checked={question1 === "B"}
                    onChange={onOptionChange1}
                />
                <label htmlFor="Extrovert">With others     </label>
                <input
                    type="radio"
                    name="question1"
                    value="C"
                    id="Depends"
                    checked={question1 === "C"}
                    onChange={onOptionChange1}
                />
                <label htmlFor="Depends">It depends</label><br></br><br></br>
        </div>
    </div>
    <button class="nextButton" onClick=''>Next Question</button>

    {/* 
                What's your favorite food?<br></br>
                <input
                    type="radio"
                    name="question2"
                    value="D"
                    id="Meat"
                    checked={question2 === "D"}
                    onChange={onOptionChange2}
                />
                <label htmlFor="Meat">I'm a meat lover</label>

                <input
                    type="radio"
                    name="question2"
                    value="E"
                    id="Fruit"
                    checked={question2 === "E"}
                    onChange={onOptionChange2}
                />
                <label htmlFor="Fruit">I love fresh fruit!</label>
                <br></br><br></br>

                How would you rather spend your winter?<br></br>
                <input
                    type="radio"
                    name="question3"
                    value="G"
                    id="Cozy"
                    checked={question3 === "G"}
                    onChange={onOptionChange3}
                />
                <label htmlFor="Cozy">Cozied up where I am</label>

                <input
                    type="radio"
                    name="question3"
                    value="H"
                    id="Warm"
                    checked={question3 === "H"}
                    onChange={onOptionChange3}
                />
                <label htmlFor="Warm">I'm heading somewhere warm!</label>

                <input
                    type="radio"
                    name="question3"
                    value="I"
                    id="AlreadyWarm"
                    checked={question3 === "I"}
                    onChange={onOptionChange3}
                />
                <label htmlFor="AlreadyWarm">I already live somewhere warm!</label><br></br><br></br>

                What region would you most want to live in?<br></br>
                <input
                    type="radio"
                    name="question4"
                    value="J"
                    id="NorthAmerica"
                    checked={question4 === "J"}
                    onChange={onOptionChange4}
                />
                <label htmlFor="NorthAmerica">North America</label>

                <input
                    type="radio"
                    name="question4"
                    value="K"
                    id="Africa"
                    checked={question4 === "K"}
                    onChange={onOptionChange4}
                />
                <label htmlFor="Africa">Africa</label>

                <input
                    type="radio"
                    name="question4"
                    value="L"
                    id="PacificIslands"
                    checked={question4 === "L"}
                    onChange={onOptionChange4}
                />
                <label htmlFor="PacificIslands">Pacific Islands</label><br></br><br></br>

                What's your happy place?<br></br>
                <input
                    type="radio"
                    name="question5"
                    value="M"
                    id="Forest"
                    checked={question5 === "M"}
                    onChange={onOptionChange5}
                />
                <label htmlFor="Forest">Forest</label>

                <input
                    type="radio"
                    name="question5"
                    value="N"
                    id="Caves"
                    checked={question5 === "N"}
                    onChange={onOptionChange5}
                />
                <label htmlFor="Caves">Caves</label>

                <input
                    type="radio"
                    name="question5"
                    value="O"
                    id="City"
                    checked={question5 === "O"}
                    onChange={onOptionChange5}
                />
                <label htmlFor="City">The city</label> */}
                {/* <p>
                    I am a... <strong>{total}</strong>
                </p> */}
  </div>
</div>
  )
}

export default App




// export default function Quiz(props){
//     const [counter, setCounter] = useState(0)
//     const [results, setResults] = useState(0)
//     const [color, setColor] = useState('green')
//     const handleClick = () => {
//         setCounter(counter + 1)
//         //access the values from the radio buttons and add them up
//         setResults(results)
//         var ele = document.getElementsByName('question1');
 
//             for (i = 0; i < ele.length; i++) {
//                 if (ele[i].checked)
//                     document.getElementById("result").innerHTML
//                         = "Gender: " + ele[i].value;
//             }
//             console.log('question 1', document.getElementById('question1').value);
    

//     }
//     const random_hex_color_code = () => {
//         let n = (Math.random() * 0xfffff * 1000000).toString(16);
//         return '#' + n.slice(0, 6);
//       };
//       //console.log(random_hex_color_code())
//     useEffect(()=>{
//         setColor(random_hex_color_code)
//     }, [counter])

//     //console.log(document.getElementById('rates').value)


//     useEffect(()=>{

//     }, [])
//     return (
//         <div class="quiz">
//         <h2>What kind of batpuppy am I?</h2>
//         {/* <p>Puppy's name is {puppyName}</p> */}
//         <h4>What's your ideal vaction spot? </h4>
//             <div id="question1">
//                 <input type="radio" value="1" name="question1" /> An awesome cave
//                 <input type="radio" value="2" name="question1" /> An old forest
//                 <input type="radio" value="3" name="question1" /> Anywhere with open spaces!
//             </div>
//         <h4>Are you more introverted or extroverted? </h4>
//             <div>
//                 <input type="radio" value="1" name="question2" /> Introvert
//                 <input type="radio" value="2" name="question2" /> Extrovert
//                 <input type="radio" value="3" name="question2" /> Depends on the day
//             </div>
//         {/* <p>Question 3: </p>
//             <div>
//                 <input type="radio" value="Male" name="question3" /> Male
//                 <input type="radio" value="Female" name="question3" /> Female
//                 <input type="radio" value="Other" name="question3" /> Other
//             </div> */}
//             <br></br>
//         <button onClick={handleClick} style={{color: color}}>Load my results</button>
//         <div id="result"></div>

//         <p>{counter}</p>
//         </div>
//     )
// }