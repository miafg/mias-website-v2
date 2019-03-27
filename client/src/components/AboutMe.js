import React from 'react';
import { Image } from 'semantic-ui-react';

import './Style/AboutMe.css';

const AboutMe = () => (
  <Image className="About-me">
    <div className="About-me-description">
      I am software developer who codes by day and bakes by night.
      I am passionate about being a woman in tech and helping others get involved!
      In my free time, I like to travel, explore new places and cusines.
    </div>
  </Image>
);

export default AboutMe;