import { Link, useLoaderData } from "react-router-dom";
import img from "../assets/Img/All item/2151151089.jpg";
import {  Slide } from "react-awesome-reveal";



const AllArtsItems = () => {
  const items = useLoaderData();

  return (
    <div>
     
      <div
        style={{ "--image-url": `url(${img})` }}
        className={`bg-[image:var(--image-url)] bg-fixed p-14 rounded-lg bg-cover bg-center bg-no-repeat`}
      >
        <h1 className="text-4xl font-bold font-display4 text-center text-dark">
          All <span className=""> Arts Items </span>
        </h1>
      </div>
      <Slide>
      <div className="overflow-x-auto p-5 md:p-14 rounded-lg">
        <table className="table border shadow-md rounded-lg font-display4">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Additional info</th>
              <th>Action</th>
            </tr>
          </thead>   
          <tbody>
            {/* row 1 */}
        {items.map((item, id) => (
              <tr key={id}>
                <th>{id + 1}</th>
                <td className=" w-56 overflow-hidden h-56">
                  <img
                    src={item.Image_URL}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                  />
                </td>
                <td className="font-medium">{item.Item_Name}</td>
                <td>
                  <div className="flex flex-row justify-start items-center gap-1">
                    <p className="align-middle font-medium">
                      Category <br />
                      Status <br />
                      Price <br />
                      Rating <br />
                    </p>
                    <p className="align-middle">
                      : {item.subcategory} <br />: {item.status}
                      <br />: {item.price} tk <br />: {item.rating}
                    </p>
                  </div>
                </td>
                <td>
                  <Link
                    to={`/viewDetails/${item._id}`}
                    className="relative mx-auto px-5 py-3 overflow-hidden font-medium text-green-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                  >
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-green-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-green-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-600 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                      View Details
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
        
          </tbody>
        </table>
      </div>
      </Slide>
    </div>
  );
};

export default AllArtsItems;
