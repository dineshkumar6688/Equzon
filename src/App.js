import React from'react';
import Header from './Components/header';
import Footer from './Components/footer.js';
import Featured from './Components/featured.js';
import EquzonListing from './Components/equzonlisting.js'
import Banner from './Components/banner.js'
import BannerForm from './Components/banner-form.js'
import Listings from './Components/listings.js'
import About from './Components/about.js'
import Carousel from './Components/carousel.js'
import {Container, Col} from 'reactstrap'

function App() {
  return (   
    <div>
      <Container>
        <div>
          <Header/>
      </div>
      <div>
          <Banner/>
      </div>
      <div>
          <BannerForm/>
      </div>
      <div>
        <EquzonListing/>
      </div>
      <div>
        <Listings/>
      </div>
      <div>
        <Carousel/>
      </div>
      <div>
        <Featured/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Footer/>
      </div>
      </Container>
    </div>
  );
}

export default App;
