import { useContext, useEffect, useState } from "react";
import MyListCard from "../Components/MylistCard/MyListCard";
import img from "../assets/Img/All item/7266.jpg";
import { AuthProvider } from "../ContextProvider/ContextProvider";
import { useLoaderData } from "react-router-dom";
import {  Slide } from "react-awesome-reveal";

const MyArtList = () => {
  const data = useLoaderData();
  const [items, setItems] = useState([]);
  const [saveData, setSaveData] = useState([]);
  const { user } = useContext(AuthProvider);

  useEffect(() => {
    // Assuming 'data' is already available in the scope
    const filteredItems = data.filter((item) => item.user_email === user.email);
    setSaveData(filteredItems);
    setItems(filteredItems);
  }, [data, user.email]);

  const handelSelect = (e) => {
    const select = e.target.value;
    if (select == "Yes") {
      const customYes = saveData.filter((item) => item.customize == "Yes");
      setItems(customYes);
    } else if (select == "No") {
      const customNo = saveData.filter((item) => item.customize == "No");
      setItems(customNo);
    } else if (select == "All") {
      const customNo = saveData;
      setItems(customNo);
    }
  };

  return (
    <div>
      <div
        style={{ "--image-url": `url(${img})` }}
        className="bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-fixed bg-center p-14 rounded-lg"
      >
        <h1 className="text-4xl font-bold font-display4 text-center text-dark">
          My <span className="text-dark"> Arts Lists </span>
        </h1>
      </div>
      <Slide direction="up">
        <div className="mx-auto my-5 w-fit">
          <select
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Sort your's painting"
            onChange={handelSelect}
            className="select select-bordered w-full max-w-xs bg-green-900 text-white"
          >
            <option disabled selected value={""}>
              Want to sort by customization ?
            </option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
            <option value={"All"}>All arts</option>
          </select>
        </div>
      </Slide>
      <div className="p-4 mx-auto w-fit flex flex-wrap justify-center items-center self-center  gap-5">
        <Slide>
          {items.map((item) => (
            <MyListCard
              key={item._id}
              item={item}
              setItems={setItems}
              items={items}
            />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default MyArtList;
