import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <div className="w-[350px] hover:scale-105 transition-transform duration-500">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="w-full" />
        <p className="mt-2 text-lg font-medium">{name}</p>
        <div className="flex gap-5 mt-1">
          <div className="text-lg font-semibold text-gray-800">
            ${new_price}
          </div>
          <div className="text-lg text-gray-500 line-through">${old_price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
