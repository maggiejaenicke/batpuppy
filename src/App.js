import React, { useState, useEffect } from 'react';
import './App.css';
import BatpuppyHome from './Components/BatpuppyHome';
import Quiz from './Components/Quiz';
import AboutTheMakers from './Components/AboutTheMakers';
import Tabs from './Components/Tabs';
import bear from './bear.png';
import shoe from './shoe.png';
import pear from './pear.png';
import cockroach from './cockroach.png';
import batpuppy_cover from './batpuppy_cover.png';
import batpuppy_in_bed from './batpuppyInBed.png';
import QuizImg from './QuizBox.png';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650); 
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      {isMobile ? (
        <div className="mainContent">
          <img src={bear} alt="Thea's best bear" width="110" height="110" />
          <img src={shoe} alt="Momma's left shoe" width="110" height="110" className="shoe" /><br></br>
          <img src={pear} alt="Pear" width="110" height="110" style={{marginLeft: '40px'}}/>
          <img src={cockroach} alt="Cockroach" width="160" height="125" />
        </div>
        ) : (
        <div className="mainContent">
          <img src={bear} alt="Thea's best bear" width="110" height="110" />
          <img src={shoe} alt="Momma's left shoe" width="110" height="110" className="shoe" />
          <img src={pear} alt="Pear" width="110" height="110" />
          <img src={cockroach} alt="Cockroach" width="160" height="125" />
        </div>
        )}

      <Tabs>
        <div label="Home">
          <div className="home-inline-page" style={{marginBottom: '20px'}}>
            <div className="homeText">
              <i>A little girl's new puppy has a big secret: a pair of bat wings! The two are best friends right away. But will that change when a family camping trip leads them to a flock of wild batdogs?
                <br></br><br></br></i>Batpuppy <i>is a romping tale of adventure, love, and letting go.<br></br><br></br></i>
              <hr></hr><br></br>We've been working on this book for the past three years. It's filled with love and learning and we're so excited to share it with you.
            </div>
            {/* <h3><a href="https://docs.google.com/forms/d/e/1FAIpQLScNpMEr-deodbKQIALfk4WUQxp7O0Sfpr4PaYLaoFe7ICJlQw/viewform" target="_blank" rel="noopener noreferrer">Sign up</a> for the Batpuppy mailing list to stay up to date!</h3> */}
            <img
              src={batpuppy_cover}
              alt="Batpuppy flying with girl"
              width="430"
              height="400"
              className="homeImage"
              style={{marginBottom: '100px'}}
            />
          </div>
        </div>
        <div label="About the Makers">
        <AboutTheMakers></AboutTheMakers>
        </div>
        <div label="Order the Book">
          <div className="body-text">
            We will be conducting a preorder to estimate the number of copies to print! Preorder will begin on [Date] and close on [Date]. Expect to receive your copy by [Date]. Click the link below to visit our Etsy site where Batpuppy book lives.
          </div>
          <a href="https://www.etsy.com/shop/MississippiMossShop" target="_blank" className="button" style={{ backgroundColor: '#EFE7F7', fontSize: '16px' }}>Shop Batpuppy</a>
          <br></br><br></br><img
            src={batpuppy_in_bed}
            alt="Batpuppy in Bed"
            width="450"
            height="350"
          />
        </div>
        {isMobile ? (
          <div label="Take the Batpuppy Quiz!">
            <div className="inline-page">
              <p>Sorry! You must be on a desktop computer to take the quiz.</p>
            </div>
          </div>
        ) : (
          <div label="Take the Batpuppy Quiz!">
            <div className="inline-page">
              <Quiz />
              <div className="quizImage">
                <img
                  src={QuizImg}
                  alt="I love Batpuppy"
                  width="400"
                  height="500"
                />
              </div>
            </div>
          </div>
        )}
      </Tabs>
      <header className="Batpuppy">
      </header>
      <BatpuppyHome
        puppy='batpuppy'
      />
    </div>
  );
}

export default App;