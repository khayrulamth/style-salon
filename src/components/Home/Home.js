import React from 'react';
import NavBar from '../NavBar';
import HeadCarouser from './HeadCarouser';
import Services from './Services';
import Offer from './Offer';
import Rating from './Rating';
import Footer from '../Footer';

const Home = () => {
    return (
        <div >
            <NavBar></NavBar>
            <HeadCarouser></HeadCarouser>
            <Services></Services>
            <Offer></Offer>
            <Rating></Rating>
            <Footer></Footer>
        </div>
    );
};

export default Home;