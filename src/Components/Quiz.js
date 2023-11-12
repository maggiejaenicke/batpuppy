import { useState } from "react"

function App() {
  const [question1, setQuestion1] = useState("0")

  const onOptionChange1 = e => {
    setQuestion1(e.target.value)
  }
  const [question2, setQuestion2] = useState("0")

  const onOptionChange2 = e => {
    setQuestion2(e.target.value)
  }
  const total = parseFloat(question1) + parseFloat(question2)
  let typeOfBat;
  if (total === 2 || total === 4 || total === 6) {
    typeOfBat = 'Fruit Bat'
  }
  if (total === 3 || total === 5) {
    typeOfBat = 'Vampire Bat'
  }

  return (
    <div className="App">
        <div class="body-text">
            <strong> What kind of batpuppy am I?</strong><br></br><br></br>
            Where would you rather go?<br></br>
            <input
                type="radio"
                name="question1"
                value="1"
                id="Forest"
                checked={question1 === "1"}
                onChange={onOptionChange1}
            />
            <label htmlFor="Forest">Forest</label>

            <input
                type="radio"
                name="question1"
                value="2"
                id="Cave"
                checked={question1 === "2"}
                onChange={onOptionChange1}
            />
            <label htmlFor="Cave">Cave</label>

            <input
                type="radio"
                name="question1"
                value="3"
                id="Open space"
                checked={question1 === "3"}
                onChange={onOptionChange1}
            />
            <label htmlFor="Open space">Open Space</label><br></br><br></br>
            Are you introverted or extroverted<br></br>
            <input
                type="radio"
                name="question2"
                value="1"
                id="Extrovert"
                checked={question2 === "1"}
                onChange={onOptionChange2}
            />
            <label htmlFor="Extrovert">Extrovert</label>

            <input
                type="radio"
                name="question2"
                value="2"
                id="Introvert"
                checked={question2 === "2"}
                onChange={onOptionChange2}
            />
            <label htmlFor="Introvert">Introvert</label>

            <input
                type="radio"
                name="question2"
                value="3"
                id="Depends"
                checked={question2 === "3"}
                onChange={onOptionChange2}
            />
            <label htmlFor="Depends">Depends on the day</label>
            <p>
                I am a... <strong>{typeOfBat}</strong>
            </p>
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