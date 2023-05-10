/* eslint-disable no-unused-vars */
import React from 'react';

const AddCoffee = () => {
    const handleAdd = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const test = form.test.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const newCoffee = {name, quantity, supplier,test, category, details, photo}
        console.log(newCoffee)

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className='bg-gray-300 p-8 md:p-28'>
            <h2 className='text-4xl font-bold'>Add a Coffee</h2>
            <form onSubmit={handleAdd}>
                {/* Name and quantity row */}
                <div className='flex mb-6'>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">
                                Coffee Name
                            </span>                            
                        </label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Coffee Name"
                            className="input input-bordered w-full"
                        />                        
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">
                                Available Quantity
                            </span>                            
                        </label>
                        <input
                            type="text"
                            name='quantity'
                            placeholder="Available Quantity"
                            className="input input-bordered w-full"
                        />                        
                    </div>
                    
                </div>
                {/* Supplier and Test row */}
                <div className='flex mb-6'>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">
                                Supplier Name
                            </span>                            
                        </label>
                        <input
                            type="text"
                            name ="supplier"
                            placeholder="Supplier Name"
                            className="input input-bordered w-full"
                        />                        
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">
                                Test
                            </span>                            
                        </label>
                        <input
                            type="text"
                            name='test'
                            placeholder="Test"
                            className="input input-bordered w-full"
                        />                        
                    </div>
                    
                </div>
                {/* Category and details row */}
                <div className='flex mb-6'>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">
                                Category
                            </span>                            
                        </label>
                        <input
                            type="text"
                            name='category'
                            placeholder="Category"
                            className="input input-bordered w-full"
                        />                        
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">
                                Details
                            </span>                            
                        </label>
                        <input
                            type="text"
                            name='details'
                            placeholder="Details"
                            className="input input-bordered w-full"
                        />                        
                    </div>
                    
                </div>
                {/* Name and quantity row */}
                <div className='flex mb-6'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">
                                Photo URL
                            </span>                            
                        </label>
                        <input
                            type="text"
                            name='photo'
                            placeholder="Photo URL"
                            className="input input-bordered w-full"
                        />                        
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className='btn btn-block'/>
            </form>
        </div>
    );
};

export default AddCoffee;
