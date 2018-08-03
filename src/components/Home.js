import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Hero from './Hero';
import GettingStarted from './GettingStarted';
import ForDevelopers from './ForDevelopers';
import ForUsers from './ForUsers';
import ForPotentialPartners from './ForPotentialPartners';

const styles = theme => ({
  section: {
    padding: 150,
    [theme.breakpoints.down('sm')]: {
      padding: 10,
      textAlign: 'center',
      paddingBottom: 150
    }
  },
  forDevelopers: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: -300,
    zIndex: -1000000,
    position: 'relative',
    marginBottom: 150,
    padding: 150,
    paddingTop: 500
  },
  forUsers: {
    backgroundColor: theme.palette.secondary.light,
    padding: 150,
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <section className={classes.section}>
          <Hero />
        </section>
        <section className={classes.section}>
          <GettingStarted />
        </section>
        <section className={classes.forDevelopers}>
          <ForDevelopers />
        </section>
        <section className={classes.section}>
          <ForPotentialPartners />
        </section>
        <section className={classes.forUsers}>
          <ForUsers />
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
