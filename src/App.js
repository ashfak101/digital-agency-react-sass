import { useState,useEffect } from 'react';
import Banner from './components/Banner/Banner';
import Dropdown from './components/Dropdown/Dropdown';
import Navbar from './components/Navbar/Navbar';

import './styles/App.scss'

function App() {
    const [isOpen, setIsOpen]= useState(false);

    const toggle=()=>{
      setIsOpen(!isOpen);
    }
    useEffect(()=>{
      const hideMenu=()=>{
          if(window.innerWidth && isOpen){
              setIsOpen(false)
          }
      }
      window.addEventListener('resize',hideMenu)
      return ()=>{
          window.removeEventListener('resize',hideMenu)
      }
  },[isOpen])
  return (
    <div className="">
      <Navbar toggle={toggle}/>
      <Dropdown 
        isOpen={isOpen}
      />
      <Banner/>
    </div>
  );
}

export default App;
