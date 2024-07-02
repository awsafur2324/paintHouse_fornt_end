import PropTypes from "prop-types";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const MyListCard = ({ item, setItems, items }) => {
  const handelDelete = (selectId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        }).then(() => {
          fetch(`http://localhost:5000/arts/${selectId}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remainingItem = items.filter(
                  (usr) => usr._id !== selectId
                );
                setItems(remainingItem);
              }
            });
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <div className="w-full self-center align-middle sm:w-96 md:w-80 lg:w-96 mx-auto border rounded-lg shadow-md">
      <div className="relative p-2 rounder-lg max-h-68 sm:h-56">
        <img
          src={item.Image_URL}
          alt=""
          className="w-full h-full rounded-lg object-cover"
        />
        <p className="absolute top-5 font-display4 text-sm right-5 px-2 bg-green-600 text-white rounded">
          {item.status}
        </p>
      </div>
      <div className="p-3 font-display4 flex flex-col gap-1">
        <h1 className="text-xl font-medium ">{item.Item_Name}</h1>
        <p className="flex items-center gap-1 text-lg font-display1">
          <FaBangladeshiTakaSign /> {item.price}
        </p>
        <div className="flex justify-between items-center ">
          <p>
            <span className="font-medium">Customization</span> :{" "}
            {item.customize}
          </p>
          <p className="font-medium flex items-center gap-1">
            {item.rating} <IoMdStar className="text-yellow-400" />
          </p>
        </div>
        <div className="divider"></div>
        <div className="flex flex-row justify-evenly items-center gap-5 mb-5">
          <button
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Want to delete"
            data-tooltip-variant="warning"
            onClick={() => handelDelete(item._id)}
            className="relative inline-flex items-center justify-center  px-5 py-2 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
              <AiTwotoneDelete />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Delete
            </span>
            <span className="relative invisible">Delete</span>
          </button>
          <div className="divider lg:divider-horizontal">OR</div>
          {/* Update */}

          <Link
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Want to modify"
            data-tooltip-variant="info"
            to={`/update/${item._id}`}
            className="relative inline-flex items-center justify-center  px-5 py-2 overflow-hidden font-medium text-green-600 transition duration-300 ease-out border-2 border-green-500 rounded shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
              <GrDocumentUpdate />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Update
            </span>
            <span className="relative invisible">Update</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
MyListCard.propTypes = {
  item: PropTypes.any,
  items: PropTypes.any,
  setItems: PropTypes.any,
};
export default MyListCard;
