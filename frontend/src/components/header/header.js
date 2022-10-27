import React from 'react';
import "./header.css"
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';

import {Avatar} from '@mui/material'

const Header = () => {
  return (
    <div className='header'>
        <div className="image">
        <img className='header_image' src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" alt="" />
        </div>
        <div className="box">
            <div className="bull">
            <h4>Become a host</h4>
            </div>
            <div className="bull">
            <LanguageIcon/>
            </div>
           
            <div className="pair">
           <MenuIcon/>
            <Avatar/>
            </div>
        </div>
        </div>
       
        
  )
}

export default Header