import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  copy: {
    textAlign: 'center',
  },
  card: {
    backgroundColor: theme.palette.primary.main,
    padding: 30,
  },
  ctaButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.white,
    marginTop: 20,
  },
  item: {
    marginBottom: 40,
  },
});

const GettingStarted = ({ classes }) => (
  <Card className={classes.card}>
    <CardContent color="primary">
      <Grid
        container
        spacing={24}
      >
        <Grid item xs={12}>
          <Typography
            variant="display2"
            className={classes.copy}
          >
            GETTING STARTED
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.copy}>
          <Typography variant="body1">
            Our resources page will provide you everything you need
            to understand the protocol technically and set up your
            development environment. It also includes links to all of
            our libraries and components that you can build on.
          </Typography>
          <a href="https://github.com/ConsenSys/linnia-resources">
            <Button className={classes.ctaButton}>
                Read the Docs
            </Button>
          </a>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

GettingStarted.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(GettingStarted);
