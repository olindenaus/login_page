import React from 'react';

const input = (props) => {

    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder}></input>
        </div>
    )
};
export default input;