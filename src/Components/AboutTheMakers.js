import React, { useState, useEffect } from 'react';
import '../App.css';
import batpuppy_author from '../Batpuppy_Author.png';
import batpuppy_illustrator from '../Batpuppy_Illustrator.png';

function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 650); // Adjust the threshold as needed
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className="home-inline-page" style={{marginBottom: '20px'}}>
                <div className="homeText" style={{marginTop: '15px', marginRight:"20px"}}>
                    <h3 style={{color: '#795F80'}}>About the Author</h3>
                    <p >Katie Woodhouse was born and raised in Portland, Oregon. She studied creative writing at Macalester College and graduated in 2021. Since then she's been a woodworker, a preschool teacher, a barista, and a writer whenever she gets the chance. She currently lives in South Minneapolis with two black cats and two human people. If she were a batdog, she'd live in the trees by Cedar Lake!
                    </p>
                </div>
                <img 
                    src={batpuppy_author}
                    alt="Katie Woodhouse"
                    width="250"
                    height="250"
                    className='author'
                    style={{marginTop: '15px'}}
                />
            </div>
            {isMobile ? (
            <div className="home-inline-page">

            <div className="homeText" style={{marginTop: '10px'}}>
                <hr></hr>
                <h3 style={{color: '#795F80'}}>About the Illustrator</h3>
                Maggie Jaenicke is from State College, Pennsylvania, but has lived in the Twin Cities since beginning college in 2017. She graduated from Macalester College with degrees in Geography and Environmental Studies and now works as a web developer (as you can probably tell from this cutting-edge website). She spends most of her free time painting and printmaking. Quite frankly, she would rather be a batcat, but don't tell anyone!
            </div>
            <img 
                src={batpuppy_illustrator}
                alt="Maggie Jaenicke"
                width="250"
                height="250"
                className='illustrator'
                style={{marginTop: '30px', marginRight: '10px'}}
            />
        </div>
        ) : (
            <div className="home-inline-page">
            <img 
                src={batpuppy_illustrator}
                alt="Maggie Jaenicke"
                width="250"
                height="250"
                className='illustrator'
                style={{marginTop: '30px', marginRight: '10px', marginBottom: '20px'}}
            />
            <div className="homeText" style={{marginTop: '40px', marginLeft:"10px"}}>
                <h3 style={{color: '#795F80'}}s>About the Illustrator</h3>
                <p >Maggie Jaenicke is from State College, Pennsylvania, but has lived in the Twin Cities since beginning college in 2017. She graduated from Macalester College with degrees in Geography and Environmental Studies and now works as a web developer (as you can probably tell from this cutting-edge website). She spends most of her free time painting and printmaking. Quite frankly, she would rather be a batcat, but don't tell anyone!
                </p>
            </div>
        </div>
        )}

        </div>
    );
}

export default App;