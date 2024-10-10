import React,{useState} from 'react'
import AdviceRandom from '../data/AdviceRandom'

export default function RandomAdvice() {
    const [advice, setAdvice ]= useState(' ')
  return (
    <div>
        <AdviceRandom  onSelectAdvice={setAdvice}/>
        <p>{advice}</p>
        
    </div>
  )
}
