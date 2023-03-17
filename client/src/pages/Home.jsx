import React from 'react';
import Footer from '../components/footer/Footer';
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
            <Footer />
        </div>
    );
}

export default Home;
