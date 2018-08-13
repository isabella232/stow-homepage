import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TwitterLogo from './../images/TwitterLogo';
import GithubLogo from './../images/GithubLogo';
import InstagramLogo from './../images/InstagramLogo';
import TelegramLogo from './../images/TelegramLogo';
import RedditLogo from './../images/RedditLogo';

const footerHeight = '60px';
const margin = '34px';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.black,
    position:'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }

  },
  copy: {
    color: theme.palette.white,
    display: 'inline',
    lineHeight: footerHeight,
    marginLeft: margin,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      lineHeight: '40px'
    }
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
    marginRight: margin,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center',
      marginRight: 0
    }
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
          <a
            href="https://twitter.com/linniaproject"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogo classes={{ root: classes.icon }} />
          </a>
          <a
            href="https://github.com/ConsenSys/linnia-resources"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo classes={{ root: classes.icon }} />
          </a>
          <a
            href="https://www.instagram.com/linniaproject"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo classes={{ root: classes.icon }} />
          </a>
          <a
            href="t.me/NYCBlockchainDevs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramLogo classes={{ root: classes.icon }} />
          </a>
          <a
            href="https://www.reddit.com/r/Linnia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RedditLogo classes={{ root: classes.icon }} />
          </a>
        </div>
      </footer>
    );
  }
};

export default withStyles(styles)(Footer);
