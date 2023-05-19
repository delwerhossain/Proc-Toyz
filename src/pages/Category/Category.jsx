import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const cateID = useLoaderData()
    console.log(cateID);
    return (
        <div>
            <h1 className='text-6xl text-red-600'>this is categories</h1>
        </div>
    );
};

export default Category;