import { useState } from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import Navbar from './components/Navbar/Navbar';

import './styles/App.scss'

function App() {
    const [isOpen, setIsOpen]= useState(false);

    const toggle=()=>{
      setIsOpen(!isOpen);
    }

  return (
    <div className="">
      <Navbar toggle={toggle}/>
      <Dropdown 
        isOpen={isOpen}
      />
    </div>
  );
}

export default App;
