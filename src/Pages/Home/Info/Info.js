import React from 'react';
import InfoCard from './InfoCard';
import world from '../../../icons/world.svg';
import storage from '../../../icons/storage.svg';
import truck from '../../../icons/truck.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            <InfoCard cardTitle="Fastest Delivery" bgClass="bg-secondary from-secondary to-primary" img={truck}></InfoCard>
            <InfoCard cardTitle="Worldwide Transport" bgClass="bg-accent" img={world}></InfoCard>
            <InfoCard cardTitle="Warehousing" bgClass="bg-gradient-to-r from-secondary to-primary" img={storage}></InfoCard>
        </div>
    );
};

export default Info;