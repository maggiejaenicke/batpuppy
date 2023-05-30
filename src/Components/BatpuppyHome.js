import React, { useEffect, useState } from "react";
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
      
      console.log(random_hex_color_code())
    useEffect(()=>{
        setColor(random_hex_color_code)
    }, [counter])

    useEffect(()=>{

    }, [])
    return (
        <div>
        <p>This is Batpuppy's Home!</p>
        <p>Puppy's name is {puppyName}</p>
        <p>I've clicked {counter} times</p>
        <button onClick={handleClick} style={{color: color}}>Change BP's name to Brad</button>
        </div>
        
    )
}