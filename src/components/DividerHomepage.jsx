import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Paper, Typography, Grid, Icon, CardMedia, Avatar, CssBaseline, Box, Card, CardHeader, CardContent } from '@material-ui/core';
import { MusicVideo, OndemandVideo, PausePresentation, SettingsBrightness, ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';

import OnHover from './onHover';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    avatar: {
        margin: theme.spacing(8),
        backgroundColor: theme.palette.secondary.main,
        width: '80px',
        height: '80px',
        '&:hover': {
            width: '100px',
            height: '100px',
            boxShadow: '1px 1px 4px 0px rgba(0, 0, 0, 0.75) inset',
        },
    },
    paper: {
        backgroundColor: '#4b6cb7',
        padding: theme.spacing(6),
        color: theme.palette.text.secondary,
    },
    container: {
        backgroundColor: '#4b6cb7'
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
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography component="h1" style={{ fontWeight: 'bold', textAlign: 'center' }} variant="h2">Services</Typography>
                            <Grid container item xs={12} justify="center" alignItems="center">
                                <ArrowForwardIos className={classes.arrow} />
                                <div class="container-fluid">
                                    <CssBaseline />
                                    <Avatar variant='circle' className={classes.avatar}>
                                        <PausePresentation />
                                    </Avatar>
                                    <Box color="white" bgcolor={theme.palette.primary} p={1}>
                                        <Typography variant="body2" color="textSecondary" component="p">Lorem Ipsum is simply dummy text</Typography>
                                    </Box>
                                </div>
                                <div class="container">
                                    <CssBaseline />
                                    <Avatar variant='circle' className={classes.avatar}>
                                        <OndemandVideo />
                                    </Avatar>
                                    <Box color="white" bgcolor={theme.palette.primary} p={1}>
                                        <Typography variant="body2" color="textSecondary" component="p">Lorem Ipsum is simply dummy text</Typography>
                                    </Box>
                                </div>
                                <div class="container">
                                    <CssBaseline />
                                    <Avatar variant='circle' className={classes.avatar}>
                                        <MusicVideo />
                                    </Avatar>
                                    <Box color="white" bgcolor={theme.palette.primary} p={1}>
                                        <Typography variant="body2" color="textSecondary" component="p">Lorem Ipsum is simply dummy text</Typography>
                                    </Box>
                                </div>
                                <div class="container">
                                    <CssBaseline />
                                    <Avatar variant='circle' className={classes.avatar}>
                                        <SettingsBrightness />
                                    </Avatar>
                                    <Box color="white" bgcolor={theme.palette.primary} p={1}>
                                        <Typography variant="body2" color="textSecondary" component="p">Lorem Ipsum is simply dummy text</Typography>
                                    </Box>
                                </div>
                                <ArrowBackIos className={classes.arrow} />
                            </Grid>
                        </Paper>
                    </Grid>
                </MuiThemeProvider>
            </div>
        </ >
    );
}