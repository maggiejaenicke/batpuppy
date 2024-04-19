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
          <img src={bear} alt="Thea's best bear" width="80" height="80" style={{marginRight: '10px', marginBottom: '-5px'}} />
          <img src={shoe} alt="Momma's left shoe" width="80" height="80" className="shoe" style={{marginBottom: '-5px'}}/><br></br>
          <img src={pear} alt="Pear" width="77" height="77" style={{marginLeft: '40px'}}/>
          <img src={cockroach} alt="Cockroach" width="128" height="93" />
        </div>
        ) : (
        <div className="mainContent">
          <img src={bear} alt="Thea's best bear" width="110" height="110" style={{marginLeft: '7px'}}/>
          <img src={shoe} alt="Momma's left shoe" width="110" height="110" className="shoe" style={{marginLeft: '7px'}}/>
          <img src={pear} alt="Pear" width="107" height="107" style={{marginLeft: '7px'}}/>
          <img src={cockroach} alt="Cockroach" width="160" height="125" />
        </div>
        )}

      <Tabs>
        <div label="Home">
          <div className="home-inline-page" style={{marginBottom: '40px'}}>
            <div className="homeText">
              <h1 style={{color: '#795F80'}}><i>BATPUPPY</i></h1>
              Written by Katie Woodhouse<br></br>
              Illustrated by Maggie Jaenicke<br></br><br></br>
              <i>A little girl's new puppy has a big secret: a pair of bat wings! The two are best friends right away. But will that change when a family camping trip leads them to a flock of wild batdogs?
                <br></br><br></br></i>Batpuppy <i>is a romping tale of adventure, love, and letting go.<br></br><br></br></i>
              <hr></hr><br></br>We've been working on this book for the past three years. It's filled with love and learning and we're so excited to share it with you.
            </div>
            {/* <h3><a href="https://docs.google.com/forms/d/e/1FAIpQLScNpMEr-deodbKQIALfk4WUQxp7O0Sfpr4PaYLaoFe7ICJlQw/viewform" target="_blank" rel="noopener noreferrer">Sign up</a> for the Batpuppy mailing list to stay up to date!</h3> */}
            <img
              src={batpuppy_cover}
              alt="Batpuppy flying with girl"
              width="450"
              height="440"
              className="homeImage"
              style={{marginBottom: '100px'}}
            />
          </div>
        </div>
        <div label="About the Makers">
        <AboutTheMakers></AboutTheMakers>
        </div>
        <div label="Order the Book">
          <div className="body-text" style={{paddingBottom: '0px', marginTop: '50px'}}>
            We are currently conducting a preorder to estimate the number of copies to print, which will be open from April 16 through April 30. That will be your main opportunity to support this endeavor and get your copy of <em>Batpuppy</em>! <br></br><br></br> 

            Update on 4/18: Maggie's Etsy account has been deactivated for a mysterious reason. Please join the <a href="https://docs.google.com/forms/d/e/1FAIpQLScNpMEr-deodbKQIALfk4WUQxp7O0Sfpr4PaYLaoFe7ICJlQw/viewform" target="_blank" rel="noopener noreferrer">mailing list</a>  for updates.<br></br><br></br>
            Most orders that have already been placed have gone through and will continue to ship as expected. Otherwise, you will have received a message from Etsy. If you are unsure of the status of your order, feel free to <a href="mailto:batpuppybook@gmail.com?bcc=maggiejaenicke@gmail.com,kwoodhouse1@gmail.com" target="_blank" rel="noopener noreferrer">send us an email</a> and we can check for you!<br></br><br></br>

            <b>Update on 4/19: We have recieved word from Etsy that Maggie's account was suspended in error, but the listings have yet to be reactivated. While we wait for Etsy listings to be reactivated, we will be accepting orders via Google Form and Venmo. We will continue to leave this option open once the Etsy listings are reopened.</b><br></br><br></br>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScbb8lyyTYDUxqYjwad5zjG1IllVm6BL3NTdbZ9APa1rOl6OA/viewform" target="_blank" className="button" style={{ backgroundColor: '#EFE7F7', fontSize: '16px' }}>Shop Batpuppy (via Venmo)</a><br></br><br></br>
            If you don't use Venmo, we are hopeful that our Etsy listings will be back up in the next few days, and we will inform the mailing list when this option is available again. <br></br><br></br>
            <b>Thank you so much for your support and patience through this frustrating experience!</b>
          </div>
          {/* <a href="https://www.etsy.com/shop/MississippiMossShop" target="_blank" className="button" style={{ backgroundColor: '#EFE7F7', fontSize: '16px' }}>Shop Batpuppy</a> */}

          <img
            src={batpuppy_in_bed}
            alt="Batpuppy in Bed"
            width="550em"
            class="inBed"
          />
        </div>
        {isMobile ? (
          <div label="Take the Batpuppy Quiz!">
            <div className="inline-page">
              <p>Sorry! You must be on a desktop computer to take the quiz.</p><br></br><br></br>
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