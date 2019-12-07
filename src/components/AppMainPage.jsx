import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Navbar from './Navbars';
import HomepageImage from './HomepageImage';
import Footer from './Footer';

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

const useStyles = makeStyles(theme => ({
    content: {
        flex: 1,
        // height: '100%',
        overflow: 'auto',
        // paddingTop: theme.spacing(3),
        // paddingBottom: theme.spacing(3),
    }
}));

function AppMainPage(props) {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={theme}>
            <Navbar theme={theme} />
            <div className={classes.content}>
                {props.children}
            </div>
            <footer>
                <Footer theme={theme} />
            </footer>
        </MuiThemeProvider>
    );
}
export default AppMainPage;