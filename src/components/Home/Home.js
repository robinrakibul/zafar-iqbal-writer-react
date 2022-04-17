import React from 'react';
import Awards from '../Awards/Awards';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import SingleCard from '../SingleCard/SingleCard';

const Home = () => {
    return (
        <div>
        {/* banner and services component linked */}
        <h1 className='p-5 text-center font-[poppins] text-3xl font-bold'>A Famous Writer</h1>
          <Banner></Banner>
          <SingleCard></SingleCard>
          <Awards></Awards>
          <Services></Services> 
        </div>
    );
};

export default Home;