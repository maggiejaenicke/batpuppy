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
        <div label="Home" >
        <div class="inline-page">
        <div class="homeText">
        <i>A little girl's new puppy has a big secret: a pair of bat wings! The two are best friends right away. But will that change when a family camping trip leads them to a flock of wild Batdogs?
        <br></br><br></br>Batpuppy is a romping tale of adventure, love, and letting go.<br></br><br></br></i>
        <hr></hr><br></br>We've been working on this book for the past three years. It's filled with love and learning and we're so excited to share it with you. 
        </div>
        {/* <h3><a href="https://docs.google.com/forms/d/e/1FAIpQLScNpMEr-deodbKQIALfk4WUQxp7O0Sfpr4PaYLaoFe7ICJlQw/viewform" target="_blank" rel="noopener noreferrer">Sign up</a> for the Batpuppy mailing list to stay up to date!</h3> */}
          <img 
          src={batpuppy_cover} 
          alt="Batpuppy flying with girl"
          width="330"
          height="300"
          class="homeImage"
          />
          </div>
          </div>
        <div label="About the Author">
        <div class="body-text">
        Katie Woodhouse was born and raised in Portland, Oregon. She studied creative writing at Macalester College and graduated in 2021. Since then she's been a woodworker, a preschool teacher, a barista, and a writer whenever she gets the chance. She currently lives in South Minneapolis with two black cats and two human people. If she were a batdog, she'd live in the trees by Cedar Lake!
        </div>
            <img 
            src={batpuppy_author} 
            alt="Katie Woodhouse"
            width="250"
            height="250"
            /><br></br>
        </div>
        <div label="About the Illustrator">
          <div class="body-text">
            Maggie Jaenicke is from State College, Pennsylvania, but has lived in the Twin Cities since beginning college in 2017. She graduated from Macalester College with degrees in Geography and Environmental Studies and now works as a web developer. She spends most of her free time painting and printmaking. Quite frankly, she would rather be a batcat, but don't tell anyone!
          </div>
                <img 
                src={batpuppy_illustrator} 
                alt="Maggie Jaenicke"
                width="250"
                height="250"
                />
        </div>
        <div label="Order the Book">
          <div class="body-text">
            We will be conducting a preorder to estimate the number of copies to print! Preorder will begin on [Date] and close on [Date]. Expect to receive your copy by [Date]. Click the link below to visit our Etsy site where Batpuppy book lives.
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
          <div class="inline-page">

          <Quiz>
          </Quiz>
          <div class="quizImage">
                <img 
                src={QuizImg} 
                alt="I love Batpuppy"
                width="300"
                height="400"
                />
            </div>
        </div>
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
