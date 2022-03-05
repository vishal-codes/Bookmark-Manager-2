import React,{ useState } from 'react';

import Navbar from './Navbar/Navbar';
import MobileNavBar from './Navbar/MobileNavbar';
import Home from './HomeSection/Home';
import Features from './FeaturesSection/Features';
import { firstFeature, secondFeature, thirdFeature } from './FeaturesSection/FeaturesContent';
import StartUsing from './StartUsingSection/StartUsing';
import Contact from './ContactSection/Contact';

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
      <React.Fragment>
          <MobileNavBar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <Home/>
          <div id="features">
            <Features {...firstFeature}/>
            <Features {...secondFeature}/>
            <Features {...thirdFeature}/>
          </div>
          <StartUsing/>
          <Contact/>
      </React.Fragment>
  );
}

export default LandingPage;