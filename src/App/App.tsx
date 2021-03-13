import React from 'react';
import './App.css';
import styled from 'styled-components';
import { MAX_WIDTH, MIN_WIDTH } from '../webConstants';
import { BrowserRouter } from 'react-router-dom';

import Desktop from '../Desktop/Desktop';
import Mobile from '../Mobile/Mobile';

// Show Desktop Version of the WebSite
const DesktopVersion = styled(Desktop)`

  @media only screen and (max-width: ${MAX_WIDTH}px) {  // On Mobile
    display: none;
  }

  @media only screen and (min-width: ${MIN_WIDTH}px) {  // On Computer
    
  }
`;

// Show Mobile Version of the WebSite
const MobileVersion = styled(Mobile)`

  @media only screen and (max-width: ${MAX_WIDTH}px) {  // On Mobile
    
  }

  @media only screen and (min-width: ${MIN_WIDTH}px) {  // On Computer
    display: none;
  }
`;

function App() {
  return (
    <BrowserRouter>
        <MobileVersion></MobileVersion>
        <DesktopVersion></DesktopVersion>
    </BrowserRouter>
  );
}

export default App;
