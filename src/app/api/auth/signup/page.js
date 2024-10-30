"use client"
import Link from 'next/link';
import React from 'react';

const page = () => {
    const handelRegister = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value;
        const type = form.type.value;

        const newUser = {
            name,
            email,
            password,
            image,
            type
        };

        console.log(newUser)

        const response = await fetch('http://localhost:3000/api/auth/signup/new-user', {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json"
            }
        })
        form.reset();
        console.log(response);
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handelRegister} className="card-body">
                        <div className="name">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Full Name"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="email">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="image">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Enter Your Image URL"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="image">
                            <label className="label">
                                <span className="label-text">UserType</span>
                            </label>
                            <select name="type" className="select select-bordered w-full ">
                                <option value="admin">Admin</option>
                                <option value="moderator">Moderator</option>
                                <option value="member">Member</option>
                            </select>
                        </div>



                        <div className="password">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;