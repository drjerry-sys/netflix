import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../../assets/images/bulb_as_dummy_logo.png';
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset);
        return () => (window.onscroll = null);
    };

    return ( 
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src={logo} alt="netflix_logo" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span> 
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icons"/>  
                    <span>KIDS</span>
                    <Notifications className="icons"/>
                    <img src={logo} alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icons"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;