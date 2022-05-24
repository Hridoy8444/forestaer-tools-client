import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className='rounded-lg' width={604} height={541} src="https://img.freepik.com/free-photo/handyman-uses-jackhammer-installation-professional-worker-construction-site-concept-electrician-handyman_169016-5881.jpg?t=st=1653399951~exp=1653400551~hmac=3aa7ff0cb235f40599214895a099e2979aadb8e44cf065e7947438383129427a&w=1060" />
                <div>
                    <h1 class="text-5xl font-bold">Precision Machine Shop!</h1>
                    <p class="py-6">We began with  Swiss Screw Machining services and Swiss Screw Machined Products. Over the years we have expanded not only our capabilities!  We currently provide Precision CNC Turning and CNC Milling. Forster Tool is equipped to be your precision machining partner!</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;