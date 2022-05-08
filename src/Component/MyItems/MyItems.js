import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Auth from '../../Firebase/Firebase.init';
import useLoadItemsData from '../../hooks/useLoadItemsData';
import UserItems from './UserItems';

const MyItems = () => {
    const [user] = useAuthState(Auth);
    const url = `https://pacific-refuge-31160.herokuapp.com/foods`
    const [foods] = useLoadItemsData(url)
    const myItem = foods.filter(item => user.phoneNumber ? item.phoneNumber === user.phoneNumber : item.email === user.email)
    console.log(myItem)
    return (
        <div className='container'>
            <h1 className='text-center py-2'>My Items</h1>
            <div className='row py-2'>
                {myItem.map(item => <UserItems key={item._id} data={item} />)}
            </div>
        </div>
    );
};

export default MyItems;