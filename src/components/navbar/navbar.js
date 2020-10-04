import React from 'react';
import {StickyNavbar, FlexStart, FlexEnd, NavTitleLink, Link, Contact, Underline} from './Navbar.elements'

const Navbar = () => {
  return (
    <StickyNavbar>
        <FlexStart>
            <Underline underlineColor={'#868FFF'}><NavTitleLink href="#whois" underlineColor={'#868FFF'}>ASD-DEVELOPER</NavTitleLink></Underline >
        </FlexStart>
        <FlexEnd>
            <Underline underlineColor={'#868FFF'}><Link href="#about" >About</Link></Underline>
            <Underline underlineColor={'#868FFF'}><Link href="#projects" >Projects</Link></Underline>
            <Underline underlineColor={'#868FFF'}><Link href="#published-work" >Published Work</Link></Underline>
            <Underline underlineColor={'white'}><Contact href="#contacts" >Contact Me</Contact></Underline>
        </FlexEnd>
    </StickyNavbar>
  );
}

export default Navbar;
