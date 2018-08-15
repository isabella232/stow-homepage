import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import Hero from './Hero';
import GettingStarted from './GettingStarted';
import ForDevelopers from './ForDevelopers';
import ForUsers from './ForUsers';
import ForPotentialPartners from './ForPotentialPartners';
import AboutUs from './AboutUs';

import {
  homeRoute,
  gettingStartedRoute,
  forDevelopersRoute,
  forUsersRoute,
  forPartnersRoute,
  aboutUsRoute,
} from '../routes';

const collapsedPadding = 20;

const styles = theme => ({
  section: {
    padding: 150,
    [theme.breakpoints.down('md')]: {
      padding: collapsedPadding,
      textAlign: 'center',
      paddingBottom: 150,
    },
  },
  forDevelopers: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: -300,
    zIndex: -1000000,
    position: 'relative',
    padding: '300px 150px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: collapsedPadding,
      paddingRight: collapsedPadding,
      textAlign: 'center',
    },
  },
  forUsers: {
    backgroundColor: theme.palette.secondary.light,
    padding: 150,
    paddingTop: 300,
    [theme.breakpoints.down('md')]: {
      paddingLeft: collapsedPadding,
      paddingRight: collapsedPadding,
      textAlign: 'center',
    },
  },
  tweenerSection: {
    padding: '0px 150px',
    margin: '-75px 0px',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      padding: collapsedPadding,
      textAlign: 'center',
    },
  },
});

const Home = ({ classes }) => (
  <div id="home">
    <section className={classes.section}>
      <Element name={homeRoute.key}>
        <Hero />
      </Element>
    </section>
    <section className={classes.section}>
      <Element name={gettingStartedRoute.key}>
        <GettingStarted />
      </Element>
    </section>
    <section className={classes.forDevelopers}>
      <Element name={forDevelopersRoute.key}>
        <ForDevelopers />
      </Element>
    </section>
    <section className={classes.tweenerSection}>
      <Element name={forPartnersRoute.key}>
        <ForPotentialPartners />
      </Element>
    </section>
    <section className={classes.forUsers}>
      <Element name={forUsersRoute.key}>
        <ForUsers />
      </Element>
    </section>
    <section className={classes.section}>
      <Element name={aboutUsRoute.key}>
        <AboutUs />
      </Element>
    </section>
  </div>
);

Home.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Home);
