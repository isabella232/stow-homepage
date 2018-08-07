import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const marginBottom = 50;

const styles = theme => ({
  title: {
    textAlign: 'center',
    marginBottom: 70
  },
  item: {
    marginBottom
  },
  profilePicture: {
    width: '100%'
  },
  team: {
    [theme.breakpoints.down('sm')]: {
      margin: 'auto'
    }
  },
  container: {
    [theme.breakpoints.down('md')]: {
    marginTop: 70
  }
  }
});

class AboutUs extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant='display2'>
            ABOUT US
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography className={classes.item} variant='title'>
            OUR MISSION
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography className={classes.item} variant='title'>
            Linnia wants to subvert the digital data ownership paradigm by giving users ownership of their digital footprint.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography className={classes.item} variant='title'>
            OUR STORY
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography className={classes.item} variant='title'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor nunc, egestas sed est sit amet, posuere tincidunt mi. Nunc a elit nec nunc ultrices pretium. Ut finibus et elit eget vehicula.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography className={classes.item} variant='title'>
            OUR TEAM
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} spacing={24} container className={classes.team}>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.profilePicture}
              src='evin-mcmullen.png'
              alt='Evin McMullen'
            />
            <Typography variant='title'>Evin McMullen</Typography>
            <Typography variant='subheading'>Product</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.profilePicture}
              src='godfrey-hobbs.jpeg'
              alt='Godfrey Hobbs'
            />
            <Typography variant='title'>Godfrey Hobbs</Typography>
            <Typography variant='subheading'>Software Engineer</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.profilePicture}
              src='max-blaushild.jpg'
              alt='Max Blaushild'
            />
            <Typography variant='title'>Max Blaushild</Typography>
            <Typography variant='subheading'>Software Engineer</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.profilePicture}
              src='anuj-shah.jpeg'
              alt='Anuj Shah'
            />
            <Typography variant='title'>Anuj Shah</Typography>
            <Typography variant='subheading'>Software Engineer</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.profilePicture}
              src='david-rhodus.jpeg'
              alt='David Rhodus'
            />
            <Typography variant='title'>David Rhodus</Typography>
            <Typography variant='subheading'>Technology Evangelist</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.profilePicture}
              src='anthony-albertorio.jpeg'
              alt='Anthony Albertorio'
            />
            <Typography variant='title'>Anthony Albertorio</Typography>
            <Typography variant='subheading'>Community Manager</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.profilePicture}
              src='vicente-rotman.jpeg'
              alt='Vicente Rotman'
            />
            <Typography variant='title'>Vicente Rotman</Typography>
            <Typography variant='subheading'>Engineering Intern</Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AboutUs);
