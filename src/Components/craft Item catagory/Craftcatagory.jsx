import { useEffect, useState } from "react";
import CatagoryItems from "./CatagoryItems";
import { Bounce } from "react-awesome-reveal";

const CraftCategory = () => {
    const [category , setCategory] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/categories")
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div className="my-10">
           <h1 className="text-4xl font-bold font-display4 text-center">Our <span className="text-green-700">Catagories</span></h1>
      <Bounce duration={"500"}>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5">
           {
            category.map(cat => (
                <CatagoryItems key={cat._id} cat={cat}/>
            ))
           }
           </div>
      </Bounce>
        </div>
    );
};

export default CraftCategory;