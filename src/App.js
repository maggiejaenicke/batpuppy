import './App.css';
import BatpuppyHome from './Components/BatpuppyHome';
import Quiz from './Components/Quiz';
import Tabs from './Components/Tabs';
import bear from './bear.png';
import shoe from './shoe.png';
import pear from './pear.png';
import cockroach from './cockroach.png';
import batpuppy_author from './Batpuppy_Author.png';
import batpuppy_illustrator from './Batpuppy_Illustrator.png';
import batpuppy_cover from './batpuppy_cover.png';
import batpuppy_in_bed from './batpuppyInBed.png';
import QuizImg from './QuizBox.png';


function App() {
  return (
    <div className="App">
            <div class="mainContent">
                <img
                src={bear}
                alt="Thea's best bear"
                width="110"
                height="110"
                />
                <img
                src={shoe}
                alt="Momma's left shoe"
                width="110"
                height="110"
                />
                <img
                src={pear}
                alt="Pear"
                width="110"
                height="110"
                />
                <img
                src={cockroach}
                alt="Cockroach"
                width="160"
                height="125"
                />
            </div>
      <Tabs>
        <div label="Home">
        <div class="body-text">
        Batpuppy is a project very close to our hearts. It is a children's book filled with love that's been in the works for the last three years. 
        </div>
        {/* <h3><a href="https://docs.google.com/forms/d/e/1FAIpQLScNpMEr-deodbKQIALfk4WUQxp7O0Sfpr4PaYLaoFe7ICJlQw/viewform" target="_blank" rel="noopener noreferrer">Sign up</a> for the Batpuppy mailing list to stay up to date!</h3> */}
          <img 
          src={batpuppy_cover} 
          alt="Batpuppy flying with girl"
          width="330"
          height="300"
          />
          </div>
        <div label="About the Author">
        <div class="body-text">
        Katie Woodhouse was born and raised in Portland, OR. She studied creative writing at Macalester College in Saint Paul, MN, and graduated mid-pandemic in 2021. Since then she has been a woodworker, a preschool art teacher, a barista, and a writer whenever she has the chance. She currently lives in South Minneapolis with 2 black cats and 2 human people. If she were a batdog, she would live in the trees by Cedar Lake!
        </div>
            <img 
            src={batpuppy_author} 
            alt="Katie Woodhouse"
            width="380"
            height="270"
            />
        </div>
        <div label="About the Illustrator">
        <div class="body-text">
        Maggie Jaenicke is from State College, PA, but has lived in the Twins Cities since 2017, where she attended Macalester College, graduating in 2021. She studied Geography and Environmental Studies and now works as a geospatial web developer. She spends most of her free time painting and print-making. Quite frankly, she would rather be a bat cat, but don't tell anyone!
        </div>
            <img 
            src={batpuppy_illustrator} 
            alt="Maggie Jaenicke"
            width="380"
            height="270"
            />
        </div>
        <div label="Order the Book">
          <div class="body-text">
            We will be conducting a preorder to estimate the number of copies to print! Preorder will close on [Date]. Expect to receive your copy by [Date]. Click the link below to visit our Etsy site where Batpuppy book lives.
          </div>
          <a href="https://www.etsy.com/shop/MississippiMossShop" target="_blank" class="button" style={{backgroundColor: '#EFE7F7', fontSize: '16px'}}>Shop Batpuppy</a>
            <br></br><br></br><img 
            src={batpuppy_in_bed} 
            alt="Batpuppy in Bed"
            width="350"
            height="250"
            />
        </div>
        <div label="Take the Batpuppy Quiz!">  
            <div class="quizImage">
                <img 
                src={QuizImg} 
                alt="I love Batpuppy"
                width="300"
                height="400"
                />
            </div>
        <Quiz>
        </Quiz>
        </div>
        
      </Tabs>
      <header className="Batpuppy">
      </header>
      <BatpuppyHome
      puppy = 'batpuppy'
      
      />
    </div>
  );
}

export default App;
