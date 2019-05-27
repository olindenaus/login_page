import React from 'react';

import logo from '../../assets/images/logo.png';
import classes from './Logo.css';


const myLogo = (props) => {

    return (
        <div className={classes.Logo} style={{height: props.height}}>
        <img src={logo} alt="Logo"/>
        </div>
    )
};
export default myLogo;