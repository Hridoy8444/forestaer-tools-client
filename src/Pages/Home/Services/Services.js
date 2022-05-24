import React from 'react';

const Services = () => {
    return (
        <div className='my-28'>
            <div className='text-center my-14'>
                <h2 className='text-primary text-xl font-bold uppercase'>Our services</h2>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div class="stats stats-vertical lg:stats-horizontal shadow">

                <div class="stat">
                    <div class="stat-title">Downloads</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Users</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Services;