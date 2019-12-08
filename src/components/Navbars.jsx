import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, Tab, Tabs, CircularProgress } from '@material-ui/core';
import Services from './Services';
import History from './History';
import FindUS from './FindUs';
import Homepage from './Homepage';
import { Link } from 'react-router-dom';

const NavBar = props => {
    const [value, setValue] = useState(0);
    const [loading, setloading] = useState(false);

    // useEffect(() => {
    //     switchTabs();
    // }, [value])

    const handleChange = (event, value) => {
        setValue(value);
    };

    // const switchTabs = () => {
    //     switch (value) {
    //         case 1:
    //             return <Services props={props} value={value} />;
    //             break;
    //         case 2:
    //             return <History props={props} value={value} />;
    //             break;
    //         case 3:
    //             return <FindUS props={props} value={value} />;
    //             break;
    //         default:
    //             return <Homepage props={props} value={value} />;
    //             break;
    //     }
    //     // if (value === 0) {
    //     //     return <Homepage />;
    //     // }
    //     // if (value === 1) {
    //     //     return <Services />;
    //     // }
    //     // if (value === 2) {
    //     //     return <History />;
    //     // }
    //     // if (value === 3) {
    //     //     return <FindUS />;
    //     // }
    // };

    return (
        <>
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Tabs value={value} onChange={handleChange}>
                            <Link to={`/`}>Home</Link>
                            <Link to={`/services`}>Services</Link>
                            <Link to={`/about`}>History</Link>
                            <Link to={`/contact`}>FindUs</Link>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </div>

        </>
    )
}
export default NavBar;