import React from 'react';
import { Image } from 'semantic-ui-react';

import './Style/AboutMe.css';

const AboutMe = () => (
  <Image className="About-me">
    <div className="About-me-description">
    I am a recent college graduate, who majored in Cognitive Science and Computer Science.
    I am software developer who codes by day and bakes by night.
    I like to travel and explore new places and cusines.
    </div>
  </Image>
);

export default AboutMe;