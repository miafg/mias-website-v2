import React from 'react';
import './Style/MainPage.css';

const MainPage = () => (
  <div className="App">
    <div className="Front-page-image" />
    <div className="App-main-content">
      <div className="Overlap-section">
        <a href="/aboutme">
          <div className="Overlap-label-image Overlap-label-image-1">About Me</div>
        </a>
        <a href="/experience">
          <div className="Overlap-label-image Overlap-label-image-2">Experience</div>
        </a>
        <a href="/photos" >
          <div className="Overlap-label-image Overlap-label-image-3">Photos</div>
        </a>
      </div>
    </div>
  </div>
);

export default MainPage;
