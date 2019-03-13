import React from 'react';
import { Image, Icon } from 'semantic-ui-react';

import './Style/MainPage.css';

const MainPage = () => (
  <div className="Main-page">
    <Image className="Front-page-image" />
    <div className="App-main-content">
      <div className="Overlap-section">
        <a href="/aboutme">
          <Image className="Overlap-image Overlap-image-1">
            <div className="Overlap-label">About Me</div>
          </Image>
        </a>
        <a href="/experience">
          <Image className="Overlap-image Overlap-image-2">
            <div className="Overlap-label">Experience</div>
          </Image>
        </a>
        <a href="/photos">
          <Image className="Overlap-image Overlap-image-3">
            <div className="Overlap-label">Photos</div>
          </Image>
        </a>
      </div>
    </div>
  </div>
);

export default MainPage;
