import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Divider, Paper, Typography, Grid } from '@material-ui/core';
import { FormatQuote } from '@material-ui/icons'
import imgworld from '../images/233.jpg'
import "wired-progress";
import { typography } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        margin: theme.spacing(8),
        backgroundColor: theme.palette.secondary.main,
        width: '80px',
        height: '80px',
        // '&:hover': {
        //     width: '100px',
        //     height: '100px',
        //     boxShadow: '1px 1px 4px 0px rgba(0, 0, 0, 0.75) inset',
        // },
    },
    minipaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: '10rem',
    },
    paper: {
        backgroundColor: '#F5F5F5', // #8B0000
        opacity: 0.7,
        height: '80vh',
        backgroundBlendMode: 'darken',
        backgroundImage: `url(${imgworld})`,
        backgroundPosition: 'center' /* Center the image */,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: theme.spacing(12),
        color: '#F5F5F5',
    },
    container: {
        flexGrow: 1,
        marginTop: '1rem',
    },
    arrow: {
        margin: theme.spacing(6),
        color: theme.palette.secondary.main,
        width: '100px',
        height: '100px',
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

export default function FullWidthGrid() {
    let [counter, setCounter] = useState(0);
    const classes = useStyles();
    const theme = useTheme();

    useEffect(() => {
        const maxCounter = 70;
        if (counter != maxCounter) {
            setCounter(counter + 1);
        }
        else {
            setCounter(counter);
        }
    }, []);

    return (
        <>
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <Paper className={classes.paper}>
                        <Grid container item xs={12}>
                            <Grid item xs={6} >
                                <div className={classes.container}>
                                    <Typography component="h1" style={{ fontWeight: 'bold' }} variant="h4">Speed</Typography>
                                    <wired-progress percentage={true} value="80" min="5" max="100"></wired-progress>
                                </div>
                                <div className={classes.container}>
                                    <Typography component="h1" style={{ fontWeight: 'bold' }} variant="h4">Experience</Typography>
                                    <wired-progress percentage={true} value="60" min="5" max="100"></wired-progress>
                                </div>
                                <div className={classes.container}>
                                    <Typography component="h1" style={{ fontWeight: 'bold' }} variant="h4">Professional</Typography>
                                    <wired-progress percentage={true} value="100" min="5" max="100"></wired-progress>
                                </div>
                                <div className={classes.container}>
                                    <Typography component="h1" style={{ fontWeight: 'bold' }} variant="h4">Accuracy</Typography>
                                    <wired-progress percentage={true} value="65" min="5" max="100"></wired-progress>
                                </div>
                                <div className={classes.container}>
                                    <Typography component="h1" style={{ fontWeight: 'bold' }} variant="h4">Skills</Typography>
                                    <wired-progress percentage={true} value="60" min="5" max="100"></wired-progress>
                                </div>
                            </Grid>
                            <Grid item xs={6} style={{ marginTop: '3rem', textAlign: 'center' }}>
                                <Typography component="h1" style={{ fontWeight: 'bold' }} variant="h4"><FormatQuote />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<FormatQuote /></Typography>
                                <Grid item xs={12} style={{ display: 'flex', marginTop: '3rem', textAlign: 'center' }}>
                                    <Grid item xs={6} >
                                        <Typography display="inline" align="center" variant="h4">{counter}</Typography>
                                        <Divider />
                                        <Typography display="inline" align="center" variant="h4">Cargo Delivered.</Typography>
                                    </Grid>
                                    <Divider orientation='vertical' />
                                    <Grid item xs={6} >
                                        {/* <Divider orientation='vertical' /> */}
                                        <Typography display="inline" align="center" variant="h4">{counter}</Typography>
                                        <Divider />
                                        <Typography display="inline" align="center" variant="h4">Cargos per month</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </MuiThemeProvider>
            </div>
        </ >
    );
}