import React from 'react';
import { useParams } from 'react-router';

const Inventory = () => {
    let params = useParams()
    return (
        <div className='row vh-100'>
            <div className='col-md-6 d-flex align-items-center justify-content-center'></div>
            <div className='col-md-6 d-flex align-items-center justify-content-center'>
                <form>
                    <fieldset>
                        <legend>Update Current Quantity Value</legend>
                        <div className="mb-3">
                            <label for="disabledTextInput" className="form-label">Quantity Value</label>
                            <input type="number" className="form-control" placeholder="Enter Number" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Inventory;