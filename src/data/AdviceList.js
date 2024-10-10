import React,{useState} from 'react'
import AdviceData from './AdviceData'


export default function AdviceList({onSelectAdvice}) {

  const [category , setCategory] = useState('');
  const getRandomAdvice = (category) =>{
    const advices = AdviceData[category];
    const randomIndex = Math.floor(Math.random()* advices.length);
    return advices[randomIndex]; 
  }

  const handleGeneratedAdvice = () =>{
      if (category){
        const advice = getRandomAdvice(category);
        onSelectAdvice(advice);
      }
  }
    return (
    <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Select category</option>
            <option value="Health">Health</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
            <option value="Relationship">Relationship</option>

        </select>
        <button onClick={handleGeneratedAdvice} disabled={!category}>Get Advice</button>
    </div>
  )
}
