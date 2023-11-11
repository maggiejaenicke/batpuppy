import './App.css';
import BatpuppyHome from './Components/BatpuppyHome';
import Tabs from "./Components/Tabs";
import bear from './bear.png';
import shoe from './shoe.png';
import pear from './pear.png';
import cockroach from './cockroach.png';
import batpuppy_author from './Batpuppy_Author.png';
import batpuppy_illustrator from './Batpuppy_Illustrator.png';
import batpuppy_cover from './batpuppy_cover.png';

function App() {
  return (
    <div className="App">
            <div>
                <img
                src={bear}
                alt="Thea's best bear"
                width="100"
                height="100"
                />
                <img
                src={shoe}
                alt="Momma's left shoe"
                width="100"
                height="100"
                />
                <img
                src={pear}
                alt="Pear"
                width="100"
                height="100"
                />
                <img
                src={cockroach}
                alt="Cockroach"
                width="140"
                height="115"
                />
            </div>
      <Tabs>
        <div label="Home">
        <h3><a href="https://docs.google.com/forms/d/e/1FAIpQLScNpMEr-deodbKQIALfk4WUQxp7O0Sfpr4PaYLaoFe7ICJlQw/viewform" target="_blank" rel="noopener noreferrer">Sign up</a> for the Batpuppy mailing list to stay up to date!</h3>
        <p>We'll send you news about our release date, pre-orders, events and more. We couldn't do it without you! </p>
        <img 
        src={batpuppy_cover} 
        alt="Batpuppy flying with girl"
        width="330"
        height="300"
        />
        </div>
        <div label="About the Author">
        <p><em>Katie Woodhouse</em> was born and raised in Portland, OR. She studied creative writing at Macalester College in Saint Paul, MN, and graduated mid-pandemic in 2021. Since then she has been a woodworker, a preschool art teacher, a barista, and a writer whenever she has the chance. She currently lives in South Minneapolis with 2 black cats and 2 human people. If she were a batdog, she would live in the trees by Cedar Lake!</p>
        <img 
        src={batpuppy_author} 
        alt="Katie Woodhouse"
        width="420"
        height="300"
        />
        </div>
        <div label="About the Illustrator">
        <p><em>Maggie Jaenicke</em> is from State College, PA, but has lived in the Twins Cities since 2017 where she Macalester College. She studied Geography and Environmental Studies. Quite frankly, she would rather be a bat cat, but don't tell anyone!</p>
        <img 
        src={batpuppy_illustrator} 
        alt="Maggie Jaenicke"
        width="420"
        height="300"
        />
        </div>
        <div label="Take the Batpuppy Quiz!">
        Find out what kind of batpuppy you are!
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
