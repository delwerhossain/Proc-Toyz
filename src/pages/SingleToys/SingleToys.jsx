import Rating from "react-rating";

const SingleToys = ({ product }) => {
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
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative pb-96 overflow-hidden">
          <img
            className="absolute inset-0 w-full "
            src={pictureURL}
            alt={name}
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold  tracking-wide text-xs">
            Category - <span className="uppercase">{subCategory}</span>
          </span>
          <h2 className="mt-2 mb-2  font-bold">{name}</h2>
          <p className="text-sm">{description}</p>
          <div className="mt-3 flex items-center">
            <span className="text-sm font-semibold">ab</span>&nbsp;
            <span className="font-bold text-xl">{price}</span>&nbsp;
            <span className="text-sm font-semibold">€</span>
          </div>
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700">
          <span className="flex items-center mb-1">
            <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>
            <span className="font-bold">Quantity : </span> {availableQuantity}
          </span>
          <span className="flex items-center mb-1">
            <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{" "}
            <span className="font-bold"> Seller Name : </span> {sellerName}
          </span>
          <span className="flex items-center">
            <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
            <span className="font-bold">Email : </span>
            {sellerEmail}
          </span>
        </div>
        <div className="p-4 flex items-center text-sm text-gray-600">
 <Rating initialRating={rating} readonly />
          <span className="ml-2">34 people</span>
        </div>
              <div className="p-4 flex  items-center justify-end">
                  <button className="btn btn-primary mr-4">Edit </button>
                  <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleToys;