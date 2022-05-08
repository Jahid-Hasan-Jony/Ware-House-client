import React from 'react';
import { Link } from 'react-router-dom';

const UserItems = (props) => {
    const { _id, name, imgURL, description, price, quantity, supplierName } = props.data
    return (
        <div className='col-md-4'>
            <div className="card">
                <img src={imgURL} style={{ height: '276px' }} className="card-img-top w-100" alt={name} />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h5 className="card-title">{`Price : ${price} TK`}</h5>
                    <h5 className="card-title">{`Quantity : ${quantity}`}</h5>
                    <p className="card-text">{description}</p>
                    <h5 className="card-title">{`Supplier Name : ${supplierName}`}</h5>
                    <Link to={`/inventory/${_id}`} className="btn btn-success">Update</Link>
                </div>
            </div>
        </div >
    );
};

export default UserItems;