import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

import './Style/Photos.css';
// import { beach } from './images/beach.jpg';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextCursor: undefined,
      photos: []
    };
  }

  callPhotoGalleryAPI = async () => {
    const url = "/photogallery" + (this.state.nextCursor ? `?next_cursor=${this.state.nextCursor}` : '');
    const response = await fetch(url);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  componentDidMount() {
    this.callPhotoGalleryAPI()
      .then(res => {
        const newState = {};
        // set nextCursor to prep to load next photos
        if (res['next_cursor']) {
          newState.nextCursor = res['next_cursor'];
        }
        // show the photos
        const photos = this.state.photos.slice();
        const newPhotos = photos.concat(this.parseData(res['resources']));
        newState.photos = newPhotos;
        this.setState(newState);
      })
      .catch(err => console.log(err));
  }

  parseData(photos) {
    return photos.map((element, index) => {
      return {
        src: element.url,
        width: element.width,
        height: element.height
      };
    });
  }

  render() {
    return (
      <div className="Photos">
        <Gallery photos={ this.state.photos } />
      </div>
    );
  }
}

export default Photos;