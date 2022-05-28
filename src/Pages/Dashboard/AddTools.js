import React from 'react';
import { toast } from 'react-toastify';

const AddTools = () => {
    const handleAddTool = event => {
    event.preventDefault();
        const productData = {
            name: event.target.name.value,
            price: parseInt(event.target.price.value),
            quantity: parseInt(event.target.quantity.value),
            min: parseInt(event.target.min.value),
            img: event.target.img.value,
            description: event.target.description.value
        }
        fetch(`https://calm-headland-08657.herokuapp.com/tool`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Product has been added!')
                } else {
                    toast.error('Product could not be added. Please, try Again!')

                }
            })
        }
    return (
        <div>
            <h2 className='text-primary text-2xl my-5 text-center'>Add Products</h2>
            <div className='mx-10 my-10 flex justify-center'>
                <form onSubmit={handleAddTool} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                    <div className="card-body ">
                        <h2 className='text-center'> Product</h2>
                        <div className="form-control">

                            <input type="text" id='name' name='name' required placeholder='Product Name' className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="number" name='price' required placeholder='Price' className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="number" name='quantity' required placeholder='Quantity' className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="number" name='min' required placeholder='Minimum Order Quantity' className="input input-bordered" />
                        </div>

                        <div className="form-control">

                            <input type="text" name='img' required placeholder="Image Link" className="input input-bordered" />

                        </div>
                        <div className="form-control">

                            <textarea type="text" name='description' required placeholder="write a brief description..." className="input input-bordered h-40" />

                        </div>

                        <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddTools;