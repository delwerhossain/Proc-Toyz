import { Link } from "react-router-dom";

const ToyRow = ({ toy, index }) => {
  // console.log(toy);
  const { subCategory, name, price, availableQuantity, sellerName, _id } = toy;

  return (
    <tr className="text-primary hover:text-white hover">
      <td className="font-medium">{index + 1}</td>
      <td className="font-medium">{sellerName}</td>
      <td className="font-medium">{name}</td>
      <td className="font-medium">{subCategory}</td>
      <td className="font-medium">{price}</td>
      <td className="font-medium">{availableQuantity}</td>
      <td>
        <Link to={`/toy/${_id}`}>
          <button className="btn btn-outline btn-primary">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyRow;
