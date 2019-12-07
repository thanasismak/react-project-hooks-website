import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import HomepageImage from './HomepageImage';
import DividerHomepage from './DividerHomepage';

const theme = createMuiTheme({
    palette: {
        primary: {
            // main: '#088A08', //#52BD00
            main: '#4b6cb7',
        },
        secondary: {
            // main: orange[400],
            main: '#FFC837',
        },
    },
});

function Homepage(props) {
    const theme = useTheme();
    return (
        <>
        <HomepageImage theme={theme} />
        <DividerHomepage theme={theme} />
        </>
    );
}

export default Homepage;