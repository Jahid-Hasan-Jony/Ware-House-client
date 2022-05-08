import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams()
    const [food, setFood] = useState([])
    const [updated, setUpdated] = useState(false)
    const url = `https://pacific-refuge-31160.herokuapp.com/foods/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [updated])

    const { _id, name, imgURL, description, price, quantity, supplierName } = food;
    const putMethod = (newQuantity) => {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: newQuantity })
        })
            .then(res => res.json())
            .then(data => { setUpdated(!updated) })
    }
    const quantityUpdateHandler = () => {
        if (quantity !== 0) {
            let newQuantity = (quantity - 1)
            putMethod(newQuantity)
        }
    }
    const quantityUpdateFormHandler = (event) => {
        event.preventDefault()
        let newQuantity = quantity + (parseInt(event.target[1].value) ? parseInt(event.target[1].value) : 0)
        putMethod(newQuantity)
        event.target[1].value = '';
    }
    return (
        <div>
            <div className='row py-5 m-2'>
                <div className='col-md-6 d-flex align-items-center justify-content-center py-3 my-sm-3'>
                    <div class="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={imgURL} className="card-img-top w-100 h-100" alt={name} />
                            </div>
                            <div class="col-md-8">
                                <div className="card-body">
                                    <h6>{`Product ID : ${_id}`}</h6>
                                    <h3 className="card-title">{name}</h3>
                                    <h5 className="card-title">{`Price : ${price} TK`}</h5>
                                    <h5 className="card-title">{`Quantity : ${quantity}`}</h5>
                                    <button onClick={quantityUpdateHandler} className='btn btn-outline-success my-2'>Delivered</button>
                                    <span className={`text-light bg-danger p-2 mx-3 rounded ${quantity === 0 ? 'd-inline' : 'd-none'}`}>Product Sold</span>
                                    <p className="card-text">{description}</p>
                                    <h5 className="card-title">{`Supplier Name : ${supplierName}`}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                    <form onSubmit={(e) => quantityUpdateFormHandler(e)}>
                        <fieldset>
                            <legend>Update Current Quantity Value</legend>
                            <div className="mb-3">
                                <label className="form-label">Restock the items</label>
                                <input type="number" name='quantityValue' className="form-control" placeholder="Enter Number" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div className='container d-flex align-items-center justify-content-center'>
                <Link className='btn btn-outline-success btn-lg my-5' to='/manage-inventories'>Manage Inventories</Link>
            </div>
        </div >
    );
};

export default Inventory;