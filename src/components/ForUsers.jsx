import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  copy: {
    color: theme.palette.white,
    padding: theme.spacing.unit * 2,
  },
  subheading: {
    marginBottom: 40,
  },
});

const ForUsers = ({ classes }) => (
  <Grid container spacing={24} className={classes.container}>
    <Grid item xs={12} md={4}>
      <Typography variant="display2" className={classes.copy}>
        Liberating for Users
      </Typography>
    </Grid>
    <Grid xs={12} item container md={8}>
      <Grid item xs={12}>
        <Typography variant="body1" className={`${classes.copy} ${classes.subheading}`}>
          Internet users have been trapped and exploited by their service providers for too long! Stow provides data freedom and independence for all.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="title" className={classes.copy}>
          OWN YOUR DATA
        </Typography>
        <Typography variant="body1" className={classes.copy}>
          You are the supreme executor of your digital identity with the Stow Protocol. Not Facebook or Google.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.container}>
        <Typography variant="title" className={classes.copy}>
         EARN YOUR FAIR SHARE
        </Typography>
        <Typography variant="body1" className={classes.copy}>
          Your data is valuable. Get paid for it! Do amazing things with it!
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.container}>
        <Typography variant="title" className={classes.copy}>
          KEEP IT SECRET AND KEEP IT SAFE
        </Typography>
        <Typography variant="body1" className={classes.copy}>
          Your data is encrypted with your unique keys, so hackers can't get your information.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.container}>
        <Typography variant="title" className={classes.copy}>
          TAKE YOUR DATA WITH YOU
        </Typography>
        <Typography variant="body1" className={classes.copy}>
          Take your digital identity with you wherever you go, whether its a new social network or the doctor's office.
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

ForUsers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForUsers);
