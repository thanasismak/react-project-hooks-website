import React from 'react';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Grid, CssBaseline } from '@material-ui/core'
import classNames from 'classnames'
import { SocialIcon } from 'react-social-icons';
const useStyles = makeStyles(theme => ({
    root: {
        // marginTop: 30,
        backgroundColor: `#F5F5F5`,
        borderTop: 'solid 3px #000080',
        paddingTop: '16px',
        overflowX: 'hidden'
    },
    footerSections: {
        margin: '0 16px'
    },
    subFooter: {
        backgroundColor: `#000080`,
        padding: '8px 16px 8px 16px',
        marginTop: '8px'
    },
    footerText: {
        color: 'black',
        fontSize: '18px',
        lineHeight: 1.5
    },
    invertedBtnDark: {
        color: 'black',
        backgroundColor: 'transparent',
        border: '2px #fff solid',
        boxShadow: 'none',
        margin: '8px'
    },
    white: {
        color: 'black'
    },
    flexContainer: {
        display: 'flex'
    }
}));
const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Grid
                    container
                    spacing={0}
                    className={classNames(classes.footerText, classes.footerSections)}
                >
                    <Grid item xs={12} sm={4}>
                        <div vocab="http://schema.org/" typeof="Organization" style={{ textAlign: 'center' }}>
                            <span property="name">ACS Courier ΚΟΥΤΛΗΣ ΔΗΜΗΤΡΙΟΣ</span>
                            <div property="address" typeof="PostalAddress">
                                <span property="streetAddress">Κονδύλη 24</span>
                                <span property="addressLocality" style={{ display: 'block' }}>
                                    Καλαμπάκα , Ελλάδα{' '}
                                </span>
                                <span property="postalCode">422 00</span>
                            </div>
                            <span property="telephone">(2432) 079029</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Grid container>
                            <Grid
                                className={classes.flexContainer}
                                style={{ justifyContent: 'center' }}
                                item
                                xs={12}
                            >
                            </Grid>
                            <Grid
                                className={classes.flexContainer}
                                style={{ justifyContent: 'flex-end' }}
                                item
                                xs={6}
                            >
                            </Grid>
                            <Grid className={classes.flexContainer} item xs={6}>
                                {/* <InvertedButton
                                    style={{ width: '92px' }}
                                    className={classes.invertedBtnDark}
                                    href="https://franciscan.secure.force.com/events"
                                    title="Visit"
                                >
                                    Visit
                                </InvertedButton> */}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ul style={{ listStyle: 'none', margin: 0 }}>
                            <li>
                                {<SocialIcon url="http://facebook.com/in/jaketrent" />}
                                {<SocialIcon url="http://google.com/in/jaketrent" />}
                            </li>
                            <li>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        </div>
    )

}

export default Footer