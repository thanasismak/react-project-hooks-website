import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import imgworld from '../images/23.jpg';
// import Paper from "@bit/mui-org.material-ui.paper";

import { Grid, FormControl, TextField, Paper, CardContent, CardMedia, Card } from '@material-ui/core';

import HomePageForm from './Forms/HomepageForm';

const image = {
  flexGrow: 1,
  // padding: theme.spacing(3),
  height: '100vh',
  // textAlign: 'center',
  backgroundBlendMode: 'darken',
  backgroundImage: `url(${imgworld})`,
  backgroundPosition: 'center' /* Center the image */,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', // ('450px' ,'350px')
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    width: '100%',
  },
  control: {
    padding: theme.spacing.unit * 12
  },
  chipWrapper: {
    marginBottom: theme.spacing.unit * 5
  },
  media: {
    // height: 160,
    height: '60%',
    maxWidth: '100%',
    backgroundSize: 'contain',
  },
  content: {
    height: '40%',
    padding: '10px 16px 10px 16px',
    textAlign: 'center',
  },
});

const formControl = {
  // position: 'initial !important',
  fontWeight: 'fullWidth',
  fontSize: 17,
  color: 'black',
  fontFamily: 'sans-serif',
  // margin: theme.spacing(1),
  minWidth: 200,
};

function HomepageImage() {
  const theme = useTheme();
  return (
    <>
      <div style={image}>
        <Grid container spacing={12} className={styles.root}>
          <Grid item xs={6}>
            <HomePageForm />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HomepageImage;