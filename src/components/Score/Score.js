import React, { useContext } from 'react'
import { ThreeWayContext } from '../../context'

const Score = () => {

    const {score}=useContext(ThreeWayContext);

  return (
    <div><p>Score: <strong> {score} </strong></p></div>
  )
}

export default Score