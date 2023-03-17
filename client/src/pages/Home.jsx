import React from 'react';
import Hero from '../components/hero/Hero';
import Navbar from '../components/navbar/Navbar';
import Steps from '../components/steps/Steps';
import Treatment from '../components/Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Steps />
            <Treatment />
        </div>
    );
}

export default Home;
