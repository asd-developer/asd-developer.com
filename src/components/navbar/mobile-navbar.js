import React,{useState} from 'react'
import {Mobile} from './Navbar.elements'

const MobileNavbar = (props) => {
    const [show, setShow] = useState(false);

    const handleChange = () =>{
        if(show){
            setShow(false);
        }else{
            setShow(true);
        }
    }

  return (
    <>
        <Mobile>
            <span  style={{transition: "all .5s ease-in-out" ,display: show ? "flex": "none"}}>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#published-work">Published Work</a>
                <a href="#contacts">Contacts</a>
            </span>
            <div>
                <img src={"mobile-menu.svg"} onClick={handleChange} alt="Burguer Menu"/>
                <h1>ASD-DEVELOPER</h1>
            </div>
        </Mobile>
    </>
  );
}

export default MobileNavbar;
