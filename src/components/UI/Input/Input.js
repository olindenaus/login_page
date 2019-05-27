import React from 'react';

import classes from './Input.css';

const input = (props) => {

    return (
        <div className={classes.Input}>
        <label>{props.children}</label>
            <input type={props.type} placeholder={props.placeholder}></input>
        </div>
    )
};
export default input;