import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EvinMcMullen from '../assets/images/evin-mcmullen.png';
import GodfreyHobbs from '../assets/images/godfrey-hobbs.jpeg';
import MaxBlaushild from '../assets/images/max-blaushild.jpg';
import AnujShah from '../assets/images/anuj-shah.jpeg';
import DavidRhodus from '../assets/images/david-rhodus.jpeg';
import AnthonyAlbertorio from '../assets/images/anthony-albertorio.png';
import VicenteRotman from '../assets/images/vicente-rotman.jpeg';

const marginBottom = 50;

const styles = theme => ({
  title: {
    textAlign: 'center',
    marginBottom: 70,
  },
  item: {
    marginBottom,
  },
  profilePicture: {
    width: '100%',
  },
  team: {
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
    },
  },
  container: {
    [theme.breakpoints.down('md')]: {
      marginTop: 70,
    },
  },
});

const AboutUs = ({ classes }) => (
  <Grid container className={classes.container}>
    <Grid item xs={12}>
      <Typography className={classes.title} variant="display2">
        ABOUT US
      </Typography>
    </Grid>
    <Grid item xs={12} md={4}>
      <Typography className={classes.item} variant="title">
        OUR MISSION
      </Typography>
    </Grid>
    <Grid item xs={12} md={8}>
      <Typography className={classes.item} variant="title">
        Stow provides application developers with the tools to
        quickly and easily build secure, data-rich decentralized
        application without prior blockchain knowledge. The Stow
        Protocol also subverts the digital data ownership paradigm
        by giving users ownership of their digital footprint.
      </Typography>
    </Grid>
    <Grid item xs={12} md={4}>
      <Typography className={classes.item} variant="title">
        OUR STORY
      </Typography>
    </Grid>
    <Grid item xs={12} md={8}>
      <Typography className={classes.item} variant="title">
        We came together at ConsenSys, the world’s foremost Ethereum
        venture production studio. Our work is funded by ConsenSys Labs.
      </Typography>
    </Grid>
    <Grid item xs={12} md={4}>
      <Typography className={classes.item} variant="title">
        OUR TEAM
      </Typography>
    </Grid>
    <Grid item xs={12} sm={8} spacing={24} container className={classes.team}>
      <Grid item xs={12} sm={6} md={4}>
        <img
          className={classes.profilePicture}
          src={EvinMcMullen}
          alt="Evin McMullen"
        />
        <a
          href="https://www.linkedin.com/in/evin-mcmullen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="title">Evin McMullen</Typography>
        </a>
        <Typography variant="subheading">Project Lead</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <img
          className={classes.profilePicture}
          src={GodfreyHobbs}
          alt="Godfrey Hobbs"
        />
        <a
          href="https://www.linkedin.com/in/godfreyhobbs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="title">Godfrey Hobbs</Typography>
        </a>
        <Typography variant="subheading">Lead Engineer</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <img
          className={classes.profilePicture}
          src={MaxBlaushild}
          alt="Max Blaushild"
        />
        <a
          href="https://www.linkedin.com/in/maxblaushild/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="title">Max Blaushild</Typography>
        </a>
        <Typography variant="subheading">Senior Software Engineer</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <img
          className={classes.profilePicture}
          src={AnujShah}
          alt="Anuj Shah"
        />
        <a
          href="https://www.linkedin.com/in/anujshah333/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="title">Anuj Shah</Typography>
        </a>
        <Typography variant="subheading">Software Engineer</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <img
          className={classes.profilePicture}
          src={DavidRhodus}
          alt="David Rhodus"
        />
        <a
          href="https://www.linkedin.com/in/davidrhodus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="title">David Rhodus</Typography>
        </a>
        <Typography variant="subheading">Developer Evangelist</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <img
          className={classes.profilePicture}
          src={AnthonyAlbertorio}
          alt="Anthony Albertorio"
        />
        <a
          href="https://www.linkedin.com/in/anthonyalbertorio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="title">Anthony Albertorio</Typography>
        </a>
        <Typography variant="subheading">Community Curator</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <img
          className={classes.profilePicture}
          src={VicenteRotman}
          alt="Vicente Rotman"
        />
        <a
          href="https://www.linkedin.com/in/vicente-rotman-h-0379233a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="title">Vicente Rotman</Typography>
        </a>
        <Typography variant="subheading">Engineering Intern</Typography>
      </Grid>
    </Grid>
  </Grid>
);

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutUs);
