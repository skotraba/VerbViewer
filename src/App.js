import React, {useState} from 'react';
import './Variables.scss';

//components
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Toggle from './components/Toggle/Toggle';

function App() {

  const [show, setShow] = useState(false);

  const onShow = () => {
   setShow(!show);
  }

  

  return (
    <div className="container">
      {show ? 
      <React.Fragment>
        <Sidebar/>
        <div onClick={onShow}>
          <Toggle />
        </div>
      </React.Fragment> : <div onClick={onShow}><Toggle /></div>}
      <Main/>
    </div>
  );
}

export default App;
