import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><Link  to="//www.linkedin.com/in/maria-eug%C3%AAnia-ghizellini-14137a124/" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="//www.instagram.com/mahghizellini/" target='_blank' className='nav-link'><FaInstagram /></Link></li>
        <li onClick={handleNav} ><Link  to="//mailto:maria.ghizellini@gmail.com" target='_blank' className='nav-link'><BiEnvelope /></Link></li>
  </ul>
  )
};

export default NavLinks;
