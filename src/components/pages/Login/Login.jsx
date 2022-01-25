import React, { useState, useRef } from 'react';
import './Login.scss';
import logo from '../../../assets/images/bulb_as_dummy_logo.png';

const Login = () => {

    return ( 
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img src={logo} className="logo" alt="bulb" />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign In</button>
                    <span>New to Netflix? <b>sign up</b> now. </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>
                    </small>
                </form>
            </div>
        </div>
     );
}
 
export default Login;