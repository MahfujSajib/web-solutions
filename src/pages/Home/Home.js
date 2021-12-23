import React from 'react';
import MobileApplication from '../MobileApplication/MobileApplication';
import WebApplication from '../WebApplication/WebApplication';
import Banner from './Banner';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NavigationBar></NavigationBar>
            <WebApplication></WebApplication>
            <Footer></Footer>
        </div>
    );
};

export default Home;