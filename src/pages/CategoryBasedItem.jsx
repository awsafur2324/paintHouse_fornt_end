import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CatagoryBasedCard from "../Components/category page card/CatagoryBasedCard";

const CategoryBasedItem = () => {
  const category = useLoaderData();
  console.log(category);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/arts")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const SelectCategory = items.filter(
    (item) => item.subcategory === category.subcategory_Name
  );
  console.log(SelectCategory);

  return (
    <div>
      <div
        style={{ "--image-url": `url(${category.imges})` }}
        className={`bg-[image:var(--image-url)] bg-fixed p-14 rounded-lg bg-cover bg-center bg-no-repeat`}
      >
        <h1 className="text-4xl font-bold font-display4 text-center text-white bg-[#00000081] w-fit mx-auto p-5">
          List of{" "}
          <span className="text-green-400"> {category.subcategory_Name} </span>
        </h1>
      </div>
      <div className="p-4 mx-auto w-fit flex flex-wrap justify-center items-center self-center  gap-5">
        {SelectCategory.map((item) => (
          <CatagoryBasedCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryBasedItem;
