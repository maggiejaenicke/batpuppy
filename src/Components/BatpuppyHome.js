import React, { useEffect, useState } from "react";
import batpuppy_cover from '../batpuppy_cover.png';
import bear from '../bear.png';
import shoe from '../shoe.png';
import pear from '../pear.png';
import cockroach from '../cockroach.png';

export default function BatpuppyHome(props){
    const [puppyName, setPuppyName] = useState('batpuppy')
    const [counter, setCounter] = useState(0)
    const [color, setColor] = useState('green')
    const handleClick = () => {
        setPuppyName('Brad')
        setCounter(counter + 1)
    }
    const random_hex_color_code = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      };
      //console.log(random_hex_color_code())

    useEffect(()=>{
        setColor(random_hex_color_code)
    }, [counter])

    useEffect(()=>{

    }, [])
    return (
        <div>
        <br></br>
            <div >
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
        <h1>This is Batpuppy's Home!</h1>
        <h3><a href="https://docs.google.com/forms/d/e/1FAIpQLScNpMEr-deodbKQIALfk4WUQxp7O0Sfpr4PaYLaoFe7ICJlQw/viewform" target="_blank" rel="noopener noreferrer">Sign up</a> for the Batpuppy mailing list to stay up to date!</h3>
        <p>Puppy's name is {puppyName}</p>
        <p>I've clicked {counter} times</p>
        <button onClick={handleClick} style={{color: color}}>Change BP's name to Brad</button><br></br><br></br>
        {/* <button onClick={handleClick} style={{color: 'black'}}></button><br></br> */}
        <img 
        src={batpuppy_cover} 
        alt="Batpuppy flying with girl"
        width="330"
        height="300"
        />
        </div>
    )
}