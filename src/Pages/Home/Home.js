import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import Tools from './Tools/Tools';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info ></Info>
            <Tools></Tools>
            <Services></Services>
        </div>
    );
};

export default Home;