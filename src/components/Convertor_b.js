import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faArrowLeft,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './conb.css'
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';




const Convertor_b = props => {
  const [ans, setans] = useState("");
  const [input, setinput] = useState("");
  const textHandler = event => {
    setinput(event.target.value);
  };

  const clickhandler = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a9d26fd932msh151a1a60cd8cfeap14804ajsn7c5a5992f89a",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
      }
    };

    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=3h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
      options
    )
      .then(response => response.json())
      .then(response => {
        let a = response.data.coins[props.coindata].price.slice(0, 8);
        let b = (input / a);
        setans(b);
      })
      .catch(err => console.error(err));
  };

  const cancelhandler = event => {
    setinput("");
    setans("");
  };

  return (
    <div className="board">
      <div className="dashboard">
      <div className="output">{ans}</div>
        <div>
          <button onClick={clickhandler} className="btn_convert_b"><FontAwesomeIcon icon={faArrowLeft} size="2x"/></button>
        </div>
        <div className="input_field">
          <input
            type="text"
            className="input"
            value={input}
            onChange={textHandler}
            placeholder="Enter Amount"
          ></input>
        </div>
      </div>
      <div className="btn__cancel">
        <Tippy content="Clear">
        <button onClick={cancelhandler} className="btn_clear">
          <FontAwesomeIcon icon={faTrashCan} size="2x"/>
        </button>
        </Tippy>
      </div>
    </div>
  );
};
export default Convertor_b;
