import React, { Component } from 'react';

import classes from './Layout.css';
import Aux from '../Auxiliary/Auxiliary';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SideDrawer from '../../components/NavigationBar/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerTogglerHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render() {
        return (
            <Aux>
                <NavigationBar drawerToggleClicked={this.sideDrawerTogglerHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed = {this.sideDrawerClosedHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;