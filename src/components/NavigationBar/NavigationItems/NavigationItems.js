import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItemms = () => {

    return (
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/a" exact>Home</NavigationItem>
                <NavigationItem link="/login">Login</NavigationItem>
                <NavigationItem link="/s">About</NavigationItem>
            </ul>
    )
}
export default navigationItemms;