import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeItems = (props) => {
    const { _id, name, imgURL, description, price, quantity, supplierName } = props.item
    const [descriptionSize, setDescriptionSize] = useState(140)
    const descriptionSizeHandler = (e) => {
        if (e.target.innerHTML === ' see more..') {
            setDescriptionSize(description.length)
        } else {
            setDescriptionSize(120)
        }
    }

    return (<div className='col-md-4'>
        <div className="card">
            <img src={imgURL} style={{ height: '276px' }} className="card-img-top w-100" alt={name} />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <h5 className="card-title">{`Price : ${price} TK`}</h5>
                <h5 className="card-title">{`Quantity : ${quantity}`}</h5>
                <p className="card-text">{description.slice(0, descriptionSize)}<span style={{ cursor: 'pointer' }} className='text-success fw-bold' onClick={(e) => { descriptionSizeHandler(e) }}>{descriptionSize > 120 ? ` see Less` : ` see more..`}</span></p>
                <h5 className="card-title">{`Supplier Name : ${supplierName}`}</h5>
                <Link to={`/inventory/${_id}`} className="btn btn-success">Update</Link>
            </div>
        </div>
    </div >

    );
};

export default HomeItems;