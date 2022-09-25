import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Navbar from './Navbars';
import Footer from './Footer';

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