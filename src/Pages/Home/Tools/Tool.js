import React from 'react';

const Tool = ({ tool }) => {
    const { img, name, description, min, quantity, price } = tool
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Available Product: {quantity}PCS</p>
                <p>Minimum Order: {min}PCS</p>
                <p>{description}</p>
                <p>Price per Unit: {price}$</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;