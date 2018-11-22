import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  alert: {
    padding: 20,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.white,
  },
});

class RebrandBanner extends Component {
  constructor() {
    super();
    this.state = {
      shouldShowBanner: false,
    };
  }

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const host = window.location.host;
    const isLinnia = host === 'linnia.com';
    const fromLinnia = !!params.get('fromLinnia');
    const shouldShowBanner = isLinnia || fromLinnia;
    this.setState({ shouldShowBanner });
  }

  closeBanner() {
    this.setState({
      shouldShowBanner: false,
    });
  }

  render() {
    const { shouldShowBanner } = this.state;
    const { classes } = this.props;

    return (
      <Drawer
        anchor="top"
        open={shouldShowBanner}
        onClose={() => this.closeBanner()}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => this.closeBanner()}
          onKeyDown={() => this.closeBanner()}
        >
          <Typography className={classes.alert}>
            We've rebranded! Linnia is now Stow.
          </Typography>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(RebrandBanner);
