import React from 'react';

import classes from './NavigationBar.css';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import DrawerToggler from './SideDrawer/DrawerToggler/DrawerToggler';

const navigationBar = (props) => {

    return (
        <div className={classes.NavBar}>
            <DrawerToggler clicked={props.drawerToggleClicked}/>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
};
export default navigationBar;