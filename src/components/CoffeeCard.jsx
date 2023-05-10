/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, test, category, details, photo } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie"
                />
            </figure>
            <div className=" flex justify-between items-center w-full">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Supplier: {supplier}</p>
                    <p>Test: {test}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-2 ">
                        <button className="btn">View</button>
                        <button className="btn">Edit</button>
                        <button className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
