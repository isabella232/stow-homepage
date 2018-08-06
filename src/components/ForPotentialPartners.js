import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    padding: 20
  },
  copy: {
    textAlign: 'center'
  },
  body: {
    padding: '10px 100px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: 10
    }
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.white
  },
  actions: {
    justifyContent: 'center'
  }
});

class ForPotentialPartners extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant='title' className={classes.copy}>
            Partners
          </Typography>
          <Typography variant='body1' className={classes.body}>
            Does your organization want to take the leap into web 3.0? We should work together! Please don't hesitate to reach out and we can start a dialog.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button className={classes.button}>Work with Us</Button>
        </CardActions>
      </Card>
    );
  }
}

ForPotentialPartners.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ForPotentialPartners);
