import React from 'react';

const CateCard = ({ product }) => {
      const {
        name,
        pictureURL,
        sellerName,
        sellerEmail,
        subCategory,
        subID,
        price,
        rating,
        availableQuantity,
        description,
      } = product;
  return (
    <div className="p-2 border rounded-xl">
      <a className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={pictureURL}
            alt={name}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-xl font-bold text-gray-700">{name}</h3>
        <h4 className="mt-4 text-xl font-bold pl-2 text-gray-700 rounded-lg p-1 bg-[#fff2d9]">
          price: {price}
        </h4>
        <p className="mt-3 text-lg font-medium text-gray-900">{description}</p>
      </a>
    </div>
  );
};

export default CateCard;