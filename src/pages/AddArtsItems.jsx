import { IoMdImage } from "react-icons/io";
import { MdDriveFileRenameOutline, MdOutlineEmail } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";
import { MdManageHistory } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import img from "../assets/Img/All item/2151120368.jpg";
import { useContext, useState } from "react";
import { AuthProvider } from "../ContextProvider/ContextProvider";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { Bounce } from "react-awesome-reveal";
const AddArtsItems = () => {
  const { user } = useContext(AuthProvider);
  const [name, setName] = useState(user.displayName);

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const Image_URL = form.Image_URL.value;
    const Item_Name = form.Item_Name.value;
    const subcategory = form.subcategory.value;
    const customize = form.customize.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processTime = form.processTime.value;
    const status = form.status.value;
    const user_name = form.user_name.value;
    const user_email = form.user_email.value;
    const short_description = form.short_description.value;

    const AddItem = {
      Image_URL,
      Item_Name,
      subcategory,
      customize,
      price,
      rating,
      processTime,
      status,
      user_name,
      user_email,
      short_description,
    };

    fetch("http://localhost:5000/arts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(AddItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
          toast.success("Item Added Successfully");
        }
      })
      .catch(() => toast.error("Item Added Failed"));
  };
  return (
    <div>
      
      <div
        style={{ "--image-url": `url(${img})` }}
        className={`bg-[image:var(--image-url)] bg-fixed p-14 rounded-lg bg-cover bg-center bg-no-repeat`}
      >
        <h1 className="text-4xl font-bold font-display4 text-center text-dark">
          Add <span className=""> Arts Items </span>
        </h1>
      </div>
      <Bounce>
        <form
          onSubmit={handelSubmit}
          className="max-w-[600px] mx-auto p-5 my-14 bg-slate-500 rounded-lg flex flex-col gap-4"
        >
          <label className="input input-bordered flex items-center gap-2">
            <IoMdImage />
            <input
              type="text"
              name="Image_URL"
              className="grow"
              placeholder="Image URL"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdDriveFileRenameOutline />
            <input
              type="text"
              name="Item_Name"
              className="grow"
              placeholder="Item Name"
              required
            />
          </label>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {/* sub category */}
            <select
              className="select select-bordered w-full md:max-w-xs"
              name="subcategory"
              required
            >
              <option value={""} disabled selected>
                Choose a subcategory
              </option>
              <option value={"Landscape Painting"}>Landscape Painting</option>
              <option value={"Portrait Drawing"}>Portrait Drawing</option>
              <option value={"Watercolour Painting"}>
                Watercolour Painting
              </option>
              <option value={"Oil Painting"}>Oil Painting</option>
              <option value={"Charcoal Sketching"}>Charcoal Sketching</option>
              <option value={"Cartoon Drawing"}>Cartoon Drawing</option>
            </select>
            {/* customization  */}
            <select
              className="select select-bordered w-full md:max-w-xs"
              name="customize"
              required
            >
              <option value={""} disabled selected>
                Is customization available ?
              </option>
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <label className="input input-bordered flex items-center gap-2 w-full md:max-w-xs">
              <FaBangladeshiTakaSign />
              <input
                type="number"
                className="grow"
                name="price"
                placeholder="Price"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full md:max-w-xs">
              <IoStarOutline />
              <input
                data-tooltip-id="my-tooltip-add"
                data-tooltip-content="Give Rating under 5"
                type="number"
                className="grow"
                name="rating"
                step="0.01"
                placeholder="Rating"
                required
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <label className="input input-bordered flex items-center gap-2 w-full md:w-[50%]">
              <MdManageHistory />
              <input
                data-tooltip-id="my-tooltip-add"
                data-tooltip-content="Set time in days"
                type="number"
                className="grow"
                name="processTime"
                placeholder="Processing Time"
                required
              />
            </label>
            <select
              className="select select-bordered w-full md:w-[50%]"
              name="status"
              required
            >
              <option value={""} disabled selected>
                Stock status ?
              </option>
              <option value={"In stock"}>In stock</option>
              <option value={"Made to Order"}>Made to Order</option>
            </select>
          </div>
          <label className="input input-bordered flex items-center gap-2 w-full ">
            <GrUserManager />
            <input
              onChange={(e) => setName(e.target.value)}
              type="name"
              className="grow"
              name="user_name"
              value={name}
              placeholder="Your name"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full ">
            <MdOutlineEmail />
            <input
              data-tooltip-id="my-tooltip-add"
              data-tooltip-content="You can't modify it !"
              type="email"
              className="grow"
              name="user_email"
              value={user.email}
              placeholder="Your email"
              required
            />
          </label>
          <textarea
            name="short_description"
            className="textarea textarea-bordered"
            placeholder="Short Description About Arts"
            required
          ></textarea>
          <button
            data-tooltip-id="my-tooltip-extra"
            data-tooltip-content="Are you ready to add this item ?"
            data-tooltip-variant="success"
            type="submit"
            className=" relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group "
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-[110%] group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Add to List</span>
          </button>
          <Tooltip id="my-tooltip-extra" place="right-start" />
          <Tooltip id="my-tooltip-add" place="left" />
        </form>
      </Bounce>
    </div>
  );
};

export default AddArtsItems;
