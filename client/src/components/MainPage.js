import React, { Component } from 'react';
import { Image, Placeholder } from 'semantic-ui-react';

import './Style/MainPage.css';

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      links: [
        {
          href: '/aboutme',
          photoUrl: '',
          title: 'about me'
        },
        {
          href: '/experience',
          photoUrl: '',
          title: 'experience'
        },
        {
          href: '/photos',
          photoUrl: '',
          title: 'photos'
        }
      ]
    };
  }

  componentDidMount() {
    // call api to get main page photos
    this.callMainPhotosAPI()
      .then(res => {
        const newState = {
          loading: false
        };
        const links = this.state.links.slice();
        links.forEach((item, index) => {
          item.photoUrl = res['resources'][index].secure_url;
        })
        // show the photos
        newState.links = links;
        console.log(res['resources'])
        this.setState(newState);
      })
      .catch(err => console.log(err));
  }

  callMainPhotosAPI = async () => {
    const url = "/homepageimages";
    console.log(url);
    const response = await fetch(url);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="Main-page">
        <Image className="Front-page-image" />
        <div className="App-main-content">
          <div className="Overlap-section">
            { !this.state.loading ?
                this.state.links.map((link, index) => {
                  return (
                    <a key={index} href={link.href}>
                      <Image className="Overlap-image" style={{backgroundImage: 'url(' + link.photoUrl + ')'}}>
                        <div className="Overlap-label">{link.title}</div>
                      </Image>
                    </a>
                  );
                })
                :
                this.state.links.map(function(link, index) {
                  return (
                    <a key={index} href={link}>
                      <Placeholder>
                        <Placeholder.Image square />
                      </Placeholder>
                    </a>
                  );
                })
              }
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
