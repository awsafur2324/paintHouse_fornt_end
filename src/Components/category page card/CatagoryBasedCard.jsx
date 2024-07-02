import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";
import { GrPaint } from "react-icons/gr";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
const CatagoryBasedCard = ({ item }) => {
  const short = item.short_description;
  return (
    <div className="w-full self-center align-middle sm:w-96 md:w-80 lg:w-96 mx-auto border rounded-lg shadow-md">
      <div className="relative p-2 rounder-lg max-h-68 sm:h-56">
        <img
          src={item.Image_URL}
          alt=""
          className="w-full h-full rounded-t-lg object-cover"
        />
        <p className="flex flex-row items-center gap-1 absolute top-5 font-display4 text-sm right-5 px-2 bg-green-600 text-white rounded">
          {item.price} <FaBangladeshiTakaSign />
        </p>
        <p className="flex items-center gap-1 absolute bottom-5 font-display4 text-sm left-5 px-2 bg-[#00000089] text-white rounded">
          <GrPaint />
          {item.subcategory}
        </p>
      </div>
      <div className="p-3 font-display4 flex flex-col gap-1">
        <p className="text-2xl font-medium">{item.Item_Name}</p>
        <p className=" text-justify pr-2">
          <span className="font-medium">Description :</span>{" "}
          {short.slice(0, 90)}...
        </p>
        <p className=" text-justify pr-2">
          <span className="font-medium">Process Time :</span> {item.processTime}{" "}
          days
        </p>
        <p className=" text-justify pr-2 flex fle-row items-center gap-1">
          <span className="font-medium">Rating :</span> {item.rating}{" "}
          <IoMdStar className="text-green-400" />
        </p>
        <Link
          to={`/viewDetails/${item._id}`}
          className="text-center mt-5 relative px-5 py-3 overflow-hidden font-medium text-green-600 bg-green-100 border border-green-100 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-green-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-green-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative text-center transition-colors duration-300 delay-200 group-hover:text-white ease">
            View Details
          </span>
        </Link>
      </div>
    </div>
  );
};
CatagoryBasedCard.propTypes = {
  item: PropTypes.any,
};
export default CatagoryBasedCard;
