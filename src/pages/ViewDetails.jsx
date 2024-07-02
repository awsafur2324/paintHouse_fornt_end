
import { GrUserManager } from "react-icons/gr";
import { MdOutlineMarkAsUnread } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const item = useLoaderData();
  return (
    <div className="container mb-10 mt-2 mx-auto flex flex-col md:flex-row justify-start items-stretch gap-10 p-4 lg:p-0">
      <div className="bg-[#1313130d] overflow-hidden flex justify-center rounded-xl p-5 w-full lg:w-[70%]">
        <img
          src={item.Image_URL}
          alt=""
          width={"100%"}
          height={"100%"}
          className="mx-auto object-contain hover:scale-110 duration-500"
        />
      </div>
      <div className=" w-full my-2">
        <h1 className=" text-4xl font-bold playfair-font">
          {item.Item_Name}
        </h1>
        <p className="flex flex-col text-sm justify-start items-start  font-medium sans-font my-2">
          <p className="flex flex-row justify-center items-center gap-1">
            {" "}
            <GrUserManager /> : {item.user_name}
          </p>
          <p className="flex flex-row justify-center items-center align-middle gap-1">
            {" "}
            <MdOutlineMarkAsUnread /> : {item.user_email}
          </p>
        </p>
        <hr />
        <p className=" text-base font-medium sans-font my-3">
          {item.subcategory}
        </p>
        <hr />
        <p className="text-sm sans-font my-4">
          <span className="font-semibold ">Description :</span>{" "}
          <span className="text-wrap text-justify  font-normal">
            {item.short_description}
          </span>
        </p>
        <div className="flex flex-row justify-start items-center gap-5 text-[#23BE0A] font-medium text-xs sans-font my-5">
          <p className="font-bold  text-sm">Price : </p>
          <p className="text-sm  flex flex-row justify-center items-center gap-1">
            {" "}
            <FaBangladeshiTakaSign /> {item.price}
          </p>
        </div>
        <hr className="my-5" />
        <div className=" flex flex-row justify-start items-start gap-5">
          <div className="flex flex-col gap-2  font-normal text-xs sans-font">
            <p>Status :</p>
            <p>Customization :</p>
            <p>Processing time :</p>
            <p>Rating :</p>
          </div>
          <div className="flex flex-col gap-2  font-semibold text-xs sans-font">
            <p>{item.status}</p>
            <p>{item.customize}</p>
            <p>{item.processTime} days</p>
            <p className="flex flex-row justify-start items-center gap-1">
              {item.rating} <IoMdStar className="text-yellow-500" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
