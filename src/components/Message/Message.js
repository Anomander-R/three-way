import React, {useContext} from 'react'
import { ThreeWayContext } from '../../context'

const Message = () => {
    const {outcome, info, smallInfo} = useContext(ThreeWayContext);
  return (
    <div>
        <p>{info}</p>
        <h6>{smallInfo}</h6>
    </div>
  )
}

export default Message