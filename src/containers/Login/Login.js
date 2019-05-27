import React, { Component } from 'react';

import classes from './Login.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Form from '../Form/Form';
import Logo from '../../components/Logo/Logo';

class Login extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.Login}>
                <Logo height={'100px'}/>
                    <Form />
                </div>
            </Aux>
        );
    }
}

export default Login;