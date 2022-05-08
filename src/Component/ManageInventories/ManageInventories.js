import { Link } from 'react-router-dom';
import useLoadItemsData from '../../hooks/useLoadItemsData';
import ManageInventoriesItem from './ManageInventoriesItem';

const ManageInventories = () => {
    const url = 'https://pacific-refuge-31160.herokuapp.com/foods'
    const [foods, setFoods] = useLoadItemsData(url)
    return (
        <div className='container'>
            <div className='py-3 d-flex justify-content-end'>
                <Link to="/add-item" className='btn btn-primary'>Add New Item</Link>
            </div>
            <div className='row g-3 py-4'>
                {foods.map(item => <ManageInventoriesItem setFood={setFoods} key={item._id} foodState={foods} food={item} />)}
            </div>
        </div>
    );
};

export default ManageInventories;