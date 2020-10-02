import React from 'react';
import {StickyNavbar, FlexStart, FlexEnd, NavTitleLink, Link, Contact} from './Navbar.elements'

const Navbar = () => {
  return (
    <StickyNavbar>
        <FlexStart>
            <NavTitleLink href="#whois">ASD-DEVELOPER</NavTitleLink>
        </FlexStart>
        <FlexEnd>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#published-work">Published Work</Link>
            <Contact href="#contacts">Contact Me</Contact>
        </FlexEnd>
    </StickyNavbar>
  );
}

export default Navbar;
