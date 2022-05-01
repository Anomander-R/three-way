import React, {useContext} from 'react'
import { ThreeWayContext } from '../../context'

const PlayAgain = () => {
  const {nextStep} = useContext(ThreeWayContext);
  return (
    <button onClick={()=>nextStep()}>PlayAgain</button>
  )
}

export default PlayAgain