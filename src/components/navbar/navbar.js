import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar sticky blueshadow">
        <div className={'flexstart'}>
            <a href="#ASD">ASD-DEVELOPER</a>
        </div>
        <div className={'flexend'}>
            <a href="#ABOUT" className={'horizontalspacing'}>About</a>
            <a href="#PROJECTS" className={'horizontalspacing'}>Projects</a>
            <a href="#PUBLISHED" className={'horizontalspacing'}>Published Work</a>
            <a href="#SERVICES" className={'horizontalspacing'}>Services</a>
            <a href="#CONTACTS" className={'contactbt'}>Contact Me</a>
        </div>
    </div>
  );
}

export default Navbar;
