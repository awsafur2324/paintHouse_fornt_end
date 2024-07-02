import { IoMdImage } from "react-icons/io";
import { MdDriveFileRenameOutline} from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";
import { MdManageHistory } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import img from "../assets/Img/All item/31757250_7875751.jpg";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
const Update = () => {
  const item = useLoaderData();

  const handelUpdate = (e) => {
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
    const short_description = form.short_description.value;
    const updateData = {
      Image_URL,
      Item_Name,
      subcategory,
      customize,
      price,
      rating,
      processTime,
      status,
      short_description,
    };
    fetch(`http://localhost:5000/arts/${item._id}`,{
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(updateData)
    })
      .then((res) => res.json())
      .then((data) => {console.log(data)
      
      if(data.matchedCount >0){
        toast.success("Update Successfully")
      }
    });
  };

  return (
    <div>
      <div
        style={{ "--image-url": `url(${img})` }}
        className={`bg-[image:var(--image-url)] bg-fixed p-14 rounded-lg bg-cover bg-center bg-no-repeat`}
      >
        <h1 className="text-4xl font-bold font-display4 text-center text-dark">
          Items <span className=""> Update </span>
        </h1>
      </div>
      <form
        onSubmit={handelUpdate}
        className="max-w-[600px] mx-auto p-5 my-14 border shadow-lg rounded-lg flex flex-col gap-4"
      >
        <label className="input input-bordered flex items-center gap-2">
          <IoMdImage />
          <input
            type="text"
            className="grow"
            name="Image_URL"
            placeholder="Image URL"
            defaultValue={item.Image_URL}
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <MdDriveFileRenameOutline />
          <input
            type="text"
            className="grow"
            placeholder="Item Name"
            name="Item_Name"
            defaultValue={item.Item_Name}
            required
          />
        </label>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {/* sub category */}
          <select
            defaultValue={item.subcategory}
            className="select select-bordered w-full md:max-w-xs"
            name="subcategory"
            required
          >
            <option value={""} disabled selected>
              Choose a subcategory
            </option>
            <option value={"Landscape Painting"}>Landscape Painting</option>
            <option value={"Portrait Drawing"}>Portrait Drawing</option>
            <option value={"Watercolour Painting"}>Watercolour Painting</option>
            <option value={"Oil Painting"}>Oil Painting</option>
            <option value={"Charcoal Sketching"}>Charcoal Sketching</option>
            <option value={"Cartoon Drawing"}>Cartoon Drawing</option>
          </select>
          {/* customization  */}
          <select
            defaultValue={item.customize}
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
              defaultValue={item.price}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full md:max-w-xs">
            <IoStarOutline />
            <input
              type="number"
              className="grow"
              name="rating"
              step={"0.01"}
              placeholder="Rating"
              defaultValue={item.rating}
              required
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <label className="input input-bordered flex items-center gap-2 w-full md:w-[50%]">
            <MdManageHistory />
            <input
              type="number"
              className="grow"
              name="processTime"
              placeholder="Processing Time"
              defaultValue={item.processTime}
              required
            />
          </label>
          <select
            defaultValue={item.status}
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
        <textarea
          defaultValue={item.short_description}
          name="short_description"
          className="textarea textarea-bordered"
          placeholder="Short Description About Arts"
          required
        ></textarea>
        <button
          type="submit"
          className="relative inline-flex items-center justify-center  px-5 py-2 overflow-hidden font-medium text-green-600 transition duration-300 ease-out border-2 border-green-500 rounded shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
            <GrDocumentUpdate />
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            Update
          </span>
          <span className="relative invisible">Update</span>
        </button>
      </form>
    </div>
  );
};

export default Update;
