import React from 'react';

import './Toggle.scss'

//Icon
import { VscThreeBars } from 'react-icons/vsc'



function Toggle(props) {



  return (
    <div className="Toggle">
        <i className="Toggle__btn"><VscThreeBars className="test" size={20}/></i>
    </div>
  );
}

export default Toggle;