import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tool.css';

const Tool = ({ tool }) => {
    const { _id, img, name, description, min, quantity, price } = tool;
    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/tools/${id}`);
    }
    return (
        <div class="card card-compact w-96 bg-base-300 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Available Product: {quantity}PCS</p>
                <p>Minimum Order: {min}PCS</p>
                <p>{description}</p>
                <p>Price per Unit: {price}$</p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigateToPurchase(_id)}  class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;