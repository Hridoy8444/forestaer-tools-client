import React from 'react';
import './MyPortfolio.css';
import portfolio from '../../Images/Portfolio/Hridoy-bg.png'

const MyPortfolio = () => {
    return (
        <div>
            <div style={{ minHeight: "70vh" }} className='portfolio-container'>
                <div className='img-container'>
                    <img height={300} src={portfolio} alt="" />
                </div>
                <div >
                    <div className='text-center' style={{ marginTop: "20px" }}>
                        <h2>Md Fardous Hossain Reday</h2>
                        <h5>Bachelor in Software Engineering, Yangzhou University, China</h5>
                        <h5>Email: mdreday736@gmail.com</h5>
                    </div>
                    <div className='tech-container'>
                        <h2>List of technologies I learn last six month</h2>
                        <p >
                            <li>React Router</li>
                            <li>Firebase</li>
                            <li>React-bootstrap</li>
                            <li>Bootstrap</li>
                            <li> Tostify</li>
                            <li>Nodejs</li>
                            <li>MongoDB</li>
                            <li>Express.js</li>
                            <li>Tailwind</li>
                            <li>DaisyUi</li>
                            <li>React Query</li>
                            <li>JWT Token</li>
                        </p>
                        <div className='m-6'>
                            <p>Three of my website link </p>
                            <span>Link 1: <a className='text-blue-500' href="https://simle-sharp-photography.netlify.app/">Smile Sharp photography</a> </span><br />
                            <span>Link 2: <a className='text-blue-500' href="https://unload-warehouse.netlify.app/">Unload Warehouse</a> </span><br />
                            <span>Link 3: <a className='text-blue-500' href="https://watch-house-app.netlify.app/">Watch House</a> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;