import React, {useContext} from 'react'
import {StyledButton} from '../.'
import { ThreeWayContext } from '../../context'

const PlayAgain = () => {
  const {nextStep} = useContext(ThreeWayContext);
  return (
    <StyledButton onClick={()=>nextStep()}>Play Again</StyledButton>
  )
}

export default PlayAgain