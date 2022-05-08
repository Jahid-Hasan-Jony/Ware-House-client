import React from 'react';

const ManageInventoriesItem = (props) => {
    const { _id, name, imgURL, description, price, quantity, supplierName } = props.food;
    const { setFood, foodState } = props

    const deleteItemHandler = () => {
        const url = `https://pacific-refuge-31160.herokuapp.com/foods/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remaing = foodState.filter(item => item._id !== _id)
                setFood(remaing)
            })

    }
    return (
        <div className='col-md-6'>
            <div class="card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgURL} className="card-img-top w-100 h-100" alt={name} />
                    </div>
                    <div class="col-md-8">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <h6>{`Product ID : ${_id}`}</h6>
                                <button onClick={deleteItemHandler} className='btn btn-danger btn-sm'>Delete</button>
                            </div>
                            <h3 className="card-title">{name}</h3>
                            <h5 className="card-title">{`Price : ${price} TK`}</h5>
                            <h5 className="card-title">{`Quantity : ${quantity}`}</h5>
                            {/* <button onClick={quantityUpdateHandler} className='btn btn-outline-success my-2'>Delivered</button> */}
                            <p className="card-text">{description}</p>
                            <h5 className="card-title">{`Supplier Name : ${supplierName}`}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventoriesItem;