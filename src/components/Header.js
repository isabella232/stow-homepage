import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import routes, { homeRoute } from './../routes';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-scroll';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  tab: {
    minWidth: 'unset',
  },
  tabLabelContainer: {
    padding: 10
  },
  menuIcon: {
    height: '35px',
    width: '35px'
  },
  tabs: {
    [theme.breakpoints.down('sm')]: {
      flex: 1
    }

  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  hide: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
});

class Header extends Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="sticky" color="primary">
        <Toolbar className={classes.tabs}>
            {routes.map((route, i) => (
              <Link
                to={route.key}
                smooth={true}
                duration={500}
                key={i}
                className={classes.hide}
              >
              <Tab
                label={route.title}
                href={route.path}
                classes={{
                  root: `${classes.tab}`,
                  labelContainer: classes.tabLabelContainer
                }}
              />
            </Link>
          ))}
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon
              onClick={this.handleMenu}
              className={classes.menuIcon}
            />
          </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              {routes
                .filter(route => route.key !== homeRoute.key)
                .map((route, i) => (
                  <Link
                    to={route.key}
                    smooth={true}
                    duration={500}
                    key={i}
                  >
                    <MenuItem key={i}>{route.title}</MenuItem>
                  </Link>
                )
              )}
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
