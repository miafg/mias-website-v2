import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import Linkedin from './svgIcons/Linkedin';
import Facebook from './svgIcons/Facebook';
import Github from './svgIcons/Github';
import { Route, Switch } from "react-router-dom";

// Components
import MainPage from './components/MainPage';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Photos from './components/Photos';

import './App.css';

const styles = {
  root: {
    flexGrow: 1,
    fontFamily: "Sarabun, Helvetica Neue, sans-serif"
  },
  grow: {
    flexGrow: 1,
    fontSize: "1.4rem",
    fontFamily: "Sarabun, Helvetica Neue, sans-serif"
  },

  typographyTitle: {
    fontSize: "2rem",
    fontFamily: "Sarabun, Helvetica Neue, sans-serif"
  },

  grey: {
    background: '#efefef',
    color: 'black',
    fontFamily: "Sarabun, Helvetica Neue, sans-serif"
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className="App">
        <AppBar position="static" className={classes.grey}>
          <Toolbar>
            <ButtonBase href="/">
              <Typography className={classes.typographyTitle} variant="h6" color="inherit">
                Mia Froehling Gallier
              </Typography>
            </ButtonBase>
            <div className={classNames("App-menu-buttons", classes.grow)}>
              <Button className={classes.grow} color="inherit" href="/about">About</Button>
              <Button className={classes.grow} color="inherit" href="/experience">Experience</Button>
              <Button className={classes.grow} color="inherit" href="/photos">Photos</Button>
            </div>
            <div className="App-social-buttons">
              <IconButton color="inherit" aria-label="Menu">
                <a href="https://www.linkedin.com/in/mia-froehling-gallier">
                 <Linkedin />
                </a>
              </IconButton>
              <IconButton color="inherit" aria-label="Menu">
                <a href="https://www.facebook.com/Miafroehlinggallier">
                 <Facebook />
                </a>
              </IconButton>
              <IconButton color="inherit" aria-label="Menu">
                <a href="https://github.com/miafg">
                 <Github />
                </a>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/experience" component={Experience} />
          <Route path="/photos" component={Photos} />
        </Switch>
      </main>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
