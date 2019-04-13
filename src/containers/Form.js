import React, { Component } from 'react';

import Input from '../components/Input/Input';

class Form extends Component {
    render() {
        return (
            <div>
                <form >
                    <Input type={'text'} label={'Login'} placeholder={'Login'}/>
                    <Input type={'password'} label={'Password'} placeholder={'Password'}/>
                </form>
            </div>
        );
    }
}

export default Form;