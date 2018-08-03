import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TwitterLogo from './../images/TwitterLogo';
import GithubLogo from './../images/GithubLogo';
import InstagramLogo from './../images/InstagramLogo';
import TelegramLogo from './../images/TelegramLogo';

const footerHeight = '60px';
const margin = '34px';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.black,
    position:'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    height: footerHeight
  },
  copy: {
    color: theme.palette.white,
    display: 'inline',
    lineHeight: footerHeight,
    marginLeft: margin
  },
  icon: {
    display: 'inline',
    width: 30,
    height: 30,
    marginLeft: '30px',
    marginTop: '-3px',
    verticalAlign: 'middle'
  },
  buttonBar: {
    display: 'inline',
    float: 'right',
    lineHeight: footerHeight,
    marginRight: margin
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.root}>
        <Typography variant='caption' className={classes.copy}>
          © 2018 ConsenSys, AG
        </Typography>
        <div className={classes.buttonBar}>
          <TwitterLogo classes={{ root: classes.icon }} />
          <GithubLogo classes={{ root: classes.icon }} />
          <InstagramLogo classes={{ root: classes.icon }} />
          <TelegramLogo classes={{ root: classes.icon }} />
        </div>
      </footer>
    );
  }
};

export default withStyles(styles)(Footer);
