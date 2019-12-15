import React from 'react';
import { makeStyles, useTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { Grid, CssBaseline } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
// import Link from 'next/link'
import InvertedButton from './InvertedButton'
import { SocialIcon } from 'react-social-icons';
import fb from '../../src/fb.svg';
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
                                {/* <InvertedButton
                                    style={{ width: '200px' }}
                                    className={classes.invertedBtnDark}
                                    href="https://franciscan.secure.force.com/form?formid=217772"
                                    title="Request Info"
                                >
                                    Request Info
                                </InvertedButton> */}
                            </Grid>
                            <Grid
                                className={classes.flexContainer}
                                style={{ justifyContent: 'flex-end' }}
                                item
                                xs={6}
                            >
                                {/* <InvertedButton
                                    style={{ width: '92px' }}
                                    className={classes.invertedBtnDark}
                                    href="https://franciscanuniversity.force.com/portal"
                                    title="Apply"
                                >
                                    Apply
                                </InvertedButton> */}
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
                                {/* <Link
                                    prefetch={true}
                                    as="/contact"
                                    href="/page?type=aboutPages&id=contact"
                                >
                                    <a className={classes.white} style={{ fontWeight: 400 }}>
                                        Contact
                                    </a>
                                </Link> */}
                            </li>
                                    <li>
                                        {/* <Link
                                    prefetch={true}
                                    as="/directions-and-attractions"
                                    href="/page?type=aboutPages&id=directions-and-attractions"
                                >
                                    <a className={classes.white} style={{ fontWeight: 400 }}>
                                        Directions
                                    </a>
                                </Link> */}
                                    </li>
                        </ul>
                    </Grid>
                    </Grid>
                    {/* <Grid className={classes.subFooter} item xs={12}>
                    <Typography
                        className={classes.white}
                        variant="subheading"
                        component={'span'}
                    >
                        © {currentYear} 24Hours Courier
                    </Typography>
                </Grid> */}
            </MuiThemeProvider>
        </div>
            )
        
        }
        
export default Footer