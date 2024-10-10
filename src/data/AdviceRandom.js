import React from 'react'
import RandomAdvice from '../comps/RandomAdvice';

const adviceArray = [
    "Believe you can and you're halfway there.",
    "It always seems impossible until it's done.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "You miss 100% of the shots you don't take.",
    "You don't have to be great to start, but you have to start to be great",
    "The way to get started is to quit talking and begin doing.",
    "You can't go back and change the beginning, but you can start where you are and",
    "The best way to predict your future is to create it.",
    "No pain , No Gain"
];

export default function AdviceRandom({onSelectAdvice}) {

    const getRandomAdvice = () =>{
        const randomIndex = Math.floor(Math.random()* adviceArray.length);
        return adviceArray[randomIndex];

    }

    const handleClick = () =>{
        const advice = getRandomAdvice();
        onSelectAdvice(advice)
    }

  return (
    <div>
        <button onClick={handleClick}>Get Advice</button>
    </div>
  )
}
