/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, test, category, details, photo } =
        coffee;
        const handleUpdate = e => {
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
    
            fetch(`http://localhost:5000/teaCoffee/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newCoffee)
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.modifiedCount){
                    Swal.fire({
                        title: 'Successful!',
                        text: 'Coffee Updated',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
            })
        }
        return (
            <div className='bg-gray-300 p-8 md:p-28'>
                <h2 className='text-4xl font-bold'>Update a Coffee</h2>
                <form onSubmit={handleUpdate}>
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
                                defaultValue={name}
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
                                defaultValue={quantity}
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
                                defaultValue={supplier}
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
                                defaultValue={test}
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
                                defaultValue={category}
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
                                defaultValue={details}
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
                                defaultValue={photo}
                                placeholder="Photo URL"
                                className="input input-bordered w-full"
                            />                        
                        </div>
                    </div>
                    <input type="submit" value="update Coffee" className='btn btn-success w-full'/>
                </form>
            </div>
        );
};

export default UpdateCoffee;
