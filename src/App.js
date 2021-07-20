import React from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Featured from './components/featured/feauters';
import VenueNFo from './components/venueNfo/index';
import Highlight from  './components/highlights/highlighits';
import Pricing from './components/pricing/pricing';
import Location from './components/location/location';

const App = () => {
  return (
      <div className="App">
        <Header/>

        <Element name='featured'>
          <Featured/>
        </Element>

        <Element name='venueinfo'>
          <VenueNFo/>
        </Element>

        <Element name='highlights'>
          <Highlight/>
        </Element>

        <Element name='pricing'>
          <Pricing/>
        </Element>

        <Element name='location'>
          <Location/>
        </Element>

        <Footer/>
      </div>
  );
}

export default App;
