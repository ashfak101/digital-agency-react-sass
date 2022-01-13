import { useState,useEffect } from 'react';
import Banner from './components/Banner/Banner';
import Choice from './components/Choice/Choice';
import Contact from './components/Contact/Contact';
import Dropdown from './components/Dropdown/Dropdown';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';

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
      <Choice  
      />
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
