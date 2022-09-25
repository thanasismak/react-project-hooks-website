import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, CssBaseline, Divider, Paper, Typography, Grid } from '@material-ui/core';
import { Image, Work, BeachAccess } from '@material-ui/icons';
import InvertedButton from '../components/InvertedButton';

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
    },
    paper: {
        backgroundColor: '#F5F5F5', // #8B0000
        padding: theme.spacing(12),
        color: '#00008B',
    },
    container: {
        backgroundColor: '#F5F5F5'
    },
    invertedBtnDark: {
        border: '2px #fff solid',
        boxShadow: 'none',
        marginLeft: '4rem',
        width: 'fullwidth',
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
                        <Paper className={classes.paper} square={true} elevation={12}>
                            <Typography component="h1" style={{ fontWeight: 'bold', textAlign: 'center' }} variant="h2">Services</Typography>
                            <CssBaseline />
                            <List className={classes.root}>
                                <ListItem >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Image />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                    />
                                </ListItem>
                                <InvertedButton className={classes.invertedBtnDark} href="#/services">
                                    Read More...
                                </InvertedButton>
                                <Divider variant="fullWidth" orientation component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Work />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                    />
                                </ListItem>
                                <InvertedButton className={classes.invertedBtnDark} href="#/services">
                                    Read More...
                                </InvertedButton>
                                <Divider variant="fullWidth" orientation component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <BeachAccess />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                    />
                                </ListItem>
                                <InvertedButton className={classes.invertedBtnDark} href="#/services">
                                    Read More...
                                </InvertedButton>
                            </List>
                        </Paper>
                    </Grid>
                </MuiThemeProvider>
            </div>
        </ >
    );
}