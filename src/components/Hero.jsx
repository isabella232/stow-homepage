import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-scroll';
import { gettingStartedRoute } from '../routes';

const styles = theme => ({
  heroBox: {
    maxWidth: 600,
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      margin: 'auto',
      marginTop: 100,
      padding: '0 10',
    },
  },
  heroCaption: {
    fontSize: 24,
  },
  ctaButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.white,
    marginTop: 20,
  },
});

const Hero = ({ classes }) => (
  <div className={classes.heroBox}>
    <Typography variant="display2">
      THE INTERNET THAT WAS PROMISED
    </Typography>
    <Typography
      className={`${classes.heroText} ${classes.heroCaption}`}
      variant="body2"
    >
      Liberate your users' digital identities by building decentralized
      applications on top of the Stow Protocol. Securely store and
      share data for your users in minutes with our components and SDK.
    </Typography>
    <Link
      to={gettingStartedRoute.key}
      smooth
      duration={500}
    >
      <Button className={classes.ctaButton}>
        Get Started
      </Button>
    </Link>
  </div>
);

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);
