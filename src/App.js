import React from 'react';
import './Variables.scss';

//components
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="container">
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
