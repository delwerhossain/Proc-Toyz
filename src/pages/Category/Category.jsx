import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const cateID = useParams().category;
    console.log(cateID);
    return (
        <div>
            <h1 className='text-6xl text-red-600'>this is categories</h1>
        </div>
    );
};

export default Category;