import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import SingleCard from '../SingleCard/SingleCard';

const Home = () => {
    return (
        <div>
        {/* banner and services component linked */}
          <Banner></Banner>
          <SingleCard></SingleCard>
          <Services></Services> 
        </div>
    );
};

export default Home;