import React ,{useState} from 'react'
import AdviceList from '../data/AdviceList'

export default function ParticularAdvice() {
  const [advice, setAdvice] = useState('')
  return (
    <div>
        <div>
            <AdviceList onSelectAdvice={setAdvice}/>
            <p>{advice}</p>
        </div>
    </div>
  )
}

