import React from 'react';
import NavBar from '../NavBar';
import HeadCarouser from './HeadCarouser';
import Services from './Services';
import Offer from './Offer';
import Rating from './Rating';
import Footer from '../Footer';
import WhyUs from './WhyUs';

const Home = () => {
    return (
        <div >
            <NavBar></NavBar>
            <HeadCarouser></HeadCarouser>
            <Services></Services>
            <Offer></Offer>
            <WhyUs></WhyUs>
            <Rating></Rating>
            <Footer></Footer>
        </div>
    );
};

export default Home;