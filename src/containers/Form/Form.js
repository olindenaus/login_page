import React, { Component } from 'react';
import classes from './Form.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Form extends Component {
    render() {
        return (
            <Aux>
            <form className={classes.Form}>
                <div className={classes.Inputs}>
                    <Input type={'text'} label={'Login'} placeholder={'Type your username or email'}>Login</Input>
                    <Input type={'password'} label={'Password'} placeholder={'Type your password'}>Password</Input>
                </div> 
                <Button>Log In</Button>
            </form>
            </Aux>
        );
    }
}

export default Form;