import React from 'react';
import Hero from '../components/hero/Hero';
import Services from '../components/service/Services';
import Steps from '../components/steps/Steps';
import Treatment from '../components/Treatment/Treatment';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div className='font-poppins'
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}>
            <Hero />
            <Steps />
            <Treatment />
            <Services />
        </motion.div>
    );
}

export default Home;
