import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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

const ForDevelopers = ({ classes }) => (
  <Grid container spacing={24} className={classes.container}>
    <Grid item xs={12} md={4}>
      <Typography variant="display2" className={classes.copy}>
        Built for Developers
      </Typography>
    </Grid>
    <Grid item xs={12} container md={8}>
      <Grid item xs={12}>
        <Typography variant="body1" className={`${classes.copy} ${classes.subheading}`}>
          Taking the jump to be a blockchain developer can be intimidating. The Stow Protocol makes building on the blockchain easy!
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="title" className={classes.copy}>
          WRITE SERVERLESS APPS
        </Typography>
        <Typography variant="body1" className={classes.copy}>
          No need for servers when building on top of Stow. Authentication is federated to tools like Metamask and Misk and persistence is handled by Ethereum.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.container}>
        <Typography variant="title" className={classes.copy}>
          EARN STOW TOKENS
        </Typography>
        <Typography variant="body1" className={classes.copy}>
          Be compensated with cryptocurrency for acting as brokers between data buyers and sellers.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.container}>
        <Typography variant="title" className={classes.copy}>
          HANDLE DATA, NOT RISK
        </Typography>
        <Typography variant="body1" className={classes.copy}>
          Develop in a trustless, encryted environment where users have all of the agency, and thus all of the responsibility for their actions.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.container}>
        <Typography variant="title" className={classes.copy}>
          SWIM IN A BIG POND
        </Typography>
        <Typography variant="body1" className={classes.copy}>
          Develop at scale immediately. All of Stow's users are your users.
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

ForDevelopers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ForDevelopers);
