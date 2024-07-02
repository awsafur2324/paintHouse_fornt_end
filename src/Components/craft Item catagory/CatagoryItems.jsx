import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
const CatagoryItems = ({ cat }) => {
  return (
    <Link
      data-tooltip-id="my-tooltip-style"
      data-tooltip-content="Click me to view my category"
      to={`/categoryItems/${cat._id}`}
      className="w-auto p-2 shadow-md border group hover:shadow-xl hover:cursor-pointer "
    >
      <div className="h-[200px]">
        <img src={cat.imges} alt="" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-xl text-center p-2 font-display3 font-medium group-hover:underline">
        {cat.subcategory_Name}
      </h2>
      <Tooltip id="my-tooltip-style" place="right-start" style={{background : "green"}}/>
    </Link>
  );
};
CatagoryItems.propTypes = {
  cat: PropTypes.any,
};

export default CatagoryItems;
