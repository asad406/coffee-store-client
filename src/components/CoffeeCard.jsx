/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, test, category, details, photo } =
        coffee;
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                    });
            }
        });
    };
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
                        <Link to={`/updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn"
                        >
                            X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
