import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginLeft: 'auto',
    },
}));
const NavBar = props => {
    const [value, setValue] = useState(0);

    const classes = useStyles();

    const handleChange = (event, value) => {
        setValue(value);
    };

    return (
        <>
            <div className="App">
                <AppBar position="static">
                    <Toolbar style={{ display: 'flex' }}>
                        <img src={logo} style={{ width: '9%' }} alt='test' />
                        <div className={classes.menuButton}>
                            <Tabs value={value} onChange={handleChange}>
                                <Tab label="Home" component={Link} to="/" />
                                <Tab label="Services" component={Link} to="/services" />
                                <Tab label="History" component={Link} to="/about" />
                                <Tab label="FindUs" component={Link} to="/contact" />
                            </Tabs>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>

        </>
    )
}
export default NavBar;

// <Typography color="inherit">Home</Typography>