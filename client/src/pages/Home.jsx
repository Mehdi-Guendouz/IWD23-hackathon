import React from 'react';
import Hero from '../components/hero/Hero';
import Navbar from '../components/navbar/Navbar';
import Services from '../components/service/Services';
import Steps from '../components/steps/Steps';
import Treatment from '../components/Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Steps />
            <Treatment />
            <Services />
        </div>
    );
}

export default Home;
