import React from 'react';
import {StickyNavbar, FlexStart, FlexEnd, NavTitleLink, Link, Contact} from './Navbar.elements'

const Navbar = () => {
  return (
    <StickyNavbar>
        <FlexStart>
            <NavTitleLink href="#ASD">ASD-DEVELOPER</NavTitleLink>
        </FlexStart>
        <FlexEnd>
            <Link href="#ABOUT">About</Link>
            <Link href="#PROJECTS">Projects</Link>
            <Link href="#PUBLISHED">Published Work</Link>
            <Link href="#SERVICES">Services</Link>
            <Contact href="#CONTACTS">Contact Me</Contact>
        </FlexEnd>
    </StickyNavbar>
  );
}

export default Navbar;
