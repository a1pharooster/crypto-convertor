import React, { useState } from 'react'
import Convertor_a from './Convertor_a'
import Convertor_b from './Convertor_b'
import './convertor.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Convertor = (props) => {


const [flag,setflag] = useState(false)
const switchHandler = () => {
  if(flag == true)
  {
    setflag(false)
    return
  }
  setflag(true)
}

  return (
    <div className="convert__div">
    <div className="btn__switch"><button onClick={switchHandler}>Switch</button></div>
    {!flag && <Convertor_a  coindata = {props.items}/>}
    {flag && <Convertor_b  coindata = {props.items}/>}
    </div>
  )
}

export default Convertor
