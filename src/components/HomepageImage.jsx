import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import imgworld from '../images/23.jpg';
import { Grid } from '@material-ui/core';
import HomePageForm from './Forms/HomepageForm';
// import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

const image = {
  flexGrow: 1,
  height: '100vh',
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

function HomepageImage() {
  const theme = useTheme();
  return (
    <>
      <div style={image}>
        <Grid container spacing={12} className={styles.root}>
          <Grid item xs={6}>

            {/* <Carousel slideIndex={0}
              afterSlide={2}> */}
            <HomePageForm />
            {/* <img src={car1} />
              <img src={car2} />
              <img src={car3} />
            </Carousel> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HomepageImage;