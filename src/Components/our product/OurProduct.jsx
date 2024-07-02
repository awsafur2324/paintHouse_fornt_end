import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { JackInTheBox } from "react-awesome-reveal";

const OurProduct = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/arts").then((res) => res.json()).then((data) =>
      setItems(data)
    );
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold font-display4 text-center">
        Our <span className="text-green-700">Products</span>
      </h1>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5">
        <JackInTheBox direction="right">
        {items.slice(0,6).map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
        </JackInTheBox>
      </div>
    </div>
  );
};

export default OurProduct;
