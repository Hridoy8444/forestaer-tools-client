import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51L4ksbEvxlIAmuMap0nQhTZ8aImMdFPyMWpPIru8t0VaEyHXe1yHpyd9sM0LUOMZrJmBAHLwmeRASxaOIdNACYYO00fS1fpilS');
const Payment = () => {
    const { id } = useParams();
    const url = `https://calm-headland-08657.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {

            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <button class="btn loading">loading</button>;
    }

    return (
        <div className='ml-14 m-10'>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 ">
                <div class="card-body">
                    <p className='text-success text-bold'>Hello, {order.userName}</p>
                    <h2 class="card-title">Please Pay for {order.name}</h2>
                    <p className='text-warning'>Your Pay amount is {order.amount}$</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                            <CheckOutForm order={order} />
                        </Elements>

                </div>
            </div>

        </div>
    );
};

export default Payment;