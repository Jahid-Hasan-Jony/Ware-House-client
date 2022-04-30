import React from 'react';

const Spinner = () => {
    return (
        <div className='d-flex align-items-center justify-content-center py-5'>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;