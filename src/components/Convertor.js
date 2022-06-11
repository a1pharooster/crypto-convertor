import React, { useState } from "react";
import Convertor_a from "./Convertor_a";
import Convertor_b from "./Convertor_b";
import "./convertor.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'; 


const Convertor = props => {
  const [flag, setflag] = useState(false);
  const switchHandler = () => {
    if (flag == true) {
      setflag(false);
      return;
    }
    setflag(true);
  };

  return (
    <div className="convert__div">
        <div className="btn__switch">
        <Tippy content="Switch">
          <button onClick={switchHandler} className="btn_switch">
            <FontAwesomeIcon icon={faArrowsRotate} size="2x" spin />
          </button>
          </Tippy>
        </div>

      {!flag && <Convertor_a coindata={props.items} />}
      {flag && <Convertor_b coindata={props.items} />}
    </div>
  );
};

export default Convertor;
