import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Reviews from './Reviews';
import Services from './Services/Services';
import Tools from './Tools/Tools';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info ></Info>
            <Tools></Tools>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;