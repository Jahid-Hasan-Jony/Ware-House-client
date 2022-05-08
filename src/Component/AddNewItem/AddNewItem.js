import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useAuthState } from 'react-firebase-hooks/auth';
import Auth from '../../Firebase/Firebase.init';


const AddNewItem = () => {
    const [user] = useAuthState(Auth);
    const userInfo = { email: user.email, phoneNumber: user.phoneNumber };
    const { register, handleSubmit, reset } = useForm()
    const AddItemFormHandler = (data) => {
        data = { ...data, ...userInfo }
        const url = 'https://pacific-refuge-31160.herokuapp.com/foods'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log('ok')
                alert('Product Added succes')
                reset()
            })
    }
    return (
        <div className='container py-3'>
            <form onSubmit={handleSubmit(AddItemFormHandler)}>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" className="form-control" {...register('name')} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Image URL</label>
                    <input type="text" className="form-control" {...register('imgURL')} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Description</label>
                    <input type="text" className="form-control" {...register('description')} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Price</label>
                    <input type="text" className="form-control" {...register('price')} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Quantity</label>
                    <input type="number" className="form-control" {...register('quantity')} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Supplier</label>
                    <input type="text" className="form-control" {...register('supplierName')} required />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
};

export default AddNewItem;