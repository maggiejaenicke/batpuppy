import React, { useEffect, useState } from "react";

export default function BatpuppyHome(props){
    const [emailAddress] = useState('batpuppybook@gmail.com')
    // const [counter, setCounter] = useState(0)
    // const [color, setColor] = useState('green')
    // const handleClick = () => {
    //     setPuppyName('Brad')
    //     setCounter(counter + 1)
    // }
    // const random_hex_color_code = () => {
    //     let n = (Math.random() * 0xfffff * 1000000).toString(16);
    //     return '#' + n.slice(0, 6);
    //   };
    //   console.log(random_hex_color_code())

    // useEffect(()=>{
    //     setColor(random_hex_color_code)
    // }, [counter])

    useEffect(()=>{

    }, [])
    return (
        <div class="footer">
        {/* <h1>This is Batpuppy's Home!</h1>
        <p>Puppy's name is {puppyName}</p>
        <p>I've clicked {counter} times</p>
        <button onClick={handleClick} style={{color: color}}>Change BP's name to Brad</button><br></br><br></br> */}
        {/* <p>Want to stay in the loop?</p> */}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScNpMEr-deodbKQIALfk4WUQxp7O0Sfpr4PaYLaoFe7ICJlQw/viewform" target="_blank" class="button">Join the Batpuppy mailing list!</a>
        {/* <p> We'll send you news about our release date, pre-orders, events and more. We couldn't do it without you! </p> */}
        <p>Questions? Reach out to us: <a href="mailto:batpuppybook@gmail.com?bcc=maggiejaenicke@gmail.com,kwoodhouse1@gmail.com" target="_blank" rel="noopener noreferrer">{emailAddress}</a></p>
        </div>
    )
}