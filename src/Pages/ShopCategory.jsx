import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = ({ banner, category }) => {
  const { products } = useContext(ShopContext);

  return (
    <div className="container mx-auto px-4">
      <img
        src={banner}
        alt={category}
        className="block mx-auto w-4/5 mt-8 mb-0"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-5 lg:mx-[170px]">
        {products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
