import React, { Component } from 'react';
// import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, Icon } from 'semantic-ui-react';
import { Route, Switch } from "react-router-dom";

// Components
import MainPage from './components/MainPage';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Photos from './components/Photos';

import './App.css';

class App extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <main className="App">
        <Menu className="App-menu" borderless attached='top' fluid size='massive'>
          <Menu.Item link href="/" header className="App-menu-header" position="left">Mia Froehling Gallier</Menu.Item>
          <Menu.Menu className="App-menu-items">
            <Menu.Item
              name='about'
              as='a'
              link
              href='/aboutme'
              active={ activeItem === 'about' }
              onClick={this.handleItemClick}
            >
              About
            </Menu.Item>
            <Menu.Item
              name='experience'
              as='a'
              link
              href='/experience'
              active={ activeItem === 'experience' }
              onClick={this.handleItemClick}
            >
              Experience
            </Menu.Item>
            <Menu.Item
              name='photos'
              as='a'
              link
              href='/photos'
              active={ activeItem === 'photos' }
              onClick={this.handleItemClick}
            >
              Photos
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu className="App-social-buttons" position="right">
            <Menu.Item as='a' href="https://www.linkedin.com/in/mia-froehling-gallier" target="_blank">
              <Icon name='linkedin' />
            </Menu.Item>
            <Menu.Item as='a' href="https://www.facebook.com/Miafroehlinggallier" target="_blank">
              <Icon name='facebook f' />
            </Menu.Item>
            <Menu.Item as='a' href="https://github.com/miafg" target="_blank">
              <Icon name='github' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/experience" component={Experience} />
          <Route path="/photos" component={Photos} />
        </Switch>
        <footer className="App-Footer">
          Created by Mia Froehling Gallier
        </footer>
      </main>
    );
  }
}

export default App;
