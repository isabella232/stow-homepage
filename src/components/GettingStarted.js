import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  item: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  copy: {
    textAlign: 'center'
  },
  card: {
    backgroundColor: theme.palette.primary.main,
    padding: 30
  },
  ctaButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.white,
    marginTop: 20
  },
  item: {
      marginBottom: 40
  }
});

class GettingStarted extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent color="primary">
          <Grid
            container
            spacing={24}
          >
            <Grid item xs={12}>
              <Typography
                variant='display2'
                className={classes.copy}
              >
                GETTING STARTED
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.item}>
              <div className={classes.copy}>
                <Typography variant='title'>
                  LinniaJS
                </Typography>
                <Typography variant='body1'>
                  LinniaJS is our Javascript SDK. This library allows you to start building on top of our smart contracts immediately.
                </Typography>
                <Button className={classes.ctaButton}>
                  Check it Out
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.item}>
              <div className={classes.copy}>
                <Typography variant='title'>
                  Linnia Box
                </Typography>
                <Typography variant='body1'>
                  The Linnia Box is a React UI template that comes with baked in Linnia Protocol and IPFS integration.
                </Typography>
                <Button className={classes.ctaButton}>
                  Try it out
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.item}>
              <div className={classes.copy}>
                <Typography variant='title'>
                  LINNIA NODE
                </Typography>
                <Typography variant='body1'>
                  Linnia Node is a NodeJS server that captures all of the records and permissions stored in the Linnia and allows you to query them.
                </Typography>
                <Button className={classes.ctaButton}>
                  Check it Out
                </Button>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(GettingStarted);
