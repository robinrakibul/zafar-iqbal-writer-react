import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
        {/* banner and services component linked */}
          <Banner></Banner>
          <Services></Services> 
        </div>
    );
};

export default Home;